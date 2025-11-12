// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";
import globals from "globals";
import importPlugin from 'eslint-plugin-import';

// Optionnel: activer la règle "prettier/prettier"
// -> nécessite `eslint-plugin-prettier` déjà présent chez toi
import prettierPlugin from "eslint-plugin-prettier";

export default [
    { ignores: [".next/**", "node_modules/**", "dist/**", "coverage/**"] },

    js.configs.recommended,

    // TypeScript "non type-checked" (simple et rapide)
    ...tseslint.configs.recommended,

    // Preset officiel Next 16 (inclut react, react-hooks, import, etc.)
    ...next,

    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        plugins: {
            prettier: prettierPlugin
        },
        rules: {
            // Remets ici seulement ce dont tu as VRAIMENT besoin
            "prettier/prettier": ["error", { tabWidth: 4, useTabs: false, endOfLine: "auto" }],

            // Évite de recharger des règles "react/*" ou "import/*" non nécessaires :
            // eslint-config-next en apporte déjà un bon set.
            camelcase: "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-var-requires": "off"
        }
    },
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: { import: importPlugin },
        settings: {
            "import/resolver": {
                typescript: true
            }
        },
        rules: {
            "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never", js: "never", jsx: "never" }],
            "import/prefer-default-export": "off"
        }
    }
];
