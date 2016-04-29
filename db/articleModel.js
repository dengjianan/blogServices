var mongoose = require('mongoose');
var _ArticleSchema = mongoose.Schema( {
	title: String,
	author: String,
	date: {type:Date, default: Date.now},
	body: String,
	type: String,
	label: Array
});
exports.Article = mongoose.model('Article',_ArticleSchema)