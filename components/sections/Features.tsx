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
      color: "text-yellow-400",
      bg: "bg-yellow-400/10 border-yellow-400/20",
      ...t.instant,
    },
    {
      key: "types",
      icon: Icons.Typescript,
      color: "text-blue-400",
      bg: "bg-blue-400/10 border-blue-400/20",
      ...t.types,
    },
    {
      key: "tailwind",
      icon: Icons.Tailwind,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10 border-cyan-400/20",
      ...t.tailwind,
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-surface-50/50 border border-surface-200 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon Box */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-secondary leading-relaxed">{feature.desc}</p>

              {/* Decorative Gradient Blob on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
