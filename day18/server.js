const http = require("http")
const fs = require("node:fs")

fs.writeFileSync("./text.txt", "hello world")


const port = 4000
const server = http.createServer((req, res)=>{
      res.writeHead(200, {})

      


      res.end("Hello from server");
})

server.listen(port, ()=>{
      console.log(`server listening at port :${port}`);
})