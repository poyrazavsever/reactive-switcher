"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { useTheme } from "@/packages/theme-switcher/src";

export default function DocsPage() {
  const { theme, setTheme, themes } = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const themeIcons: Record<string, React.ReactNode> = {
    light: <Icons.Sun className="w-4 h-4" />,
    dark: <Icons.Moon className="w-4 h-4" />,
    ocean: <Icons.Waves className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-surface-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
            >
              <Icons.LinkArrow className="w-4 h-4 rotate-[225deg]" />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center gap-3">
              {/* Theme Switcher */}
              <div className="flex items-center p-1 bg-surface-100/80 rounded-full border border-surface-200/50">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      theme === t
                        ? "text-primary-foreground"
                        : "text-secondary hover:text-foreground"
                    }`}
                  >
                    {theme === t && (
                      <span className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30" />
                    )}
                    <span className="relative z-10">{themeIcons[t]}</span>
                  </button>
                ))}
              </div>

              <a
                href="https://github.com/poyrazavsever/reactive-switcher"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
              >
                <Icons.Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Icons.Book className="w-4 h-4" />
              Documentation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Getting Started
            </h1>
            <p className="text-lg text-secondary">
              Learn how to integrate reactive-switcher into your React project
              in minutes.
            </p>
          </div>

          {/* Installation */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                1
              </span>
              Installation
            </h2>
            <CodeBlock
              id="install"
              language="bash"
              code="npm install reactive-switcher"
              copied={copied}
              onCopy={copyToClipboard}
            />
          </section>

          {/* Define Themes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                2
              </span>
              Define Your Themes
            </h2>
            <p className="text-secondary mb-6">
              Create a themes configuration file with your color tokens. Each
              theme can have nested color palettes.
            </p>
            <CodeBlock
              id="themes"
              language="typescript"
              filename="themes.ts"
              code={`import { ThemesConfig } from 'reactive-switcher';

export const themes: ThemesConfig = {
  light: {
    name: 'light',
    type: 'light',
    colors: {
      background: '#ffffff',
      foreground: '#0f172a',
      primary: {
        DEFAULT: '#3b82f6',
        foreground: '#ffffff',
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
      },
      secondary: {
        DEFAULT: '#64748b',
        foreground: '#ffffff',
      },
      surface: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
      },
    },
  },
  dark: {
    name: 'dark',
    type: 'dark',
    colors: {
      background: '#020617',
      foreground: '#f8fafc',
      primary: {
        DEFAULT: '#60a5fa',
        foreground: '#0f172a',
        // ... other shades
      },
      // ... other colors
    },
  },
};`}
              copied={copied}
              onCopy={copyToClipboard}
            />
          </section>

          {/* Wrap App */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                3
              </span>
              Wrap Your App
            </h2>
            <p className="text-secondary mb-6">
              Add the ThemeProvider to your root layout. For Next.js, this goes
              in your layout.tsx file.
            </p>
            <CodeBlock
              id="provider"
              language="tsx"
              filename="app/layout.tsx"
              code={`import { ThemeProvider } from 'reactive-switcher';
