import React from "react";

interface AISuggestionsProps {
    suggestions: string;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ suggestions }) => {
    return (
        <div className="w-full h-full p-2 border rounded overflow-auto">
            <h2 className="font-bold mb-2">AI Suggestions</h2>
            <pre className="whitespace-pre-wrap">{suggestions}</pre>
        </div>
    );
};

export default AISuggestions;
