"use client";

import React, { useState } from "react";
import TextInput from "../components/TextInput";
import InstructionInput from "../components/InstructionInput";
import AISuggestions from "../components/AISuggestions";
import MermaidGraph from "../components/MermaidGraph";

export default function Home() {
    const [text, setText] = useState("");
    const [instruction, setInstruction] = useState("");
    const [aiSuggestions, setAiSuggestions] = useState("");
    const [graphDefinition, setGraphDefinition] = useState(
        "graph TD\nA[Client] --> B[Load Balancer]\nB --> C[Server01]\nB --> D[Server02]"
    );

    const handleGenerateGraph = async () => {
        // TODO: Implement API call to generate graph based on text and instruction
        // For now, we'll just set some dummy data
        setAiSuggestions(
            "AI suggestions will appear here based on the input text and instructions."
        );
        setGraphDefinition("graph TD\nA[Start] --> B[Process]\nB --> C[End]");
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 p-4 flex flex-col">
                <div className="h-1/3 mb-4">
                    <TextInput value={text} onChange={setText} />
                </div>
                <div className="mb-4">
                    <InstructionInput
                        value={instruction}
                        onChange={setInstruction}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={handleGenerateGraph}
                >
                    Generate Graph
                </button>
                <div className="flex-grow">
                    <AISuggestions suggestions={aiSuggestions} />
                </div>
            </div>
            <div className="w-1/2 p-4 border-l">
                <MermaidGraph graphDefinition={graphDefinition} />
            </div>
        </div>
    );
}
