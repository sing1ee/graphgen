# Codebase Summary

## Project Structure

-   `/app`: Next.js app directory for routing and pages
    -   `/api`: API routes
    -   `/fonts`: Custom font files
-   `/components`: React components
    -   `/ui`: UI components (likely from Shadcn UI)
-   `/lib`: Utility functions and shared code

## Key Components

-   `SettingsForm.tsx`: Manages API settings (API key, base URL, model) with local storage persistence.
-   `MermaidGraph.tsx`: Renders Mermaid graphs using the mermaid library.
-   `TextInput.tsx`: A reusable textarea component for entering original text.
-   `InstructionInput.tsx`: A reusable input component for entering instructions.
-   `AISuggestions.tsx`: Displays AI-generated suggestions in a card format.

## Component Details

### SettingsForm.tsx

-   Manages API settings (API key, base URL, model)
-   Uses local storage for persistence
-   Implements form validation
-   Uses UI components from Shadcn UI (Button, Input, Label)

### MermaidGraph.tsx

-   Renders Mermaid graphs
-   Uses the mermaid library for graph generation
-   Implements useEffect for graph rendering and updates
-   Uses Shadcn UI Card components for layout

### TextInput.tsx

-   Simple textarea component for entering original text
-   Implements controlled component pattern

### InstructionInput.tsx

-   Simple input component for entering instructions
-   Uses Shadcn UI Input component
-   Implements controlled component pattern

### AISuggestions.tsx

-   Displays AI-generated suggestions
-   Uses Shadcn UI Card components for layout
-   Renders suggestions in a pre-formatted block

## API Routes

### /api/generate/route.ts

-   Handles graph generation requests
-   Uses OpenAI API for generating Mermaid graph definitions
-   Implements streaming responses for real-time updates
-   Accepts custom API settings (API key, base URL, model) via headers
-   Handles errors and returns appropriate responses

## Main Application File

### app/page.tsx

-   Implements the main page of the application
-   Uses React hooks (useState, useEffect) for state management
-   Integrates all key components (TextInput, InstructionInput, AISuggestions, MermaidGraph, SettingsForm)
-   Implements the graph generation logic, including API calls and response handling
-   Uses Shadcn UI components for layout and UI elements (Button, Popover)
-   Manages application state (text input, instruction, AI suggestions, graph definition, loading state, settings)
-   Implements settings management with local storage persistence
-   Handles real-time updates of AI suggestions and graph definition during generation

## Configuration Files

-   `tsconfig.json`: TypeScript configuration
-   `next.config.mjs`: Next.js configuration
-   `tailwind.config.ts`: Tailwind CSS configuration
-   `postcss.config.mjs`: PostCSS configuration
-   `.eslintrc.json`: ESLint configuration

## Recent Changes

-   Implemented key components for graph generation and AI suggestions
-   Set up API settings management with local storage persistence
-   Integrated Mermaid library for graph visualization
-   Implemented streaming responses for real-time updates during graph generation

## Notes

-   The project uses a combination of custom components and Shadcn UI components
-   API integration is handled through Next.js API routes
-   The application focuses on graph generation with AI-powered suggestions
-   Local storage is used for persisting user settings
-   The Mermaid library is central to the graph visualization feature
-   The application implements real-time updates during graph generation, providing a responsive user experience
-   Error handling is implemented both in the API route and the main application component
-   The project uses environment variables for default API settings, with the ability to override them through the UI
