//entry->output
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map", //basically gives the references to the corresponding component,if some error occurs,instead of giving ref to the error in bundle.js
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
