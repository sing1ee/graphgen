import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AISuggestionsProps {
    suggestions: string;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ suggestions }) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
                <pre className="whitespace-pre-wrap">{suggestions}</pre>
            </CardContent>
        </Card>
    );
};

export default AISuggestions;
