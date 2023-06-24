import { ReactNode } from "react";
import { ThemesConfig } from "./types";
type LoadedConfig = ThemesConfig & {
    addAlphaColors: boolean;
};
export declare function ThemesProvider({ config, children }: {
    config: ThemesConfig;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useThemesConfig: () => LoadedConfig;
export {};
