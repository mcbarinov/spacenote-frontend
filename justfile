set dotenv-load
set shell := ["bash", "-cu"] # Always use bash so &&, ||, and redirects work predictably

format:
    pnpm run format

lint: format
    pnpm run lint

dev:
    pnpm run dev

generate-types:
    pnpm run generate
