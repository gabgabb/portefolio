import { nextui } from '@nextui-org/theme';

const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(autocomplete|button|card|date-input|image|input|select|skeleton|spinner|table|ripple|listbox|divider|popover|scroll-shadow|checkbox|spacer).js"
    ],
    theme: {
        screens: {
            's-pho': {'max': '389px'},
            'l-pho': {'max': '919px', 'min': '390px'},
            'tab': {'max': '1439px', 'min': '920px'},
            'lap': {'max': '1919px', 'min': '1440px'},
            'des': {'min': '1920px'},
        },
        extend: {
            fontFamily: {
                bogart: ["Bogart", "serif"],
            },
            maxWidth: {
                's-pho': '320px',
                'l-pho': '390px',
                'tab': '920px',
                'lap': '1440px',
                'des': '1920px',
            },
            minWidth: {
                's-pho': '320px',
                'l-pho': '321px',
                'tab': '391px',
                'lap': '921px',
                'des': '1441px',
                'wide': '1921px',
            },
        },
    },
    plugins: [
        nextui()
    ],
};

export default config;