import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidGraphProps {
    graphDefinition: string;
}

const MermaidGraph: React.FC<MermaidGraphProps> = ({ graphDefinition }) => {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mermaidRef.current) {
            mermaid.initialize({ startOnLoad: true });
            mermaid
                .render("mermaid-graph", graphDefinition)
                .then((result: { svg: string }) => {
                    if (mermaidRef.current) {
                        mermaidRef.current.innerHTML = result.svg;
                    }
                });
        }
    }, [graphDefinition]);

    return (
        <div className="w-full h-full border rounded overflow-auto">
            <h2 className="font-bold mb-2 p-2">Knowledge Graph</h2>
            <div ref={mermaidRef} className="p-2" />
        </div>
    );
};

export default MermaidGraph;
