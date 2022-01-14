// $ npm i -D @ginpei/eslintrc @typescript-eslint/eslint-plugin eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier

module.exports = {
  extends: "./node_modules/@ginpei/eslintrc/.eslintrc.js",
  rules: {
    "no-continue": "off",
    "no-restricted-syntax": [
      "error",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],
  },
};
