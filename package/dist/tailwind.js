import { flattenColors } from "./colors";
export function getTailwindColors(config) {
    var _a;
    if (!config)
        throw new Error("No themesConfig passed");
    if (!config.themes)
        throw new Error("Malformed themesConfig: No themes present");
    if (!config.default)
        throw new Error("Malformed themesConfig: Default theme is required");
    let addAlphaColors = (_a = config.addAlphaColors) !== null && _a !== void 0 ? _a : true;
    let tailwindConfigColors = {};
    for (const [name, theme] of Object.entries(config.themes)) {
        tailwindConfigColors = Object.assign(Object.assign({}, tailwindConfigColors), flattenColors(theme.colors, addAlphaColors));
    }
    for (const colorName of Object.keys(tailwindConfigColors)) {
        tailwindConfigColors[colorName] = `var(--c-${colorName})`;
    }
    return tailwindConfigColors;
}
