/*
* 使用 express.Router 类创建模块化、可挂载的路由句柄。
* Router 实例是一个完整的中间件和路由系统.
* 创建了一个路由模块，并加载了一个中间件，定义了一些路由，
* 并且将它们挂载至应用的路径上。
*/
var express = require('express');
var router = express.Router();
// 路由使用中间件输出请求与响应的输出时间
router.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});
// 增加路由句柄
// 获取所有健康生活文章列表
router.route('/')
	.get(function (req, res) {
		res.send('get all article list');
	})
	.post(function (req, res) {
		console.log(res)
	});
// 根据年份获取该文章列表
router.route('/:year')
	.get(function (req, res){
		res.send('get article list by year')
	});

// 根据月份获取该文章列表	
router.route('/:year/:month')
	.get(function (req, res) {
		res.send('get article list by month')
	});

// 根据文章列表获取该文章列表
router.route('/:year/:month/:id')
	.get(function (req, res) {
		res.send('get article list by id')
	});
module.exports = router;
