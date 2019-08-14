/* eslint-env node, es6 */
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

module.exports = () => ( {
	entry: {
		server: './src/server/server.js'
	},

	module: {
		rules: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			use: { loader: 'babel-loader' }
		} ]
	},

	plugins: [ new CleanWebpackPlugin() ],

	output: {
		library: 'eigenvector',
		libraryTarget: 'this'
	}
} );
