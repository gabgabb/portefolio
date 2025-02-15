import { nextui } from '@nextui-org/theme';

const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(autocomplete|button|card|date-input|image|input|select|skeleton|spinner|table|ripple|listbox|divider|popover|scroll-shadow|checkbox|spacer).js"
    ],
    theme: {
        extend: {
            fontFamily: {
                bogart: ["Bogart", "serif"],
            },
        },
    },
    plugins: [
        nextui()
    ],
};

export default config;