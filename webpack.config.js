const config = {
  mode: "production",
  entry: {
    card: "./src/script/source/card.js",
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

module.exports = config;