"use client";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Documentation", href: "/docs" },
      { label: "Showcase", href: "#showcase" },
      { label: "Features", href: "#features" },
      {
        label: "Changelog",
        href: "https://github.com/poyrazavsever/reactive-switcher/releases",
        external: true,
      },
    ],
    resources: [
      {
        label: "GitHub",
        href: "https://github.com/poyrazavsever/reactive-switcher",
        external: true,
      },
      {
        label: "NPM Package",
        href: "https://www.npmjs.com/package/reactive-switcher",
        external: true,
      },
      { label: "Blog", href: "https://poyrazavsever.com/blog", external: true },
    ],
    community: [
      {
        label: "Twitter",
        href: "https://twitter.com/poyrazavsever",
        external: true,
      },
      {
        label: "Buy me a coffee",
        href: "https://www.buymeacoffee.com/poyrazavsever",
        external: true,
      },
    ],
  };

  return (
    <footer className="relative border-t border-surface-200/50 bg-gradient-to-b from-surface-50/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/10 group-hover:shadow-primary/20 transition-shadow">
                <Image
                  src="/logo/Logo.png"
                  alt="Reactive Switcher"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">
                  Reactive
                </span>
                <span className="text-lg font-bold text-primary">Switcher</span>
              </div>
            </Link>
            <p className="text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Type-safe, modular, and instant theme switching for React &
              Tailwind CSS v4. Zero runtime overhead.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/poyrazavsever/reactive-switcher"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-surface-100 border border-surface-200/50 flex items-center justify-center text-secondary hover:text-foreground hover:bg-surface-200 transition-all"
              >
                <Icons.Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/poyrazavsever"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-surface-100 border border-surface-200/50 flex items-center justify-center text-secondary hover:text-foreground hover:bg-surface-200 transition-all"
              >
                <Icons.Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.buymeacoffee.com/poyrazavsever"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-surface-100 border border-surface-200/50 flex items-center justify-center text-secondary hover:text-amber-500 hover:bg-amber-50 transition-all"
              >
                <Icons.Coffee className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <Icons.External className="w-3 h-3 opacity-50" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <Icons.External className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <Icons.External className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
            {/* MIT Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              MIT License
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {currentYear} Poyraz Avsever. Built with{" "}
            <Icons.Heart className="w-4 h-4 inline text-red-500" /> using
            Next.js & Tailwind CSS
          </p>
          <div className="flex items-center gap-4 text-sm text-secondary">
            <a
              href="https://github.com/poyrazavsever/reactive-switcher"
              target="_blank"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Icons.Star className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
