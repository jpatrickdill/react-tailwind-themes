import {ThemesConfig} from "./types";
import {flattenColors} from "./colors";


export function getTailwindColors(config?: ThemesConfig) {
    if (!config) throw new Error("No config passed");
    if (!config.themes) throw new Error("Malformed config: No themes present");
    if (!config.default) throw new Error("Malformed config: Default theme is required");

    let addAlphaColors = config.addAlphaColors ?? true;

    let tailwindConfigColors: Record<string, string> = {};

    for (const [name, theme] of Object.entries(config.themes)) {
        tailwindConfigColors = {
            ...tailwindConfigColors,
            ...flattenColors(theme.colors, addAlphaColors)
        }
    }

    for (const colorName of Object.keys(tailwindConfigColors)) {
        tailwindConfigColors[colorName] = `var(--c-${colorName})`
    }

    return tailwindConfigColors;
}