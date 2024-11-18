
const { people } = require("../data")
const getPeople = (req, res) => {
    res.status(200).json({success:true, data: people})
}

const getPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
  }

const changePerson =   (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {getPeople, getPerson, changePerson, deletePerson}