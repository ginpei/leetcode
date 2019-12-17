module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
    "plugin:@typescript-eslint/recommended",
  ],
  "env": {
    "es6": true,
    "jest": true,
  },
  "parser": "@typescript-eslint/parser",
	"rules": {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": "off",
  },
};
