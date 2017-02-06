//noinspection JSUnresolvedFunction
/**
 * Created by unrealyan on 2017/2/4.
 * webpack-deb-server
 */
let config = require('./webpack.config.js');
//noinspection JSUnresolvedFunction
let webpack = require('webpack');
//noinspection JSUnresolvedFunction
let webpackDebServer = require('webpack-dev-server');
let compiler = webpack(config);
//noinspection JSUnresolvedFunction
let Dashboard = require('webpack-dashboard');
//noinspection JSUnresolvedFunction
let DashboardPlugin = require('webpack-dashboard/plugin');
//noinspection JSUnresolvedVariable
let isWin = /^win/.test(process.platform);
if (!isWin) {
	let dashboard = new Dashboard();
	//noinspection JSUnresolvedFunction
	compiler.apply(new DashboardPlugin(dashboard.setData));
}

let server = new webpackDebServer(compiler, {

});
server.listen(8888);

