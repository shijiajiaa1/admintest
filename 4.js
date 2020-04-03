var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    if(req.url=="/red"){
        fs.readFile("./static/red.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/1.jpg"){
        fs.readFile("./static/1.jpg",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else{
        res.end("404")
    }
}).listen(3000,function(){
    console.log("服务器已经挂起")
})