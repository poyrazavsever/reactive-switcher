"use client";

import { useState } from "react";
import Link from "next/link";
import { content, Lang } from "@/landing/content";
import { Icons } from "@/components/icons";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-primary selection:text-primary-foreground font-sans">
      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />

        <Features lang={lang} />

        <Showcase lang={lang} />

        {/* CTA Section */}
        <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {lang === "en"
                ? "Ready to Get Started?"
                : "Başlamaya Hazır mısınız?"}
            </h2>
            <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto">
              {lang === "en"
                ? "Add beautiful, customizable themes to your React app in just a few minutes. It's free and open source."
                : "React uygulamanıza birkaç dakika içinde güzel, özelleştirilebilir temalar ekleyin. Ücretsiz ve açık kaynak."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                {lang === "en" ? "Read the Docs" : "Dökümantasyonu Oku"}
                <Icons.Book className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://github.com/poyrazavsever/reactive-switcher"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-surface-100 text-foreground font-semibold rounded-2xl border border-surface-200 hover:bg-surface-200 transition-all"
              >
                <Icons.Github className="w-5 h-5" />
                {lang === "en" ? "View on GitHub" : "GitHub'da Görüntüle"}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">~2KB</div>
                <div className="text-sm text-secondary">
                  {lang === "en" ? "Gzipped" : "Sıkıştırılmış"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-secondary">TypeScript</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">MIT</div>
                <div className="text-sm text-secondary">
                  {lang === "en" ? "Licensed" : "Lisanslı"}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
