// entry -> output
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

  return {
    entry: "./src/app.js", //entry point for ReactDOM
    output: {
      //output dir to server
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          //to parse jsx, using babel loader
          loader: "babel-loader",
          test: /\.js$/, //only files that meet this criteria,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map", //handle super large files ize
    devServer: {
      contentBase: path.join(__dirname, "public"), //to serve using webpack-dev-server,
      historyApiFallback: true, //for client side routing
    },
  };
};
