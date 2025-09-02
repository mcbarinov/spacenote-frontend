# Architecture

## Overview

SpaceNote frontend - React SPA for note-taking application.

## Tech Stack

- **React 19** + TypeScript
- **Vite** - build tool
- **TanStack Query** - server state
- **React Router v7** - routing
- **Tailwind CSS** - styling
- **React Hook Form + Zod** - forms
- **Ky** - HTTP client

## Project Structure

```
src/
├── components/
│   ├── pages/        # Page components (Login, Home)
│   ├── layout/       # Layout wrapper components
│   └── ui/           # Reusable UI components (shadcn/ui pattern)
├── contexts/
│   └── auth/         # AuthContext + AuthProvider
├── hooks/            # Custom React hooks
├── lib/              # Core utilities
│   ├── api.ts        # API methods
│   ├── http-client.ts # Ky client with auth
│   └── errors.ts     # Error handling
├── types/
│   ├── index.ts      # Type exports
│   └── generated.ts  # OpenAPI types
├── main.tsx          # Entry point
├── App.tsx           # Root component
└── router.tsx        # Route definitions
```

## Core Systems

### Authentication

- Token-based (localStorage)
- AuthContext provides `login`, `logout`, `isAuthenticated`
- Auto-redirect on 401

### HTTP Client

- Base: `http://localhost:3100` (configurable via `VITE_API_URL`)
- Auto-inject auth token from localStorage
- Global error handling

### Routing

```typescript
/login    - Login page (public)
/         - Layout wrapper
  └── /   - Home page (protected)
```

### API Integration

- Types generated from OpenAPI: `pnpm run generate:types`
- Type-safe API calls via `api.ts`

## Key Commands

```bash
pnpm dev          # Dev server on :3000
pnpm build        # Production build
pnpm lint         # TypeScript + ESLint
pnpm typecheck    # Type checking only
```

## Environment Variables

```
VITE_API_URL       # Backend URL (default: http://localhost:3100)
SPACENOTE_OPENAPI  # OpenAPI schema URL for type generation
```
