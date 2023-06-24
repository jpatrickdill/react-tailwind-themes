import Color from "colorjs.io";
import {Colors} from "./types";
import merge from "ts-deepmerge";

const alphaValues = [0, 10, 20, 25, 30, 33, 40, 50, 60, 67, 70, 75, 80, 90, 100];

// Gets CSS variables from a theme's colors.
export function flattenColors(colors: Colors, addAlpha: boolean) {
    let allColors: Record<string, string> = {};

    const walkThemeColors = (prefix: string, colors: Colors) => {
        for (const [name, val] of Object.entries(colors)) {
            if (typeof val === "string") {
                let varName = name === "DEFAULT" ? prefix : prefix + "-" + name;

                allColors[varName] = val;

                if (addAlpha) {
                    for (const alpha of alphaValues) {
                        const color = new Color(val);
                        color.alpha *= alpha / 100;

                        allColors[`${varName}/${alpha}`] = color.toString({format: "rgba"});
                    }
                }
            } else {
                walkThemeColors(prefix + (prefix ? "-" : "") + name, val);
            }
        }
    };

    walkThemeColors("", colors);

    return allColors;
}

export function mergeAndFlatten(colorSets: Colors[], addAlpha: boolean) {
    let mergedColors = merge(...colorSets) as unknown as Colors;

    return flattenColors(mergedColors, addAlpha);
}

// Applies colors to a DOM element via CSS properties.
export function applyColors(colors: Record<string, string>, element: HTMLElement) {
    for (const [name, value] of Object.entries(colors)) {
        element.style.setProperty(`--c-${name}`, value);
    }
}