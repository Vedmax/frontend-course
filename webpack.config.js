/**
 * Created by Max on 16.04.2016.
 */
module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    devtool: "sourcemap",

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};