import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist','vite.config.ts']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins:{
      react,
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules:{
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': "warn"
    },
    settings:{
      react:{
        version: 'detect',
      }
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
