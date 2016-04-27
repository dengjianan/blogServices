var express = require('express');
var router = require('./router/router.js');

var app = express();

// app.use的基本用法：app.use([path], function)
// 使用router中间件，增加生活、技术、阅读的文章路由
app.use('/life',router);
app.use('/technology',router);
app.use('/reading',router);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('start success');
});