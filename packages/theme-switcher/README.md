# Reactive Switcher 🎨

> Type-safe, modular, and instant theme switching for React & Tailwind CSS v4

[![npm version](https://badge.fury.io/js/reactive-switcher.svg)](https://www.npmjs.com/package/reactive-switcher)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

-  **Zero Runtime Overhead** - Uses CSS variables for instant theme switching
-  **TypeScript First** - Full type safety with autocomplete support
-  **Tailwind CSS v4 Ready** - Seamless integration with the new engine
-  **Persistent Themes** - LocalStorage support out of the box
-  **System Theme Detection** - Respects `prefers-color-scheme`
-  **No Flash** - SSR compatible with hydration flash prevention
-  **Scoped Theming** - Apply different themes to different parts of your app
-  **Ready-to-use Components** - `ThemeSwitcher` and `ThemeToggle` included

## 📦 Installation

```bash
npm install reactive-switcher
# or
pnpm add reactive-switcher
# or
yarn add reactive-switcher
```

## 🚀 Quick Start

### 1. Define Your Themes

Create a file to define your theme configurations:

```typescript
// themes.ts
import { ThemesConfig } from "reactive-switcher";

export const themes: ThemesConfig = {
  light: {
    name: "light",
    type: "light",
    colors: {
      background: "#ffffff",
      foreground: "#0f172a",
      primary: {
        DEFAULT: "#3b82f6",
        foreground: "#ffffff",
        50: "#eff6ff",
        100: "#dbeafe",
        500: "#3b82f6",
        600: "#2563eb",
      },
      secondary: {
        DEFAULT: "#64748b",
        foreground: "#ffffff",
      },
      surface: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
      },
    },
  },
  dark: {
    name: "dark",
    type: "dark",
    colors: {
      background: "#020617",
      foreground: "#f8fafc",
      primary: {
        DEFAULT: "#60a5fa",
        foreground: "#0f172a",
        50: "#172554",
        100: "#1e3a8a",
        500: "#3b82f6",
        600: "#60a5fa",
      },
      secondary: {
        DEFAULT: "#94a3b8",
        foreground: "#0f172a",
      },
      surface: {
        50: "#0f172a",
        100: "#1e293b",
        200: "#334155",
      },
    },
  },
};
```

### 2. Wrap Your App with ThemeProvider

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import { ThemeProvider } from "reactive-switcher";
import { themes } from "./themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider themes={themes} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Use the Theme

```tsx
// components/Header.tsx
"use client";
import { useTheme, ThemeToggle } from "reactive-switcher";

export function Header() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <header className="bg-background text-foreground">
      <h1>Current Theme: {theme}</h1>

      {/* Option 1: Simple toggle button */}
      <ThemeToggle />

      {/* Option 2: Manual control */}
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("system")}>System</button>

      {/* Option 3: Cycle through themes */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```

### 4. Configure Tailwind CSS v4

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);

  --color-primary: var(--color-primary-DEFAULT);
  --color-primary-foreground: var(--color-primary-foreground);
  --color-primary-50: var(--color-primary-50);
  --color-primary-100: var(--color-primary-100);
  --color-primary-500: var(--color-primary-500);
  --color-primary-600: var(--color-primary-600);

  --color-secondary: var(--color-secondary-DEFAULT);
  --color-secondary-foreground: var(--color-secondary-foreground);

  --color-surface-50: var(--color-surface-50);
  --color-surface-100: var(--color-surface-100);
  --color-surface-200: var(--color-surface-200);
}

@layer base {
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    transition: background-color 0.3s, color 0.3s;
  }
}
```

Now you can use Tailwind classes like `bg-primary`, `text-foreground`, `bg-surface-100` etc.

---

## 📖 API Reference

### ThemeProvider

The main provider component that wraps your application.

```tsx
<ThemeProvider
  themes={themes} // Required: Your theme configurations
  defaultTheme="light" // Default theme name (default: "light")
  enableStorage={true} // Enable localStorage persistence (default: true)
  storageKey="theme" // localStorage key (default: "reactive-switcher-theme")
  enableSystem={true} // Enable system theme detection (default: true)
  selector=":root" // CSS selector for scoped theming (default: ":root")
  styleId="theme-styles" // Style tag ID (default: "reactive-switcher-styles")
  attribute="class" // HTML attribute: "class" | "data-theme" (default: "class")
