import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
    try {
        const { text, instruction } = await req.json();

        // Input validation
        if (!text || typeof text !== 'string') {
            return new NextResponse(JSON.stringify({ error: 'Invalid or missing text input' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (!instruction || typeof instruction !== 'string') {
            return new NextResponse(JSON.stringify({ error: 'Invalid or missing instruction' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const apiKey = req.headers.get('X-API-Key') || process.env.OPENAI_API_KEY || '';
        const baseUrl = req.headers.get('X-Base-URL') || process.env.OPENAI_BASE_URL;
        const model = req.headers.get('X-Model') || process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

        if (!apiKey) {
            return new NextResponse(JSON.stringify({ error: 'API Key is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const client = new OpenAI({
            apiKey: apiKey,
            baseURL: baseUrl,
        });

        const stream = await client.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: 'You are a helpful assistant that generates Mermaid graph definitions based on user input.' },
                { role: 'user', content: `Text: ${text}\nInstruction: ${instruction}\nGenerate a Mermaid graph definition based on the given text and instruction.` }
            ],
            stream: true,
            temperature: 0.7
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of stream) {
                        const content = chunk.choices[0]?.delta?.content || '';
                        controller.enqueue(encoder.encode(content));
                    }
                    controller.close();
                } catch (error) {
                    console.error('Error in stream processing:', error);
                    controller.error(error);
                }
            },
        });

        return new NextResponse(readable, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });
    } catch (error) {
        console.error('Error in POST handler:', error);

        if (error instanceof OpenAI.APIError) {
            const { status, message } = error;
            return new NextResponse(JSON.stringify({ error: `OpenAI API error: ${message}` }), {
                status: status || 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new NextResponse(JSON.stringify({ error: 'An unexpected error occurred while generating the graph' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}