import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SettingsFormProps {
    onClose: () => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ onClose }) => {
    const [apiKey, setApiKey] = useState("");
    const [baseUrl, setBaseUrl] = useState("");
    const [model, setModel] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Load settings from localStorage when component mounts
        const savedApiKey = localStorage.getItem("apiKey");
        const savedBaseUrl = localStorage.getItem("baseUrl");
        const savedModel = localStorage.getItem("model");

        if (savedApiKey) setApiKey(savedApiKey);
        if (savedBaseUrl) setBaseUrl(savedBaseUrl);
        if (savedModel) setModel(savedModel);
    }, []);

    const handleSave = () => {
        if (!apiKey.trim()) {
            setError("API Key is required");
            return;
        }

        // Save settings to localStorage
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("baseUrl", baseUrl);
        localStorage.setItem("model", model);

        setError("");
        onClose();
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                    id="apiKey"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API key"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="baseUrl">Base URL (optional)</Label>
                <Input
                    id="baseUrl"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                    placeholder="Enter the base URL"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="model">Model (optional)</Label>
                <Input
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Enter the model name"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button onClick={handleSave}>Save</Button>
        </div>
    );
};

export default SettingsForm;
