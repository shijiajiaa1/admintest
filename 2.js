 //引入http模块 require 加载
var http=require("http")
//创建服务器     createServer->创建服务器   req->request 请求   res->response 响应
var server=http.createServer(function(req,res){
   res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//    req.url获取地址栏路径
   console.log(req.url)
    // switch(req.url){
    //     case"/red":
    //     res.write("red")
    //     break;
    //     default:
    //             res.write("我是默认的")  
    // }
   
    if(req.url=="/red"){
       
        res.write("red")
    }else{
                res.write("我是默认的")  
    }
    res.end()
    })
    server.listen(3000)