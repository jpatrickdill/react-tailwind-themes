import { Theme } from "./types";
type ThemeArg = string | Theme;
export declare function useTheme(theme: ThemeArg, element: HTMLElement): void;
export declare function useMergedThemes(themes: ThemeArg[], element: HTMLElement): void;
export {};
