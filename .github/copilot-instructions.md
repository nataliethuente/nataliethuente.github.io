# Copilot Instructions (Repository-level)

## About this project
This is a **personal website** built as a **client-side React app** (no backend code in this repo). It is scaffolded with **Vite** and uses:

- **React 19** (client-only)
- **React Router (v7)** for routing
- **React Bootstrap** for UI components and styling utilities
- **Bootstrap 5** CSS via `bootstrap` dependency

The app is intended to be simple, fast, and focused on presenting personal content.

## What to do in this repository
When working in this workspace, focus on:

- Implementing and refining React components in `src/`
- Adding routes via `react-router-dom` (check `src/main.jsx` and `src/App.jsx`)
- Styling with React Bootstrap components and Bootstrap utility classes
- Keeping the app client-side only (no server-side rendering / API server code)

## Standard workflows

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Lint (ESLint)

```bash
npm run lint
```

## Code conventions

- Prefer **functional components** and **hooks**.
- Keep components small and focused; extract reusable UI pieces when they are used in multiple places.
- Prefer `react-router-dom` v7 patterns (e.g., `<Routes>`, `<Route>`).
- Use React Bootstrap components rather than raw Bootstrap classes when it improves readability.

## Where to look first

- `src/main.jsx` — app entry point and router setup
- `src/App.jsx` — top-level application layout
- `src/` — primary source files for pages and components

## What Copilot should help with

When writing or improving code, Copilot can:

- Suggest React component patterns that match existing codebase style
- Help add new pages/routes with React Router
- Fix or suggest improvements for lint issues
- Explain the current structure and suggest refactors (keeping the site small and approachable)

> 📌 This repo is a **client-side, single-page React site**. Do not introduce backend services or server-side frameworks unless explicitly requested.
