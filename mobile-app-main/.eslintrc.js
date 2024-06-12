module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
        bracketSameLine: true,
      },
    ],
  },
};
