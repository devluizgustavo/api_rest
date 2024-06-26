module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: "module",
  },
  rules: [
    {
      "no-console": "off",
      "class-methods-use-this": "off",
    },
  ],
};
