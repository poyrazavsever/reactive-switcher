"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { Lang } from "@/landing/content";
import { useTheme } from "@/packages/theme-switcher/src";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const { theme, setTheme, themes } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: lang === "en" ? "Features" : "Özellikler" },
    { href: "#showcase", label: lang === "en" ? "Showcase" : "Demo" },
    { href: "/docs", label: lang === "en" ? "Docs" : "Döküman" },
  ];

  const themeIcons: Record<string, React.ReactNode> = {
    light: <Icons.Sun className="w-4 h-4" />,
    dark: <Icons.Moon className="w-4 h-4" />,
    ocean: <Icons.Waves className="w-4 h-4" />,
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-surface-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                <Image
                  src="/logo/Logo.png"
                  alt="Reactive Switcher"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-foreground">
                  Reactive
                </span>
                <span className="text-lg font-bold text-primary">Switcher</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
                </Link>
              ))}
              <a
                href="https://github.com/poyrazavsever/reactive-switcher"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors group flex items-center gap-1.5"
              >
                GitHub
                <Icons.External className="w-3 h-3 opacity-50" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Switcher - Desktop */}
              <div className="hidden sm:flex items-center p-1 bg-surface-100/80 backdrop-blur-sm rounded-full border border-surface-200/50">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                      theme === t
                        ? "text-primary-foreground"
                        : "text-secondary hover:text-foreground"
                    }`}
                    title={t.charAt(0).toUpperCase() + t.slice(1)}
                  >
                    {theme === t && (
                      <span className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30" />
                    )}
                    <span className="relative z-10">{themeIcons[t]}</span>
                  </button>
                ))}
              </div>

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "tr" : "en")}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-100/80 backdrop-blur-sm border border-surface-200/50 text-sm font-bold text-primary hover:bg-surface-200/80 transition-colors"
              >
                {lang === "en" ? "TR" : "EN"}
              </button>

              {/* GitHub Star - Desktop */}
              <a
                href="https://github.com/poyrazavsever/reactive-switcher"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
              >
                <Icons.Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-surface-100/80 backdrop-blur-sm border border-surface-200/50 text-foreground"
              >
                {isMobileMenuOpen ? (
                  <Icons.Close className="w-5 h-5" />
                ) : (
                  <Icons.Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 border-b border-surface-200/50"
              : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 bg-background/95 backdrop-blur-xl space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-surface-100 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Theme Switcher */}
            <div className="px-4 py-3">
              <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                {lang === "en" ? "Theme" : "Tema"}
              </p>
              <div className="flex items-center gap-2">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${
                      theme === t
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-surface-100 text-secondary hover:text-foreground"
                    }`}
                  >
                    {themeIcons[t]}
                    <span className="text-sm font-medium capitalize">{t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile GitHub Button */}
            <a
              href="https://github.com/poyrazavsever/reactive-switcher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-4 py-3 text-sm font-medium bg-foreground text-background rounded-xl"
            >
              <Icons.Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
