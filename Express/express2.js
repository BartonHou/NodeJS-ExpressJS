const express = require('express')
const path = require('path')
const app = express()
const { products } = require("./data")
const authorize = require("./authorized")
const logger = require('./log')
//app.use(express.static("./public"))
app.use([logger, authorize])
app.get('/', logger, (req, res) => {
    res.status(200).send("<h1>Home Page<h1>")
})

app.listen(5000, () => {
    console.log("Server start")
})