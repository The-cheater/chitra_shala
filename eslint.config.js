import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
    {
        ignores: ["dist/**"],
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReactConfig,
];
