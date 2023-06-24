import {createContext, ReactNode, useContext, useEffect, useLayoutEffect} from "react";
import {ThemesConfig} from "./types";
import {applyColors, flattenColors, mergeAndFlatten} from "./colors";

type LoadedConfig = ThemesConfig & {
    addAlphaColors: boolean
}

const themesContext = createContext<LoadedConfig>(undefined!);

export function ThemesProvider({config, children}: { config: ThemesConfig, children?: ReactNode }) {
    const loadedConfig = {
        ...config,
        addAlphaColors: config.addAlphaColors ?? true
    }

    useLayoutEffect(() => {
        const merged = mergeAndFlatten([
            config.themes.base.colors, config.themes[config.default].colors
        ], loadedConfig.addAlphaColors);

        applyColors(merged, document.documentElement);
    }, [])

    return <themesContext.Provider value={loadedConfig}>
        {children}
    </themesContext.Provider>
}

export const useThemesConfig = () => useContext(themesContext);