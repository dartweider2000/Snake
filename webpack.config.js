const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry : './src/main.js',
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname, 'dist')
	},
	plugins : [
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : './src/index.html',
      inject : 'body',
      scriptLoading : 'blocking'
		}),
		new MiniCssExtractPlugin({
			filename : 'styles.css'
		})
	],
	module: {
    	rules: [
      	{
        		test: /\.scss$/,
        		use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      	},
      	{
      		test: /\.(js|ts)$/,
      		exclude: /node_modules/,
      		use: "babel-loader"
      	}
    	]
  	},
  	devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open : "chrome"
  },
  resolve : {
    extensions : ['.js', '.ts']
  }
}