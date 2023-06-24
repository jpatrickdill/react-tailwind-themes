import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useLayoutEffect } from "react";
import { applyColors, mergeAndFlatten } from "./colors";
const themesContext = createContext(undefined);
export function ThemesProvider({ config, children }) {
    var _a;
    const loadedConfig = Object.assign(Object.assign({}, config), { addAlphaColors: (_a = config.addAlphaColors) !== null && _a !== void 0 ? _a : true });
    useLayoutEffect(() => {
        const merged = mergeAndFlatten([
            config.themes.base.colors, config.themes[config.default].colors
        ], loadedConfig.addAlphaColors);
        applyColors(merged, document.documentElement);
    }, []);
    return _jsx(themesContext.Provider, Object.assign({ value: loadedConfig }, { children: children }));
}
export const useThemesConfig = () => useContext(themesContext);
