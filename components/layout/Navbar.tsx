"use client";

import Image from "next/image";
import { Icons } from "../icons";
import { Lang } from "@/landing/content";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const NavLink = ({ href, children, external = false, icon: Icon }: any) => (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      className="group flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-foreground transition-colors"
    >
      {children}
      {external && (
        <Icons.External className="opacity-50 group-hover:opacity-100 transition-opacity w-3 h-3" />
      )}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-surface-200/40 bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area - Text Olmadan */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/logo/Logo.png"
              alt="Reactive Switcher Logo"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-yellow-500 to-green-500">Reactive Switcher</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#docs">Docs</NavLink>
          <NavLink href="#showcase">Showcase</NavLink>
          <NavLink href="https://poyrazavsever.com/blog" external>
            Blog
          </NavLink>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.buymeacoffee.com/poyrazavsever"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-amber-700 bg-amber-50 dark:bg-amber-500 dark:text-amber-50 rounded-full hover:bg-amber-500 dark:hover:bg-amber-500/50 transition-colors"
          >
            <Icons.Coffee className="w-4 h-4" />
            <span className="hidden lg:inline">Buy me a coffee</span>
          </a>

          <a
            href="https://github.com/poyrazavsever/reactive-switcher"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground bg-surface-100 hover:bg-surface-200 border border-surface-200 rounded-full transition-colors"
          >
            <Icons.Github className="w-4 h-4" />
            <span className="hidden sm:inline">Star</span>
          </a>

          <div className="w-px h-6 bg-surface-200 mx-1" />

          <button
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-100 transition-colors font-mono text-sm font-bold text-primary"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
