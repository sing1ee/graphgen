# Tech Stack

## Frontend

-   Next.js 14.2.13 (React framework)
-   React 18.3.1
-   TypeScript 5.6.2
-   Tailwind CSS 3.4.12 (for styling)

## Backend

-   Next.js API Routes (serverless functions)
-   OpenAI API (v4.62.1)

## UI Components

-   Custom components (TextInput, InstructionInput, etc.)
-   Radix UI components (@radix-ui/react-\*)
-   Lucide React (for icons)

## Graph Visualization

-   Mermaid 11.2.1 (for rendering graphs)

## Development Tools

-   ESLint 8.57.1 (for code linting)
-   PostCSS 8.4.47 (for CSS processing)
-   pnpm (package manager, inferred from pnpm-lock.yaml)

## Key Libraries and Dependencies

-   class-variance-authority: Utility for creating variant classes
-   clsx: Utility for constructing className strings
-   tailwind-merge: Utility for merging Tailwind CSS classes
-   tailwindcss-animate: Animation plugin for Tailwind CSS

## Architecture Decisions

-   Using Next.js for both frontend and backend to simplify deployment and leverage server-side rendering capabilities
-   TypeScript for improved type safety and developer experience
-   Tailwind CSS for rapid UI development and consistent styling
-   Custom components combined with Radix UI for a balance of flexibility and pre-built accessibility
-   Mermaid for graph visualization, allowing for easy generation of diagrams from text descriptions
-   OpenAI API integration for AI-powered features

## Notes

-   The project structure follows Next.js conventions with `app` directory for routing and pages
-   API routes are used for server-side logic, particularly for graph generation
-   Custom fonts (Geist) are included for typography
-   The application uses a mix of custom components and third-party libraries to achieve its functionality
