import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MermaidGraphProps {
    graphDefinition: string;
}

const MermaidGraph: React.FC<MermaidGraphProps> = ({ graphDefinition }) => {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mermaidRef.current && graphDefinition) {
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
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Knowledge Graph</CardTitle>
            </CardHeader>
            <CardContent>
                <div ref={mermaidRef} className="w-full h-full overflow-auto" />
            </CardContent>
        </Card>
    );
};

export default MermaidGraph;
