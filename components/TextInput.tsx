import React from "react";

interface TextInputProps {
    value: string;
    onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
    return (
        <textarea
            className="w-full h-full p-2 border rounded resize-none"
            placeholder="Enter original text here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default TextInput;
