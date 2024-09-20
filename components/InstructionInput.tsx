import React from "react";

interface InstructionInputProps {
    value: string;
    onChange: (value: string) => void;
}

const InstructionInput: React.FC<InstructionInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter instructions here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default InstructionInput;
