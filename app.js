var express = require('express');
var router = require('./router/router.js');
var bodyParser = require('body-parser');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
    	res.sendStatus(200); 
	 }else{
	  	next();
	 }
    
});
// app.use的基本用法：app.use([path], function)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// 使用router中间件，增加生活、技术、阅读的文章路由
app.use('/life',router);
app.use('/technology',router);
app.use('/reading',router);


var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('start success');
});