"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "../icons";
import { Lang, content } from "@/landing/content";
import { useTheme } from "@/packages/theme-switcher/src";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang].hero;
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install reactive-switcher");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 transition-all duration-500 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block text-foreground">
            {lang === "en" ? "Theme Switching" : "Tema Değiştirme"}
          </span>
          <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {lang === "en" ? "Made Simple" : "Artık Çok Kolay"}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-500 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/docs"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10">{t.cta}</span>
            <Icons.LinkArrow className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Install Command */}
          <button
            onClick={handleCopy}
            className="group flex items-center gap-4 px-6 py-4 bg-surface-100/80 backdrop-blur-sm border border-surface-200 rounded-2xl hover:border-primary/50 hover:bg-surface-100 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="flex items-center gap-3">
              <span className="text-primary font-mono text-sm">$</span>
              <code className="font-mono text-sm text-foreground">
                npm install reactive-switcher
              </code>
            </div>
            <div className="relative w-5 h-5">
              <Icons.Copy
                className={`w-5 h-5 absolute inset-0 text-secondary transition-all duration-300 ${
                  copied
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100 group-hover:text-foreground"
                }`}
              />
              <Icons.Check
                className={`w-5 h-5 absolute inset-0 text-green-500 transition-all duration-300 ${
                  copied ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Stats/Features Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 sm:gap-12 transition-all duration-500 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Icons.Typescript className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">
                TypeScript
              </div>
              <div className="text-xs text-secondary">
                {lang === "en" ? "Full Support" : "Tam Destek"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Icons.Tailwind className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">
                Tailwind v4
              </div>
              <div className="text-xs text-secondary">
                {lang === "en" ? "Ready" : "Uyumlu"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Icons.Lightning className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">~2KB</div>
              <div className="text-xs text-secondary">
                {lang === "en" ? "Gzipped" : "Sıkıştırılmış"}
              </div>
            </div>
          </div>
        </div>

        {/* Theme Preview Visual */}
        <div
          className={`mt-16 relative transition-all duration-500 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative mx-auto max-w-3xl">
            {/* Browser Mockup */}
            <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-2xl shadow-black/10 bg-surface-50">
              {/* Browser Header */}
              <div className="h-10 bg-surface-100 border-b border-surface-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-surface-200/50 rounded-md text-xs text-secondary font-mono">
                    localhost:3000
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-6 bg-background">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20" />
                    <div className="h-3 w-24 bg-surface-200 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-surface-200 flex items-center justify-center">
                      <Icons.Sun className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Icons.Moon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-surface-200 rounded-full" />
                  <div className="h-3 w-4/5 bg-surface-200 rounded-full" />
                  <div className="h-3 w-3/5 bg-surface-200 rounded-full" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="px-4 py-2 bg-primary rounded-lg text-xs text-primary-foreground font-medium">
                    Button
                  </div>
                  <div className="px-4 py-2 bg-surface-200 rounded-lg text-xs text-foreground font-medium">
                    Secondary
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg animate-float">
              {lang === "en" ? "No Flash!" : "Flash Yok!"}
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg animate-float animation-delay-2000">
              SSR Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
