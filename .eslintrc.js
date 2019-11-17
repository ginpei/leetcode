module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
	"rules": {
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": "off",
  },
};
