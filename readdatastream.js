var fs = require('fs')
var http = require('http')
http.createServer((req, res)=>{
    const text = fs.createReadStream('./big.txt','utf-8')
    text.on("open", ()=>{
        text.pipe(res)
    })
    text.on("error",(error)=>{
        res.end(error)
    })
}).listen(5000)
// const stream = fs.createReadStream('./big.txt',{highWaterMark: 32})
// stream.on('data',(result)=>{
//     console.log(result)
// })