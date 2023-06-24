import {Colors, Theme, ThemesConfig} from "./types";
import {applyColors, flattenColors, mergeAndFlatten} from "./colors";
import merge from "ts-deepmerge";
import {useThemesConfig} from "./context";
import {useEffect, useLayoutEffect} from "react";

type ThemeArg = string | Theme;

const getTheme = (themesConfig: ThemesConfig, arg: ThemeArg) => {
    if (typeof arg === "string") {
        return themesConfig.themes[arg];
    } else {
        return arg;
    }
}

export function useTheme(theme: ThemeArg, element: HTMLElement) {
    const themesConfig = useThemesConfig();

    useLayoutEffect(() => {
        const mergedColors = mergeAndFlatten([
            themesConfig.themes.base.colors,
            getTheme(themesConfig, theme).colors
        ], themesConfig.addAlphaColors);

        applyColors(mergedColors, element);
    }, [theme, element]);
}

export function useMergedThemes(themes: ThemeArg[], element: HTMLElement) {
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