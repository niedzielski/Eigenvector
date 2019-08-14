/* eslint-env node, es6 */
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ( {
	entry: {
		server: './src/server/server.jsx'
	},

	module: {
		rules: [ {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: { loader: 'babel-loader' }
		}, {
			test: /\.css$/,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				'css-loader',
			]
		} ]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin()
	],

	output: {
		library: 'eigenvector',
		libraryTarget: 'this'
	}
} );
