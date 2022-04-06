var http = require("http");
// console.log(http) 
var server = http.createServer((request,response)=>{
    console.log("request recieved...")
    response.write("hello I Am Here ")
    // response.end()
    response.write(" Hello I Am Here Too")
    response.end()
});
server.listen(50590);