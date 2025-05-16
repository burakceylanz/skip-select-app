# SkipSelect App

A responsive React, Typescript application for selecting and filtering skip (waste container) sizes. Built with Vite, React, TypeScript, Redux Toolkit, React Query, Tailwind CSS, React Icons and React Router.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Core Concepts](#core-concepts)
7. [Component Breakdown](#component-breakdown)
8. [Styling & Theming](#styling--theming)
9. [State Management](#state-management)
10. [API Integration](#api-integration)
11. [Routing](#routing)
12. [License](#license)

---

## Project Overview

**SkipSelect** allows users to browse available skip sizes, apply filters (hire period, allowed usage), and select a skip. The selection persists in a sticky footer before navigating or confirming.

Key features:

* Data fetching with React Query
* Global state for selection via Redux Toolkit
* Dynamic filtering
* Responsive grid layout
* Accessible and themeable with Tailwind CSS variables

---

## Tech Stack

* **Framework:** React (v19)
* **Build Tool:** Vite
* **Language:** TypeScript
* **State Management:** Redux Toolkit
* **Data Fetching:** @tanstack/react-query
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS with CSS custom properties
* **Icons:** react-icons

---

## Folder Structure

```
src/
├── App.tsx               # Application entry for router setup
├── main.tsx              # React-DOM bootstrap, providers (Redux, Query)
├── common/
│   ├── components/       # Shared UI components (Button, Loading, BackgroundGrid)
│   ├── services/         # apiClient setup
│   └── styles/           # Tailwind base and theme config
├── features/
│   └── skip-select/
│       ├── components/   # Filter, List, Footer
│       ├── services/     # getSkips API call
│       ├── store/        # Redux slice for selectedSkip
│       └── types.ts      # Type definitions (SkipType, FilterValues etc)
├── pages/
│   ├── skip-select/      # SkipSelectPage wrapper
│   └── not-found/        # NotFoundPage wrapper
└── assets/
    └── images/           # SkipCardImage
```

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/burakceylanz/skip-select-app.git
   cd skip-select-app
   ```
2. **Install dependencies**

   ```bash
   npm install
   # or yarn
   ```
3. **Create `.env` file**

   ```env
   VITE_API_BASE_URL=https://api.example.com
   ```
4. **Run in development**

   ```bash
   npm run dev
   ```
5. **Build for production**

   ```bash
   npm run build
   ```

---

## Available Scripts

* `npm run dev` - Starts development server
* `npm run build` - Bundles app for production
* `npm run preview` - Locally preview production build

---

## Core Concepts

* **Provider Setup**: In `main.tsx`, wraps `<App />` with Redux `Provider` and React Query `QueryClientProvider`.
* **Routing**: `App.tsx` uses `createBrowserRouter` for two routes: `/` (SkipSelectPage) and `*` (NotFoundPage).
* **Global Styles**: Tailwind base imported in `main.tsx` and theme variables in `index.css` (`@theme` custom properties).

---

## Component Breakdown

* **Filter**: Controlled selects for `hirePeriod` and `filterType`, raises `onFilterChange` via `useEffect`.
* **List**: Grid of skip cards, highlights selected item, dispatches `setSelectedSkip` on click.
* **Footer**: Sticky footer showing selected skip details; uses conditional opacity and `pointer-events` patterns.
* **NotFoundComponent**: Simple 404 page with navigation links.

---

## Styling & Theming

* Uses CSS custom properties (`--color-primary`, `--text-xl`, etc.) in `index.css`.
* Tailwind’s `@layer base` overrides for `<h1>`, `<p>`, `<span>` to apply custom font sizes & weights.
* Utility classes for responsive design (e.g., `sm:`, `lg:` prefixes).

---

## State Management

* **Redux Slice**: `skipSelectSlice` manages only `selectedSkip`
* Actions and selectors via `useAppSelector` hooks.

---

## API Integration

* **apiClient**: Axios instance with `baseURL`, `timeout`, and JSON headers in `common/services/apiClient.ts`.
* **getSkips**: Fetcher using `apiClient`, returns data skips.

---

## Routing

* `createBrowserRouter` defines paths. Fallback (`*`) to `NotFoundPage` handles 404 scenarios. Redirects can be added as needed.

## License

MIT © Burak Ceylan
