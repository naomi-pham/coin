const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const timeStamp = Date.now();

module.exports = (env, argv) => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, `build`),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, `build/${argv.mode}/${timeStamp}`),
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|svg)$/,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
  };
};