import { themes } from './themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          themes={themes} 
          defaultTheme="light"
          enableStorage={true}
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
              copied={copied}
              onCopy={copyToClipboard}
            />
          </section>

          {/* Use Hook */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                4
              </span>
              Use the Hook
            </h2>
            <p className="text-secondary mb-6">
              Access theme state and controls anywhere in your app using the
              useTheme hook.
            </p>
            <CodeBlock
              id="hook"
              language="tsx"
              filename="components/ThemeButton.tsx"
              code={`'use client';
import { useTheme } from 'reactive-switcher';

export function ThemeButton() {
  const { theme, setTheme, toggleTheme, themes } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      
      {/* Switch to specific theme */}
      <button onClick={() => setTheme('dark')}>
        Dark Mode
      </button>
      
      {/* Cycle through themes */}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      
      {/* List all themes */}
      {themes.map(t => (
        <button key={t} onClick={() => setTheme(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}`}
              copied={copied}
              onCopy={copyToClipboard}
            />
          </section>

          {/* Tailwind CSS */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                5
              </span>
              Tailwind CSS v4 Integration
            </h2>
            <p className="text-secondary mb-6">
              Map CSS variables to Tailwind's theme in your globals.css file.
            </p>
            <CodeBlock
              id="tailwind"
              language="css"
              filename="globals.css"
              code={`@import "tailwindcss";

@theme {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  
  --color-primary: var(--color-primary-DEFAULT);
  --color-primary-foreground: var(--color-primary-foreground);
  --color-primary-50: var(--color-primary-50);
  --color-primary-500: var(--color-primary-500);
  --color-primary-600: var(--color-primary-600);
  
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
}`}
              copied={copied}
              onCopy={copyToClipboard}
            />
          </section>

          {/* API Reference */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              API Reference
            </h2>

            {/* ThemeProvider Props */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ThemeProvider Props
              </h3>
              <div className="rounded-xl border border-surface-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-surface-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Prop
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Type
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Default
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-200">
                    <tr>
                      <td className="p-4 font-mono text-primary">themes</td>
                      <td className="p-4 font-mono text-secondary">
                        ThemesConfig
                      </td>
                      <td className="p-4 text-secondary">required</td>
                      <td className="p-4 text-secondary">
                        Theme configurations object
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        defaultTheme
                      </td>
                      <td className="p-4 font-mono text-secondary">string</td>
                      <td className="p-4 text-secondary">"light"</td>
                      <td className="p-4 text-secondary">Initial theme name</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        enableStorage
                      </td>
                      <td className="p-4 font-mono text-secondary">boolean</td>
                      <td className="p-4 text-secondary">true</td>
                      <td className="p-4 text-secondary">
                        Persist theme to localStorage
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        enableSystem
                      </td>
                      <td className="p-4 font-mono text-secondary">boolean</td>
                      <td className="p-4 text-secondary">true</td>
                      <td className="p-4 text-secondary">
                        Detect system color scheme
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">selector</td>
                      <td className="p-4 font-mono text-secondary">string</td>
                      <td className="p-4 text-secondary">":root"</td>
                      <td className="p-4 text-secondary">
                        CSS selector for scoped themes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* useTheme Return */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                useTheme() Returns
              </h3>
              <div className="rounded-xl border border-surface-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-surface-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Property
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Type
                      </th>
                      <th className="text-left p-4 font-semibold text-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-200">
                    <tr>
                      <td className="p-4 font-mono text-primary">theme</td>
                      <td className="p-4 font-mono text-secondary">string</td>
                      <td className="p-4 text-secondary">Current theme name</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        resolvedTheme
                      </td>
                      <td className="p-4 font-mono text-secondary">string</td>
                      <td className="p-4 text-secondary">
                        Actual theme (resolves "system")
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">setTheme</td>
                      <td className="p-4 font-mono text-secondary">
                        (name: string) =&gt; void
                      </td>
                      <td className="p-4 text-secondary">Set theme by name</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        toggleTheme
                      </td>
                      <td className="p-4 font-mono text-secondary">
                        () =&gt; void
                      </td>
                      <td className="p-4 text-secondary">
                        Cycle to next theme
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">themes</td>
                      <td className="p-4 font-mono text-secondary">string[]</td>
                      <td className="p-4 text-secondary">
                        Available theme names
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary">
                        systemTheme
                      </td>
                      <td className="p-4 font-mono text-secondary">
                        "light" | "dark"
                      </td>
                      <td className="p-4 text-secondary">System preference</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-surface-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-secondary text-sm">
                Made with{" "}
                <Icons.Heart className="w-4 h-4 inline text-red-500" /> by{" "}
                <a
                  href="https://poyrazavsever.com"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Poyraz Avsever
                </a>
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/poyrazavsever/reactive-switcher"
                  target="_blank"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  <Icons.Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.npmjs.com/package/reactive-switcher"
                  target="_blank"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  <Icons.Package className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Code Block Component
function CodeBlock({
  id,
  language,
  filename,
  code,
  copied,
  onCopy,
}: {
  id: string;
  language: string;
  filename?: string;
  code: string;
  copied: string | null;
  onCopy: (code: string, id: string) => void;
}) {
  return (
    <div className="group rounded-xl overflow-hidden border border-surface-200 bg-[#0d1117]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          {filename && (
            <span className="text-xs text-slate-400 font-mono">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 uppercase font-bold">
            {language}
          </span>
          <button
            onClick={() => onCopy(code, id)}
            className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
          >
            {copied === id ? (
              <Icons.Check className="w-4 h-4 text-green-500" />
            ) : (
              <Icons.Copy className="w-4 h-4 text-slate-400 hover:text-white" />
            )}
          </button>
        </div>
      </div>
      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code className="text-slate-300">{code}</code>
        </pre>
      </div>
    </div>
  );
}
