"use client";

import { useState } from "react";
import Image from "next/image";
import { Icons } from "../icons";
import { Lang, content } from "@/landing/content";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang].hero;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(t.install);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Arka Plan Efektleri (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* Başlık ve Slogan */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {t.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Aksiyon Alanı (Buttons & Install) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#docs"
            className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-600 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto"
          >
            {t.cta}
          </a>

          {/* Terminal / Copy Box */}
          <button
            onClick={handleCopy}
            className="group relative flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-surface-100/50 border border-surface-200 hover:border-primary/50 backdrop-blur-md cursor-pointer transition-all duration-300 w-full sm:w-auto min-w-[280px]"
          >
            <div className="flex items-center gap-3">
              <span className="text-secondary/50 font-mono select-none">$</span>
              <span className="font-mono text-sm font-medium text-foreground/90">
                npm install reactive-switcher
              </span>
            </div>

            <div className="relative w-5 h-5 flex items-center justify-center">
              <div
                className={`absolute transition-all duration-300 ${
                  copied
                    ? "scale-0 opacity-0"
                    : "scale-100 opacity-50 group-hover:opacity-100"
                }`}
              >
                <Icons.Copy className="w-4 h-4" />
              </div>
              <div
                className={`absolute transition-all duration-300 ${
                  copied
                    ? "scale-100 opacity-100 text-green-500"
                    : "scale-0 opacity-0"
                }`}
              >
                <Icons.Check className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>

        {/* Tech Stack Badges (Mini Kanıt) */}
        <div className="pt-12 flex items-center justify-center gap-6 text-secondary opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <Icons.Typescript className="w-5 h-5" />
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-surface-300" />
          <div className="flex items-center gap-2">
            <Icons.Tailwind className="w-5 h-5" />
            <span className="text-sm font-medium">Tailwind v4</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-surface-300" />
          <div className="flex items-center gap-2">
            <Icons.Lightning className="w-5 h-5" />
            <span className="text-sm font-medium">0kb Runtime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
