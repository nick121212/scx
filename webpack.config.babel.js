import { resolve } from "path";
import { DefinePlugin, EnvironmentPlugin, optimize } from "webpack";
import WXAppWebpackPlugin from "wxapp-webpack-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const { NODE_ENV, LINT, NO_LINT } = process.env;
const isDev = false;//NODE_ENV !== "production" && NODE_ENV !== "\"production \"";
const shouldLint = false; // (!isDev || (!!LINT && LINT !== "false")) && !NO_LINT;

export default {
    entry: {
        app: [
            "core-js/es6/promise",
            "./src/app.js",
        ],
    },
    output: {
        filename: "[name].js",
        publicPath: "/",
        chunkFilename: "[id].[name].chunk.js",
        path: resolve("dist"),
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/,
            use: [
                "babel-loader",
                shouldLint && "eslint-loader",
            ].filter(Boolean),
        },
        {
            test: /\.json$/,
            include: /src/,
            use: [{
                loader: "file-loader",
                options: {
                    useRelativePath: true,
                    name: "[name].[ext]",
                },
            }],
        },
        {
            test: /\.(png|jpg|gif)$/,
            include: /src/,
            loader: "file-loader",
            options: {
                name: "/[name]_[hash:7].[ext]",
                outputPath: "images",
            }
        },
        {
            test: /\.scss$/,
            include: /src/,
            use: [{
                loader: "file-loader",
                options: {
                    useRelativePath: true,
                    name: "[name].wxss",
                }
            },
            {
                loader: "sass-loader",
                options: {
                    includePaths: [
                        resolve("src", "styles"),
                        resolve("src"),
                    ],
                },
            },
            ],
        },
        {
            test: /\.wxss$/,
            include: /src/,
            use: [{
                loader: "file-loader",
                options: {
                    useRelativePath: true,
                    name: "[name].wxss",
                }
            }]
        },
        {
            test: /\.wxml$/,
            include: resolve("src/pages"),
            use: [{
                loader: "file-loader",
                options: {
                    useRelativePath: true,
                    name: "[name].[ext]",
                },
            },
            {
                loader: "wxml-loader",
                options: {
                    root: resolve("src"),
                    minimize: false
                },
            },
            ],
        },
        {
            test: /\.wxml$/,
            include: resolve("src"),
            exclude: resolve("src/pages"),
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name]_[hash:7].[ext]",
                },
            },
            {
                loader: "wxml-loader",
                options: {
                    root: resolve("src"),
                },
            },
            ],
        },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: resolve("/"),
            verbose: true,
            dry: false,
        }),
        new CopyWebpackPlugin([
            { from: "node_modules/weui-wxss/dist/style/weui.wxss", to: "weui.wxss" },
            { from: "src/images/", to: "images" },
            { from: "src/common/", to: "common" }
        ]),
        new DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
            },
            "__DEV__": JSON.stringify(isDev)
        }),
        new WXAppWebpackPlugin(),
        // new optimize.ModuleConcatenationPlugin(),
        new optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            }
        }),
        shouldLint && new StylelintPlugin(),
    ].filter(Boolean),
    devtool: "source-map",
    resolve: {
        modules: [resolve(__dirname, "src"), "node_modules"],
    },
    watchOptions: {
        ignored: /dist|manifest/,
        aggregateTimeout: 300,
    },
};
