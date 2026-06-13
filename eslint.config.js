import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'vite.config.ts']),

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      react,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },

    languageOptions: {
      globals: globals.browser,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': 'warn',
    },
  },
]);