"use client";

import { useTheme, ThemeProvider } from "@/packages/theme-switcher/src";
import { themes } from "@/landing/themes";
import { Lang, content } from "@/landing/content";
import { Icons } from "../icons";

interface ShowcaseProps {
  lang: Lang;
}

// İçerik Bileşeni (Inner Component)
function ShowcaseContent({ lang }: ShowcaseProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = content[lang].demo;
  const themeList = ["light", "dark", "ocean"];

  const themeInfo: Record<
    string,
    { icon: React.ReactNode; color: string; label: string }
  > = {
    light: {
      icon: <Icons.Sun className="w-5 h-5" />,
      color: "from-amber-400 to-orange-500",
      label: lang === "en" ? "Light Mode" : "Açık Mod",
    },
    dark: {
      icon: <Icons.Moon className="w-5 h-5" />,
      color: "from-indigo-400 to-purple-500",
      label: lang === "en" ? "Dark Mode" : "Koyu Mod",
    },
    ocean: {
      icon: <Icons.Waves className="w-5 h-5" />,
      color: "from-teal-400 to-cyan-500",
      label: lang === "en" ? "Ocean Mode" : "Okyanus Modu",
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
          <Icons.Palette className="w-4 h-4" />
          {lang === "en" ? "Interactive Demo" : "İnteraktif Demo"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-secondary">{t.desc}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Controls Panel */}
        <div className="lg:col-span-4 space-y-6">
          {/* Theme Selector Card */}
          <div className="p-6 rounded-2xl bg-surface-50/80 border border-surface-200/50 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-5 flex items-center gap-2">
              <Icons.Settings className="w-4 h-4" />
              {t.current}
            </h3>

            <div className="space-y-3">
              {themeList.map((tName) => {
                const info = themeInfo[tName];
                return (
                  <button
                    key={tName}
                    onClick={() => setTheme(tName)}
                    className={`
                      w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300
                      ${
                        theme === tName
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                          : "border-transparent bg-background hover:bg-surface-100"
                      }
                    `}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">
                        {info.label}
                      </div>
                      <div className="text-xs text-secondary capitalize">
                        {tName} theme
                      </div>
                    </div>
                    {theme === tName && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Icons.Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Card */}
          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icons.Layers className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {lang === "en" ? "Scoped Theming" : "Kapsamlı Tema"}
                </h4>
                <p className="text-xs text-secondary leading-relaxed">
                  {lang === "en"
                    ? "This demo uses isolated theming. Changes only affect the preview panel, not the main page."
                    : "Bu demo izole tema kullanır. Değişiklikler sadece önizleme panelini etkiler, ana sayfayı değil."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Preview */}
        <div className="lg:col-span-8">
          <div
            id="showcase-demo"
            className="relative rounded-2xl overflow-hidden border border-surface-200 shadow-2xl shadow-black/10 bg-background transition-all duration-500"
          >
            {/* Browser Header */}
            <div className="h-12 bg-surface-100 border-b border-surface-200 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 bg-surface-200/50 rounded-lg text-xs font-mono text-secondary flex items-center gap-2">
                  <Icons.FileCode className="w-3 h-3" />
                  Dashboard.tsx
                </div>
              </div>
              <div className="text-xs text-secondary font-medium">
                {resolvedTheme}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8 bg-background text-foreground">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Dashboard
                  </h3>
                  <p className="text-sm text-secondary">
                    Welcome back, Developer
                  </p>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Icons.Lightning className="w-4 h-4" />
                  New Project
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  {
                    label: "Total Users",
                    value: "12,430",
                    change: "+12%",
                    icon: Icons.Star,
                  },
                  {
                    label: "Active Now",
                    value: "2,840",
                    change: "+8%",
                    icon: Icons.Lightning,
                  },
                  {
                    label: "Revenue",
                    value: "$48.2K",
                    change: "+24%",
                    icon: Icons.Heart,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-surface-50 border border-surface-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-green-500">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Content Area */}
              <div className="grid grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="col-span-2 p-5 rounded-xl bg-surface-50 border border-surface-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">
                      Recent Activity
                    </h4>
                    <button className="text-xs text-primary font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background border border-surface-100"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                        <div className="flex-1">
                          <div className="h-3 w-32 bg-surface-200 rounded-full" />
                          <div className="h-2 w-20 bg-surface-200/50 rounded-full mt-2" />
                        </div>
                        <div className="text-xs text-secondary">2m ago</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold text-primary mb-4">
                    Quick Actions
                  </h4>
                  <div className="space-y-2">
                    {["Create Post", "Upload File", "Send Email"].map(
                      (action, i) => (
                        <button
                          key={i}
                          className="w-full flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-surface-100/50 text-sm text-foreground hover:bg-background transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {action}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ana Bileşen
export function Showcase(props: ShowcaseProps) {
  return (
    <section
      id="showcase"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-50/50 via-background to-background" />

      <ThemeProvider
        themes={themes}
        defaultTheme="dark"
        selector="#showcase-demo"
        styleId="showcase-theme-styles"
        enableStorage={false}
      >
        <ShowcaseContent {...props} />
      </ThemeProvider>
    </section>
  );
}
