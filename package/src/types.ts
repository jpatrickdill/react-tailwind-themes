export interface Colors {
    [key: string]: string | Colors
}

export interface Theme {
    name?: string,
    colors: Colors,
    meta?: {
        [key: string]: any
    }
}

export type ThemesConfig = {
    addAlphaColors?: boolean,
    default: string
    themes: {
        base: Theme,
        [key: string]: Theme
    }
}