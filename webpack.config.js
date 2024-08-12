const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 3000,
    },
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif|ico|ttf|woff2|eot|woff)$/,
                use: ["file-loader?name=[name].[ext]"],
            },
            {
                test: /\.(js|jsx|mjs)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-typescript", "@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "adminApp",
            remotes: {
                client: "clientApp@http://localhost:3002/remoteEntry.js",
                userApp: "userApp@http://localhost:3001/remoteEntry.js",
            },
            shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

