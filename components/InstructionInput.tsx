import React from "react";
import { Input } from "@/components/ui/input";

interface InstructionInputProps {
    value: string;
    onChange: (value: string) => void;
}

const InstructionInput: React.FC<InstructionInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <Input
            type="text"
            placeholder="Enter instructions here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default InstructionInput;
