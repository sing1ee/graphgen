import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
    const { text, instruction } = await req.json();

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

    try {
        const stream = await client.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: 'You are a helpful assistant that generates Mermaid graph definitions based on user input.' },
                { role: 'user', content: `Text: ${text}\nInstruction: ${instruction}\nGenerate a Mermaid graph definition based on the given text and instruction.` }
            ],
            stream: true,
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    controller.enqueue(encoder.encode(content));
                }
                controller.close();
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
        console.error('Error:', error);
        return new NextResponse(JSON.stringify({ error: 'An error occurred while generating the graph' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}