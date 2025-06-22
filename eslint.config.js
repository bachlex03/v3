import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
// import babelParser from "@babel/eslint-parser";

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
    },

    rules: {
      'react-refresh/only-export-components': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 0,
      'react/display-name': 0,

      'no-unused-vars': 'off',
      'no-console': 'warn', // console.log, console.error, etc.
      'no-lonely-if': 'warn', // lonely if statements
      'no-duplicate-imports': 'warn', // duplicate imports
      'no-empty': 'error', // empty blocks
      'no-undef': 'error', // undefined variables
      'no-const-assign': 'error', // reassigning const variables
      'no-multi-spaces': 'warn', // multiple spaces
      'space-before-blocks': ['warn', 'always'], // space before blocks
      'object-curly-spacing': ['warn', 'always'], // object curly spacing
      'array-bracket-spacing': ['warn', 'always'], // array bracket spacing
      indent: ['warn', 2], // tab size
      semi: ['error', 'never'], // semicolon ";"
      quotes: ['error', 'single'], // quotes 'single' or "double"
      'linebreak-style': 0, // linebreak style (LF or CRLF)
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': ['warn', { before: true, after: true }], // keyword spacing (if, for, while, etc.)
      'comma-dangle': 'off', // trailing commas (, )
      'comma-spacing': ['warn', { before: false, after: true }], // comma spacing (, )
      'arrow-spacing': ['error', { before: true, after: true }], // arrow spacing (=>)
      'no-constant-condition': [
        // constant conditions in if statements
        'error',
        {
          checkLoops: false,
        },
      ],
      'no-trailing-spaces': [
        // trailing spaces
        'warn',
        {
          skipBlankLines: true,
          ignoreComments: true,
        },
      ],
      'no-multiple-empty-lines': [
        // multiple empty lines
        'warn',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],

      '@typescript-eslint/no-unused-vars': 'warn', // unused variables
      '@typescript-eslint/no-explicit-any': 'warn', // "any" typing
      '@typescript-eslint/no-non-null-assertion': 'warn', // non-null assertion operator (!)
    },
  },
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'all',
          tabWidth: 2,
          endOfLine: 'auto', // This setting is useful in cross-platform development teams
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true,
        },
      ],
    },
  },
)

// "lf" - Use Unix line endings (\n) - common on macOS/Linux
// "crlf" - Use Windows line endings (\r\n) - common on Windows
// "cr" - Use old Mac line endings (\r) - rarely used
