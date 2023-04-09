const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 mode: "development",
  entry:{
    bundle: path.resolve(__dirname, "app.js")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};