>
  {children}
</ThemeProvider>
```

### useTheme Hook

Access theme state and controls anywhere in your app.

```tsx
const {
  theme, // Current theme name (e.g., "light", "dark", "system")
  resolvedTheme, // Actual theme when "system" is selected
  setTheme, // Function to set theme by name
  toggleTheme, // Function to cycle to next theme
  activeThemeObject, // Full theme object with colors
  themes, // Array of available theme names
  systemTheme, // System preference ("light" | "dark")
} = useTheme();
```

### ThemeSwitcher Component

A ready-to-use theme switcher component with multiple variants.

```tsx
// Buttons variant (default)
<ThemeSwitcher />

// Dropdown variant
<ThemeSwitcher variant="dropdown" />

// Toggle variant (cycles through themes)
<ThemeSwitcher variant="toggle" />

// With custom labels
<ThemeSwitcher
  labels={{ light: "☀️ Light", dark: "🌙 Dark", system: "💻 System" }}
/>

// Hide labels, show only icons
<ThemeSwitcher showLabels={false} />

// Custom render function
<ThemeSwitcher>
  {({ theme, setTheme, themes }) => (
    <div>
      {themes.map(t => (
        <button key={t} onClick={() => setTheme(t)}>
          {t}
        </button>
      ))}
    </div>
  )}
</ThemeSwitcher>
```

### ThemeToggle Component

A simple light/dark toggle button.

```tsx
// Default
<ThemeToggle />

// Different sizes
<ThemeToggle size="sm" />
<ThemeToggle size="md" />
<ThemeToggle size="lg" />

// Custom icons
<ThemeToggle
  lightIcon={<SunIcon />}
  darkIcon={<MoonIcon />}
/>
```

---

## 🎯 Advanced Usage

### Scoped Theming

Apply different themes to different parts of your app:

```tsx
// Main app uses light theme
<ThemeProvider themes={themes} defaultTheme="light">
  <main>
    {/* This section has its own theme */}
    <ThemeProvider
      themes={themes}
      defaultTheme="dark"
      selector="#preview-section"
      styleId="preview-theme"
      enableStorage={false}
    >
      <div id="preview-section">{/* This area will have dark theme */}</div>
    </ThemeProvider>
  </main>
</ThemeProvider>
```

### Custom Theme Type

```typescript
import { Theme, ThemesConfig } from "reactive-switcher";

// Define your custom theme structure
const myTheme: Theme = {
  name: "ocean",
  type: "dark",
  colors: {
    background: "#042f2e",
    foreground: "#ccfbf1",
    primary: {
      DEFAULT: "#2dd4bf",
      foreground: "#042f2e",
    },
    // Add any custom color tokens
    accent: {
      DEFAULT: "#facc15",
      subtle: "#fef3c7",
    },
  },
};
```

### System Theme Only

```tsx
<ThemeProvider themes={themes} defaultTheme="system" enableSystem={true}>
  {children}
</ThemeProvider>
```

---

## 🔧 Utility Functions

```typescript
import {
  flattenTheme,
  createCssString,
  getSystemTheme,
  getStoredTheme,
  setStoredTheme,
} from "reactive-switcher";

// Flatten nested colors to CSS variables
const vars = flattenTheme(theme.colors);
// { '--color-primary-DEFAULT': '#3b82f6', '--color-primary-500': '#3b82f6' }

// Create CSS string
const css = createCssString(theme);
// ":root { --color-primary-DEFAULT: #3b82f6; ... }"

// Get system preference
const systemTheme = getSystemTheme(); // 'light' | 'dark'

// Storage utilities
const stored = getStoredTheme("theme-key");
setStoredTheme("theme-key", "dark");
```

---

## 📋 TypeScript Support

Full type definitions are included. Enable autocomplete for your theme tokens:

```typescript
import { Theme, ThemesConfig } from 'reactive-switcher';

// Your themes will have full type checking
const themes: ThemesConfig = {
  light: { ... },
  dark: { ... },
};
```

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

## 📄 License

MIT © [Poyraz Avsever](https://github.com/poyrazavsever)

---

<p align="center">
  Made with ❤️ for the React community
</p>
