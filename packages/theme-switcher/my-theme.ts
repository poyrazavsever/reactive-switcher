import { Theme } from "../theme-switcher/types";

// Bu tip tanımlamaları, TypeScript'in bize otomatik tamamlama sunmasını sağlar.
export const myThemes: Record<string, Theme> = {
  light: {
    name: "light",
    type: "light",
    colors: {
      background: "#ffffff",
      foreground: "#0f172a", // Slate-900
      primary: {
        DEFAULT: "#3b82f6", // blue-500
        foreground: "#ffffff",
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      secondary: {
        DEFAULT: "#64748b", // slate-500
        foreground: "#ffffff",
      },
      accent: {
        DEFAULT: "#f43f5e", // rose-500
        foreground: "#ffffff",
      },
      surface: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
      },
    },
  },
  dark: {
    name: "dark",
    type: "dark",
    colors: {
      background: "#020617", // Slate-950
      foreground: "#f8fafc", // Slate-50
      primary: {
        DEFAULT: "#60a5fa", // blue-400 (Dark modda daha açık ton)
        foreground: "#0f172a",
        50: "#172554", // Tersine çevrilmiş palet mantığı
        100: "#1e3a8a",
        200: "#1e40af",
        300: "#1d4ed8",
        400: "#2563eb",
        500: "#3b82f6",
        600: "#60a5fa",
        700: "#93c5fd",
        800: "#bfdbfe",
        900: "#dbeafe",
        950: "#eff6ff",
      },
      secondary: {
        DEFAULT: "#94a3b8", // slate-400
        foreground: "#0f172a",
      },
      accent: {
        DEFAULT: "#fb7185", // rose-400
        foreground: "#0f172a",
      },
      surface: {
        50: "#0f172a",
        100: "#1e293b",
        200: "#334155",
      },
    },
  },
  // Eğlence olsun diye ekstra bir tema :)
  ocean: {
    name: "ocean",
    type: "dark",
    colors: {
      background: "#042f2e", // teal-950
      foreground: "#ccfbf1", // teal-100
      primary: {
        DEFAULT: "#2dd4bf", // teal-400
        foreground: "#042f2e",
      },
      secondary: { DEFAULT: "#134e4a", foreground: "#ccfbf1" }, // teal-900
      accent: { DEFAULT: "#facc15", foreground: "#422006" }, // yellow-400
      surface: {
        50: "#115e59",
        100: "#0f766e",
        200: "#0d9488",
      },
    },
  },
};
