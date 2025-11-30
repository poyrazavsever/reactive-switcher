"use client";

import { useState } from "react";
import { ThemeProvider } from "@/packages/theme-switcher/context"; // Import düzeltmesi
import { myThemes } from "@/packages/theme-switcher/my-theme"; // Import düzeltmesi
import { content, Lang } from "@/landing/content";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";

// Diğer yardımcı bileşenleri (CodeBlock) burada tutabilir veya ayrı dosyaya alabilirsin.
function CodeBlock({
  title,
  children,
  lang,
}: {
  title: string;
  children: string;
  lang: string;
}) {
  return (
    <div className="group">
      <h3 className="text-lg font-medium mb-3 text-primary flex items-center gap-2">
        <span className="w-1.5 h-6 bg-primary rounded-full" />
        {title}
      </h3>
      <div className="relative rounded-xl overflow-hidden bg-[#0f172a] border border-surface-200/20 shadow-2xl group-hover:border-primary/30 transition-colors">
        <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-white/5">
          <span className="text-xs text-slate-400 font-mono font-bold uppercase">
            {lang}
          </span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm font-mono leading-relaxed">
            <code className="text-slate-300">{children}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary selection:text-white font-sans">
      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />

        <Features lang={lang} />

        <Showcase lang={lang} />

        {/* Documentation / Usage Section */}
        <section id="docs" className="py-32 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">{t.usage.title}</h2>
              <p className="text-secondary text-lg">
                Entegrasyon sadece 3 basit adımda tamamlanır.
              </p>
            </div>

            <div className="space-y-12">
              <CodeBlock title={t.usage.step1} lang="typescript">
                {`// theme.ts
import { Theme } from 'reactive-switcher';

export const myThemes = {
  light: {
    type: 'light',
    colors: {
      primary: { 
        DEFAULT: '#3b82f6', 
        foreground: '#ffffff' 
      },
      background: '#ffffff',
      // ... your design tokens
    }
  },
  dark: { ... }
};`}
              </CodeBlock>

              <CodeBlock title={t.usage.step2} lang="tsx">
                {`// app/layout.tsx
import { ThemeProvider } from 'reactive-switcher';
import { myThemes } from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider themes={myThemes} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
              </CodeBlock>

              <CodeBlock title={t.usage.step3} lang="tsx">
                {`// app/page.tsx
'use client';
import { useTheme } from 'reactive-switcher';

export default function Page() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme('dark')}>
      Current: {theme}
    </button>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
