"use client";

import { useTheme } from "@/packages/theme-switcher/context";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <main className="max-w-4xl mx-auto p-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Theme Switcher{" "}
            <span className="text-[var(--color-primary-DEFAULT)]">v1.0</span>
          </h1>
          <p className="text-lg opacity-80">
            Aktif Tema:{" "}
            <span className="font-mono font-bold capitalize">{theme}</span>
          </p>
        </div>

        {/* Kontroller */}
        <div className="flex justify-center gap-4 p-6 rounded-2xl bg-[var(--color-surface-100)] shadow-sm">
          {["light", "dark", "ocean"].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`
                px-6 py-2.5 rounded-lg font-medium transition-all
                ${
                  theme === t
                    ? "bg-[var(--color-primary-DEFAULT)] text-[var(--color-primary-foreground)] shadow-md scale-105"
                    : "bg-[var(--color-surface-200)] hover:bg-[var(--color-surface-50)]"
                }
              `}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Renk Paleti Testi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Colors */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xl">Primary Palette</h3>
            <div className="grid grid-cols-5 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="space-y-1 text-center">
                    <div
                      className="h-12 w-full rounded-md shadow-sm border border-[var(--color-surface-200)]"
                      style={{
                        backgroundColor: `var(--color-primary-${shade})`,
                      }}
                    />
                    <div className="text-xs opacity-60">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Diğer Renkler */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xl">Semantic Colors</h3>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-xl border border-[var(--color-surface-200)] flex items-center justify-between"
                style={{
                  backgroundColor: "var(--color-secondary-DEFAULT)",
                  color: "var(--color-secondary-foreground)",
                }}
              >
                <span>Secondary</span>
                <span className="text-xs opacity-75">Aa</span>
              </div>
              <div
                className="p-4 rounded-xl border border-[var(--color-surface-200)] flex items-center justify-between"
                style={{
                  backgroundColor: "var(--color-accent-DEFAULT)",
                  color: "var(--color-accent-foreground)",
                }}
              >
                <span>Accent</span>
                <span className="text-xs opacity-75">Aa</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
