var http=require("http")      //引入http模块 require 加载
//创建服务器     createServer->创建服务器   req->request 请求   res->response 响应
var server=http.createServer(function(req,res){
console.log("hello node")
//设置响应头    状态码   文本类型    text/plain   image/jppeg    image/gif    编码utf-8
res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//结束响应
res.end("我已经结束了")


})
//监听端口
server.listen(3000)

//后台：只要改动代码那么必须重新启动