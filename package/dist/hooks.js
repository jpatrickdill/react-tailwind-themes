import { applyColors, mergeAndFlatten } from "./colors";
import { useThemesConfig } from "./context";
import { useLayoutEffect } from "react";
const getTheme = (themesConfig, arg) => {
    if (typeof arg === "string") {
        return themesConfig.themes[arg];
    }
    else {
        return arg;
    }
};
export function useTheme(theme, element) {
    const themesConfig = useThemesConfig();
    useLayoutEffect(() => {
        const mergedColors = mergeAndFlatten([
            themesConfig.themes.base.colors,
            getTheme(themesConfig, theme).colors
        ], themesConfig.addAlphaColors);
        applyColors(mergedColors, element);
    }, [theme, element]);
}
export function useMergedThemes(themes, element) {
    const themesConfig = useThemesConfig();
    useLayoutEffect(() => {
        const colorSets = themes.map(theme => getTheme(themesConfig, theme).colors);
        const mergedColors = mergeAndFlatten([
            themesConfig.themes.base.colors,
            ...colorSets
        ], themesConfig.addAlphaColors);
        applyColors(mergedColors, element);
    }, [themes, element]);
}
