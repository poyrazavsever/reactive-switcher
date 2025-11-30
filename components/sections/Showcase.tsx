"use client";

import { useTheme, ThemeProvider } from "@/packages/theme-switcher/context";
import { myThemes } from "@/packages/theme-switcher/my-theme";
import { Lang, content } from "@/landing/content";
import { Icons } from "../icons";

interface ShowcaseProps {
  lang: Lang;
}

// İçerik Bileşeni (Inner Component)
// useTheme() burada çağrıldığında en yakın (bizim izole ettiğimiz) Provider'ı kullanacak.
function ShowcaseContent({ lang }: ShowcaseProps) {
  const { theme, setTheme } = useTheme();
  const t = content[lang].demo;
  const themes = ["light", "dark", "ocean"];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          {t.title}
        </h2>
        <p className="text-xl text-secondary">{t.desc}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Controls (Sol Taraf) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-surface-100 border border-surface-200/60 backdrop-blur-md">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Icons.Palette className="w-4 h-4" />
              {t.current}
            </h3>

            <div className="grid gap-3">
              {themes.map((tName) => (
                <button
                  key={tName}
                  onClick={() => setTheme(tName)}
                  className={`
                      w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group
                      ${
                        theme === tName
                          ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                          : "bg-background border-surface-200 hover:border-primary/50 text-foreground"
                      }
                    `}
                >
                  <span className="font-medium capitalize flex items-center gap-3">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        theme === tName
                          ? "bg-white animate-pulse"
                          : "bg-surface-300"
                      }`}
                    />
                    {tName}
                  </span>
                  {theme === tName && (
                    <Icons.Check className="w-5 h-5 opacity-80" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-secondary opacity-70 px-2">
            * Bu bölüm izole edilmiştir (Scoped Theme). Butonlara tıkladığınızda{" "}
            <strong className="text-foreground">
              sadece sağdaki dashboard
            </strong>{" "}
            etkilenir, sayfanın geri kalanı değişmez.
          </p>
        </div>

        {/* Interactive Mockup (Sağ Taraf) */}
        <div className="lg:col-span-8">
          {/* ÖNEMLİ: Bu ID (showcase-demo), bizim ThemeProvider'da 
                belirttiğimiz selector ile aynı olmalı.
                Böylece CSS değişkenleri sadece bu div ve çocuklarına uygulanır.
            */}
          <div
            id="showcase-demo"
            className="relative rounded-2xl overflow-hidden border border-surface-200 shadow-2xl bg-background transition-colors duration-300"
          >
            {/* Mockup Header (Window Controls) */}
            <div className="h-12 bg-surface-100 border-b border-surface-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <div className="ml-auto px-3 py-1 rounded-md bg-surface-200/50 text-xs font-mono text-secondary">
                Dashboard.tsx
              </div>
            </div>

            {/* Mockup Body */}
            <div className="p-8 space-y-8 bg-background text-foreground">
              {/* Stats Row */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-surface-50 border border-surface-100 space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icons.Lightning className="w-4 h-4" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      2,4{i}0
                    </div>
                    <div className="text-xs text-secondary">
                      Total Active Users
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2 p-6 rounded-xl bg-surface-50 border border-surface-100 space-y-4">
                  <div className="h-4 w-1/3 bg-surface-200 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-surface-200/50 rounded-full" />
                    <div className="h-2 w-5/6 bg-surface-200/50 rounded-full" />
                    <div className="h-2 w-4/6 bg-surface-200/50 rounded-full" />
                  </div>
                  <div className="pt-4 flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                      Action
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-surface-200 text-foreground text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Sidebar Mockup */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 flex flex-col gap-3">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Activities
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg bg-background/50 border border-surface-100/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div className="h-2 w-16 bg-surface-200 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ana Bileşen: Sadece Provider'ı sarmalar
export function Showcase(props: ShowcaseProps) {
  return (
    <section
      id="showcase"
      className="py-24 px-6 bg-surface-50/30 border-y border-surface-200/50"
    >
      {/* YENİ ÖZELLİK: Scoped Theme Provider
          - selector: CSS değişkenlerini #showcase-demo ID'sine uygular.
          - styleId: Çakışmayı önlemek için benzersiz bir style etiketi ID'si.
      */}
      <ThemeProvider
        themes={myThemes}
        defaultTheme="ocean" // Demo için farklı bir varsayılan tema seçebiliriz
        selector="#showcase-demo"
        styleId="showcase-theme-styles"
      >
        <ShowcaseContent {...props} />
      </ThemeProvider>
    </section>
  );
}
