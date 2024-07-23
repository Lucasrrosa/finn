const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "turbo"],
  plugins: [],
  env: {
    node: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'space-in-brackets': 0,
    indent: ['off'],
    // 'indent': [
    //   'error',
    //    4,
    //   {
    //     'ignoredNodes': [
    //         'FunctionExpression > .params[decorators.length > 0]',
    //         'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
    //         'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
    //     ],
    //   },
    // ],
  'max-len': ["error", { "code": 150 }]
  }
};
