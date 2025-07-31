import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { 
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, process: true, module: true, require: true, __dirname: true, console: true } 
    },
    settings: { react: { version: "detect" } },
    ...pluginReactConfig,
    ...pluginReactJsxRuntime,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  },
  {
    ignores: ["dist/**"],
  },
  {
    files: ["src/App.jsx", "src/main.jsx"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];
