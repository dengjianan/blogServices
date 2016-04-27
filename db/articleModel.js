var mongoose = require('mongoose');
var _ArticleSchema = mongoose.Schema( {
	title: String,
	author: String,
	date: Date,
	body: String,
	type: String,
	label: Array
});
exports.Article = mongoose.model('Article',_ArticleSchema)