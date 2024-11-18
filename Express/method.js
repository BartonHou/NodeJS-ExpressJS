const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const { people } = require("./data")

var jsonParser = bodyparser.json()
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use([jsonParser, urlencodedParser])
app.use(express.static('./methods-public'))

app.get('/api/people',  (req, res) => {
    res.status(200).json({success:true, data: people})
})
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
  })
app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name)
    {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).end("Please Provide name")
})
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id ===Number(id))
    if(person){
        const newPeople = people.map((person)=>{
            if (person.id === Number(id))
            {
                person.name = name
                
            }
        })
        return res.status(200).json({success:true, data:newPeople})
    }
    else{
        res.status(401).end("No such id exist")
    }
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params
    const person = people.find((person)=>person.id ===Number(id))
    if(person){
        const newPeople = people.filter((person)=>
            person.id !== Number(id))
        console.log(newPeople)
        return res.status(200).json({success:true, data:newPeople})
    }
    else{
        res.status(401).end("No such id exist")
    }
})
app.listen(5000, () => {
    console.log("Server start")
})