const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: {
        index: "./src/index.js",
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.ejs',
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: "src/styles/[name].css?v=[contenthash:8]",
        }),
	],
	output: {
		filename: "src/js/[name].js?v=[contenthash:8]",
		path: path.resolve(__dirname, "public"),
		clean: true,
        // publicPath: 'http://127.0.0.1:5500/',
        publicPath: '',
	},
    optimization: {
        // for extracting all styles in 1 file
        splitChunks: {
            cacheGroups: {
              styles: {
                name: "styles",
                type: "css/mini-extract",
                chunks: "all",
                enforce: true,
              },
            },
        },
        minimize: true,
    },
	module: {
		rules: [
            {
                test: /\.ejs$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                    "template-ejs-loader",
                ],
            },
            {
                test: /\.js$/i,
                use: "babel-loader",
            },
			{
				test: /\.((sa|sc)ss)$/i,
				use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
			},
            {
				test: /\.(css)$/i,
				use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
                generator: {
                    filename: 'src/images/[name][ext]?v=[contenthash:8]',
                },
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
                generator: {
                    filename: 'src/fonts/[name][ext]?v=[contenthash:8]',
                },
			},
            {
				test: /\.(mp3|ogg|wav|mp4|ogv|webm)$/i,
				type: "asset/resource",
                generator: {
                    filename: 'src/media/[name][ext]',
                },
			},
		],
	},
};