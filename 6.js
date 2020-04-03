var url=require("url")
// console.log(url)
// Url: [Function: Url],
// parse: [Function: urlParse],
// resolve: [Function: urlResolve],
// resolveObject: [Function: urlResolveObject],
// format: [Function: urlFormat],
// URL: [Function: URL],
// URLSearchParams: [Function: URLSearchParams],
// domainToASCII: [Function: domainToASCII],
// domainToUnicode: [Function: domainToUnicode],
// pathToFileURL: [Function: pathToFileURL],
// fileURLToPath: [Function: fileURLToPath]
//url字符串是一个结构化的字符串
// 注意：
// url提供了两套api处理url
// node.js遗留特有的api
//url.parse 返回对象的属性
var data =url.parse("http://localhost:3000/get.html?username=tom&password=123",true).query
// console.log(data)
// resolve 解析浏览器的超链接，转换成基本的url
//参数：from解析时对应的url to要解析的超链接
var data=url.resolve("/aa/bb/cc","dd")
var datatwo=url.resolve("http://localhost:3000/","ffff")
var datathree=url.resolve("http://localhost:3000/aa/","vv")
console.log(datathree)
//format返回一个格式化的url字符串
var objurl={
    protocol:"http:",  //协议
    slashes:true,//
    auth:null,//用户名和密码
    host:'localhost:3000',//主机名
    port:'3000',//端口号
    hash:null,      //哈希值
    search:'?username=tom&password=123',//查询字符串
query:'username=tom&password=123',//请求参数 针对于get
pathname:'/red',//路径名称
path:'/red?username=tom&password=123',//带查询的路径名
href:'http://localhost:3000/red?username=tom&password=123'//原字符串本身


}
var mat=url.format(objurl)
console.log(mat)