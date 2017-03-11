module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "jsx/uses-factory": [1, {"pragma": "JSX"}],
    "jsx/factory-in-scope": [1, {"pragma": "JSX"}],
    "jsx/mark-used-vars": 1,
    "jsx/no-undef": 1
  },
  "plugins": [
    "react",
    "jsx"
  ],
};
