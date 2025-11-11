// Flat ESLint config that includes recommended configs as objects
// Attempt to import shareable configs and merge them into the flat config.
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');

let eslintJsRecommended = {};
let reactRecommended = {};
let typescriptRecommended = {};
let prettierConfig = {};

  try {
    // @eslint/js provides the ESLint builtin recommended config as an object
    // (optional — if not installed, we silently skip)
    eslintJsRecommended = require('@eslint/js').configs?.recommended || {};
  } catch (e) {
  // ignore if package not available
}

try {
  reactRecommended = require('eslint-plugin-react').configs?.recommended || {};
} catch (e) {}

try {
  typescriptRecommended = require('@typescript-eslint/eslint-plugin').configs?.recommended || {};
} catch (e) {}

try {
  // eslint-config-prettier exports a config object
  prettierConfig = require('eslint-config-prettier') || {};
} catch (e) {}

const mergedBase = {
  // spread recommended configs (rules, settings, languageOptions, etc.)
  ...(eslintJsRecommended || {}),
  ...(reactRecommended || {}),
  ...(typescriptRecommended || {}),
  ...(prettierConfig || {}),
};

module.exports = [
  // general ignores
  {
    ignores: ['node_modules/**', 'dist/**', '.vite/**'],
  },
  // rules for JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  // include only specific merged properties (rules/settings/languageOptions) to avoid
  // invalid top-level keys from legacy configs (like parserOptions at top-level).
    languageOptions: {
      // prefer explicit parser from ts parser if not provided by mergedBase
      parser: mergedBase.languageOptions?.parser || tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        ...(mergedBase.languageOptions?.parserOptions || {}),
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
      ...(mergedBase.linterOptions || {}),
    },
    // explicitly provide plugin objects; do not blindly merge mergedBase.plugins
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      ...(mergedBase.settings || {}),
    },
    rules: {
      // keep project overrides and let merged recommended rules exist too
      'react/react-in-jsx-scope': 'off',
      ...(mergedBase.rules || {}),
    },
  // no additional top-level custom keys
  },
];
