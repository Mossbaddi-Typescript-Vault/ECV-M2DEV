import { Theme } from "./types";

export type TokenKeys = "fg" | "bg" | "accent";
export type ThemeTokens = Readonly<Record<TokenKeys, string>>;

export const TOKENS: Readonly<Record<Theme, ThemeTokens>> = {
    dark: { fg: "#fff", bg: "#000", accent: "#0ff" },
    bright: { fg: "#000", bg: "#fff", accent: "#f0f" }
} as const;