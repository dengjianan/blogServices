var mongoose = require('mongoose');
var _ArticleSchema = mongoose.Schema( {
	title: String,
	author: String,
	date: {type:Date, default: Date.now},
	body: String,
	type: String,
	labels: Array
});
exports.Article = mongoose.model('Article',_ArticleSchema)