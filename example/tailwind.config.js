import * as path from "path";

const {getTailwindColors} = require("../package/dist/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ...getTailwindColors(
                    require(path.join(__dirname, "src/themeConfig")).default
                )
            }
        },
    },
}

