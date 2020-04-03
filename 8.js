var http=require("http")
var fs=require("fs")
var queryString=require("querystring")
http.createServer(function(req,res){
let result="",i=0// result接受提交的数据出师未控 i记录接收数据的次数

//第二步 数据进行批次传输
req.on("data",function(data){
    //执行一次data数据就会进行拼接i+1
    result+=data
    console.log('${++i}',data,data.toString())
})
//第三步
req.on("end",function(){
    let postdata=queryString.parse(result)
    console.log("end",postdata)
})
//第一步
fs.readFile("./static/form.html",function(err,data){
    if(err){
        res.write("404")
    }else{
        res.write(data)
    }
    res.end()
})
}).listen(3000)