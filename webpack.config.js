const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "public/dist"),
    publicPath: "/",
    filename: "app.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./index.html" })
  ],
  resolve: {
    extensions: [".js", "jsx", "*"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
};