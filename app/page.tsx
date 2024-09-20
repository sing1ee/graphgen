"use client";

import React, { useState } from "react";
import TextInput from "@/components/TextInput";
import InstructionInput from "@/components/InstructionInput";
import AISuggestions from "@/components/AISuggestions";
import MermaidGraph from "@/components/MermaidGraph";
import { Button } from "@/components/ui/button";

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
        <div className="flex h-screen p-4">
            <div className="w-1/2 pr-2 flex flex-col space-y-4">
                <div className="flex-grow">
                    <TextInput value={text} onChange={setText} />
                </div>
                <InstructionInput
                    value={instruction}
                    onChange={setInstruction}
                />
                <Button onClick={handleGenerateGraph}>Generate Graph</Button>
                <div className="flex-grow">
                    <AISuggestions suggestions={aiSuggestions} />
                </div>
            </div>
            <div className="w-1/2 pl-2">
                <MermaidGraph graphDefinition={graphDefinition} />
            </div>
        </div>
    );
}
