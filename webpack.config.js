/* eslint-env node, es6 */
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

module.exports = () => ( {
	entry: {
		server: './src/server/server.jsx'
	},

	module: {
		rules: [ {
			test: /\.jsx?$/,
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
