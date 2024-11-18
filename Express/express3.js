const express = require("express")
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(bodyparser.json());

const people = require('./router/people')
const auth = require('./router/auth')

app.use(express.static('./methods-public'))

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, ()=>{
    console.log("Server start on port 5000")
})