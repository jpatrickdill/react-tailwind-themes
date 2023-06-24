import { Colors } from "./types";
export declare function flattenColors(colors: Colors, addAlpha: boolean): Record<string, string>;
export declare function mergeAndFlatten(colorSets: Colors[], addAlpha: boolean): Record<string, string>;
export declare function applyColors(colors: Record<string, string>, element: HTMLElement): void;
