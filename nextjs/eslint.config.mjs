import globals from "globals";
import pluginJs from "@eslint/js";
import ts from "typescript-eslint";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import tailwind from "eslint-plugin-tailwindcss";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: globals.browser,
        },
        rules: {
            indent: ["error", 4],

        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    ...ts.configs.recommended,
    ...tailwind.configs["flat/recommended"],
];