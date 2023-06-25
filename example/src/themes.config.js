/** @type {import('../../package/src/types').ThemesConfig} */

const themesConfig = {
    // addAlphaColors: false,  // defaults to true
    default: "light",
    themes: {
        base: {
            colors: {
                primary: {
                    DEFAULT: "#2f2fff",
                    dark: "#1111ab",
                    copy: "white"
                },
            }
        },
        light: {
            name: "Light",
            colors: {
                background: {
                    DEFAULT: "#fff",
                    accent: "#ddd"
                },
                copy: {
                    DEFAULT: "black",
                    gray: "#525252"
                }
            }
        },
        dark: {
            name: "Dark",
            colors: {
                background: {
                    DEFAULT: "#1f1f1f",
                    accent: "#4f4f4f"
                },
                copy: {
                    DEFAULT: "white",
                    gray: "#d3d3d3"
                }
            }
        }
    }
}

export default themesConfig;
