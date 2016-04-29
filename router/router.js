/*
* 使用 express.Router 类创建模块化、可挂载的路由句柄。
* Router 实例是一个完整的中间件和路由系统.
* 创建了一个路由模块，并加载了一个中间件，定义了一些路由，
* 并且将它们挂载至应用的路径上。
*/
var express = require('express');
var router = express.Router();

var models = require('../db/articleModel.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog_database');
var Article = models.Article;
// 路由使用中间件输出请求与响应的输出时间
router.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});
// 增加路由句柄
router.route('/test')
	.get(function (req, res) {
		var article = new Article({
			title: "颐和园",
			author: "deng",
			body: "颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区十五公里，占地约二百九十公顷，与圆明园毗...",
			type: "life",
			date : "2016-04-29T05:28:55.205Z", 
			label: ["风景"]
		});
		article.save();
		res.send('insert success');
	})
	.post(function (req, res) {
		console.log('123');
	});
// 获取所有文章列表
router.route('/')
	.get(function (req, res) {
		// 根据URL识别文章的所属类型，并返回该类型的所有文章
		var type = req.baseUrl.substr(1);
		var result
		Article.find({type:type})
		// .select('title label')
		.exec(function(err, doc) {
			if(err) return handleError(err);
			res.json(doc);
		})
	})
	.post(function (req, res) {
		console.log(res.client.baseUrl)
	});

// 根据年份获取该文章列表
router.route('/:year')
	.get(function (req, res){
		var type = req.baseUrl.substr(1);
		var year = req.params.year;
		var gtDate = new Date(year,0,0);
		var ltDate = new Date(year,12,31);
		Article.find({type: type, year: year})
		.where('date').gt(gtDate).lt(ltDate)
		.exec(function(err, doc){
			res.json(doc);
		})
	});

// 根据月份获取该文章列表	
router.route('/:year/:month')
	.get(function (req, res) {
		res.send('get article list by month')
	});

// 根据文章列表获取该文章列表
router.route('/:year/:month/:id')
	.get(function (req, res) {
		var id = req.params.id;
		Article.find({_id: id})
		.exec(function(err, doc) {
			if(err) return handleError(err);
			res.json(doc);
		});
	});
module.exports = router;
