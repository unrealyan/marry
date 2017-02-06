/**
 * Created by unrealyan on 2017/2/4.
 * webpack.config
 */
let path = require('path');
let webpack = require('webpack');
let fs = require('fs');
let buildPath = './';
let folder_exists = fs.existsSync(buildPath);
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './main.jsx',
	module: {
		loaders: [
			{
				test: /\.(jsx|js)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
				},
			},
		]
	},
	output: {
		path: 'static',
		filename: 'bundle.js'
	},
	plugins: [new HtmlWebpackPlugin({
		title: '个人主页',
	})]
};
