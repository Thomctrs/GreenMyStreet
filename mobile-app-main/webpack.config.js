module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Turns css into commonjs
          "sass-loader", // Turns sass into css
        ],
      },
    ],
  },
};
