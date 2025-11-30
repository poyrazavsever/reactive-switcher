"use client";

import Image from "next/image";
import { Icons } from "../icons";

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50/50 backdrop-blur-sm mt-auto">
      {/* Promo Banner - Reactive Image */}
      <div className="w-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 border-b border-surface-200/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-center">
          <span className="text-secondary">
            Görsellerinizi optimize etmek için harika bir çözüm mü arıyorsunuz?
          </span>
          <a
            href="https://www.npmjs.com/package/reactive-image"
            target="_blank"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-600 transition-colors group"
          >
            reactive-image kütüphanesine göz atın
            <Icons.LinkArrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="w-10 h-10 relative rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image
                src="/logo/Logo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Modern web uygulamaları için geliştirilmiş, performans odaklı tema
              yönetim sistemi.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Project</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a
                  href="#docs"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-primary transition-colors"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/poyrazavsever/reactive-switcher"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a
                  href="https://poyrazavsever.com/blog"
                  target="_blank"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Blog <Icons.External className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/poyrazavsever"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Buy me a coffee
                </a>
              </li>
            </ul>
          </div>

          {/* Links 3 - Meta */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <span className="cursor-not-allowed opacity-50">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-50">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-xs border border-surface-200 px-2 py-1 rounded bg-surface-100">
                  MIT License
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Poyraz Avsever. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/poyrazavsever"
              className="text-secondary hover:text-foreground transition-colors"
            >
              <Icons.Github className="w-5 h-5" />
            </a>
            {/* Buraya Twitter/X veya Linkedin ikonu da eklenebilir */}
          </div>
        </div>
      </div>
    </footer>
  );
}
