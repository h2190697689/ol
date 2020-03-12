const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js",".json",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer:{
        port: 3002,
        contentBase: "./public"
    }
}