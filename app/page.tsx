"use client";

import React, { useState, useEffect } from "react";
import TextInput from "@/components/TextInput";
import InstructionInput from "@/components/InstructionInput";
import AISuggestions from "@/components/AISuggestions";
import MermaidGraph from "@/components/MermaidGraph";
import SettingsForm from "@/components/SettingsForm";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

export default function Home() {
    const [text, setText] = useState("");
    const [instruction, setInstruction] = useState(
        `分析输入文本，执行以下任务： 1. 提取所有实体（明确和隐含的） 2. 识别实体间的关系（包括推断的潜在关系，标注"?"） 3. 突出显示关键实体 4. 分析核心矛盾和关键问题 5. 保持输入和输出语言一致 6. 生成美化的 mermaid 图表，包括 subgraph 7. 最后反思可能遗漏的实体和关系  目标是全面呈现事件全貌，便于理解和分析。`
    );
    const [aiSuggestions, setAiSuggestions] = useState("");
    const [graphDefinition, setGraphDefinition] = useState(
        "graph TD\nA[Client] --> B[Load Balancer]\nB --> C[Server01]\nB --> D[Server02]"
    );
    const [isLoading, setIsLoading] = useState(false);
    const [settings, setSettings] = useState({
        apiKey: "",
        baseUrl: "",
        model: "",
    });
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        const savedApiKey = localStorage.getItem("apiKey") || "";
        const savedBaseUrl = localStorage.getItem("baseUrl") || "";
        const savedModel = localStorage.getItem("model") || "";
        setSettings({
            apiKey: savedApiKey,
            baseUrl: savedBaseUrl,
            model: savedModel,
        });
    }, []);

    const handleGenerateGraph = async () => {
        if (!settings.apiKey) {
            setAiSuggestions("Please set your API key in the settings.");
            return;
        }

        setIsLoading(true);
        setAiSuggestions("");
        setGraphDefinition("");

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": settings.apiKey,
                    "X-Base-URL": settings.baseUrl,
                    "X-Model": settings.model,
                },
                body: JSON.stringify({ text, instruction }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const reader = response.body?.getReader();
            if (!reader) {
                throw new Error("No reader available");
            }

            let accumulatedResponse = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = new TextDecoder().decode(value);
                accumulatedResponse += chunk;

                // Update AI suggestions with the accumulated response
                setAiSuggestions(accumulatedResponse);

                // Try to extract a valid Mermaid graph definition
                const graphMatch = accumulatedResponse.match(
                    /```mermaid\n([\s\S]*?)\n```/
                );
                if (graphMatch && graphMatch[1]) {
                    setGraphDefinition(graphMatch[1].trim());
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setAiSuggestions("An error occurred while generating the graph.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSettingsUpdate = () => {
        const savedApiKey = localStorage.getItem("apiKey") || "";
        const savedBaseUrl = localStorage.getItem("baseUrl") || "";
        const savedModel = localStorage.getItem("model") || "";
        setSettings({
            apiKey: savedApiKey,
            baseUrl: savedBaseUrl,
            model: savedModel,
        });
        setIsSettingsOpen(false);
    };

    return (
        <div className="flex h-screen p-4 relative">
            <div className="absolute top-4 right-4">
                <Popover open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <SettingsForm onClose={handleSettingsUpdate} />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="w-1/2 pr-2 flex flex-col space-y-4">
                <div className="flex-grow">
                    <TextInput value={text} onChange={setText} />
                </div>
                <InstructionInput
                    value={instruction}
                    onChange={setInstruction}
                />
                <Button onClick={handleGenerateGraph} disabled={isLoading}>
                    {isLoading ? "Generating..." : "Generate Graph"}
                </Button>
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
