const { readFileSync } = require('fs')
const http = require('http')
const { wrap } = require('module')

const welcome = readFileSync("html.html")
const server = http.createServer((req, res)=>{
    const url = req.url
    if (url ==='/')
    {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(welcome)
    res.end()
    }
    else if (url ==='/about')
    {
    res.writeHead(200, {'content-type':'text/html'})
    res.write("<h1>About info!<h1/>")
    res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
    res.write("<h1>Not found my child!<h1/>")
    res.end()
    }
})

server.listen(5000)