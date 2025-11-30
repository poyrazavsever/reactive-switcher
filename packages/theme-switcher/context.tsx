"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ThemesConfig, ThemeContextType } from "./types";
import { createCssString } from "./utils";

// Context'i oluşturuyoruz
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  themes: ThemesConfig;
  defaultTheme: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themes,
  defaultTheme,
}) => {
  // 1. State: Aktif tema ismi
  const [theme, setThemeState] = useState<string>(defaultTheme);

  // Güvenli tema değiştirme fonksiyonu
  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setThemeState(themeName);
    } else {
      console.warn(`Theme '${themeName}' not found in configuration.`);
    }
  };

  // Basit toggle fonksiyonu (Örn: light -> dark -> light)
  // Eğer ikiden fazla tema varsa sırayla döner.
  const toggleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  // 2. Effect: Tema değiştiğinde CSS'i güncelle
  useEffect(() => {
    const activeThemeObject = themes[theme];
    if (!activeThemeObject) return;

    // a. CSS stringini oluştur (utils.ts'den gelen fonksiyon)
    const cssString = createCssString(activeThemeObject);
    const styleId = "react-theme-switcher-styles";

    // b. <style> etiketini bul veya oluştur
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.setAttribute("id", styleId);
      document.head.appendChild(styleTag);
    }

    // c. Yeni CSS değişkenlerini enjekte et
    styleTag.innerHTML = cssString;

    // d. Tailwind 'darkMode: class' stratejisi için HTML sınıfını yönet
    const html = document.documentElement;
    if (activeThemeObject.type === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme, themes]); // theme veya themes değişirse çalışır

  const value = {
    theme,
    setTheme,
    toggleTheme,
    activeThemeObject: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// 3. Custom Hook: Context'i kullanmak için
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
