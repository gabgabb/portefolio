import { heroui } from "@heroui/theme";

const config = {
    content: [
        "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/components/(autocomplete|button|card|date-input|image|input|select|skeleton|spinner|table|ripple|listbox|divider|popover|scroll-shadow|checkbox|spacer).js"
    ],
    theme: {
        extend: {
            fontFamily: {
                bogart: ["Bogart", "serif"],
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui()
    ],
};

export default config;