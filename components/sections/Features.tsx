"use client";

import { Lang, content } from "@/landing/content";
import { Icons } from "../icons";

interface FeaturesProps {
  lang: Lang;
}

export function Features({ lang }: FeaturesProps) {
  const t = content[lang].features;

  const features = [
    {
      key: "instant",
      icon: Icons.Lightning,
      gradient: "from-yellow-500 to-orange-500",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
      ...t.instant,
    },
    {
      key: "types",
      icon: Icons.Typescript,
      gradient: "from-blue-500 to-indigo-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      ...t.types,
    },
    {
      key: "tailwind",
      icon: Icons.Tailwind,
      gradient: "from-cyan-500 to-teal-500",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
      ...t.tailwind,
    },
    {
      key: "storage",
      icon: Icons.Database,
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      title: lang === "en" ? "Persistent" : "Kalıcı",
      desc:
        lang === "en"
          ? "Theme preferences are saved to localStorage automatically."
          : "Tema tercihleri otomatik olarak localStorage'a kaydedilir.",
    },
    {
      key: "system",
      icon: Icons.Monitor,
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
      title: lang === "en" ? "System Aware" : "Sistem Uyumlu",
      desc:
        lang === "en"
          ? "Respects user's system color scheme preference."
          : "Kullanıcının sistem renk şeması tercihine uyum sağlar.",
    },
    {
      key: "scoped",
      icon: Icons.Layers,
      gradient: "from-rose-500 to-red-500",
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-500",
      title: lang === "en" ? "Scoped Themes" : "Kapsamlı Temalar",
      desc:
        lang === "en"
          ? "Apply different themes to different parts of your app."
          : "Uygulamanızın farklı bölümlerine farklı temalar uygulayın.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {lang === "en" ? "Everything You Need" : "İhtiyacınız Olan Her Şey"}
          </h2>
          <p className="text-lg text-secondary">
            {lang === "en"
              ? "A complete theming solution with all the features you'd expect from a modern library."
              : "Modern bir kütüphaneden beklediğiniz tüm özelliklere sahip eksiksiz bir tema çözümü."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.key}
              className="group relative p-6 lg:p-8 rounded-2xl bg-surface-50/50 border border-surface-200/50 backdrop-blur-sm transition-all duration-500 hover:border-surface-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-secondary text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Arrow on Hover */}
              <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <Icons.LinkArrow className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
