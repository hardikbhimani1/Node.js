var http = require("http");
var server = http.createServer((request,response)=>{
    console.log("request recieved....")
    response.setHeader("content-type","text/html");
    response.write("hello");
    response.write("<h1>Hello I Am Hardik Bimani </h1>")
    response.write("<h1> I From Surat </h1>")
    response.write("request.url" + request.url)
    response.write("request.mathod"+ request.mathod)
    response.end()
});
server.listen(5051,()=>{
    console.log("listning 5051")
});