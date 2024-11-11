const EventEmitter = require('events')
const customer = new EventEmitter()
customer.on('response1',()=>{
    console.log("This is an event")
})
customer.on('response2',(giao, giao2)=>{
    console.log(`This is an event ${giao}, ${giao2}`)
})
customer.emit('response1')
customer.emit('response2', 'giao', 'giao')
