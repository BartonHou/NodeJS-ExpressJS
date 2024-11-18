const express = require('express')
const path = require('path')
const app = express()
const { products } = require("./data")
//app.use(express.static("./public"))
const middleware = (req, res, next)=>{

    const url = req.url
    const method = req.method
    const time = new Date().getFullYear()
    console.log(url, method, time
    )
    //next()
}
app.get('/', middleware, (req, res) => {
    res.status(200).send("<h1>Home Page<h1>")
})
app.get('/about', middleware, (req, res) => {
    res.status(200).send("About Page")
})
app.get('*',middleware, (req,res)=>{
    res.status(404).send("Not found")
})


app.listen(5000, () => {
    console.log("Server start on 5000")
})