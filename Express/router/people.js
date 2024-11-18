const express = require('express')
const router = express.Router()

const {changePerson, getPeople, getPerson, deletePerson} = require('./controller')

// router.get('/', getPeople)
// router.post('/', getPerson)

// router.put('/:id', changePerson)

// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(getPerson)
router.route('/:id').put(changePerson).delete(deletePerson)
module.exports = router