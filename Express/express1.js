const express = require('express')
const path = require('path')
const app = express()
const { products } = require("./data")
//app.use(express.static("./public"))
app.get('/', (req, res) => {
    res.status(200).send("<h1>Home Page<h1><a href='/api/products'>products</a>")
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
    // res.status(200).send("Home Page")
})
app.get('/api/products/:productID', (req, res) => {
    console.log("Get in")
    const { productID } = req.params
    const singleProduct = products.find((product) =>
        product.id === Number(productID)
    )
    console.log(singleProduct)
    if (!singleProduct) {
        return res.status(404).send("<h1>Item Does Not Exist</h1>")
    }
    res.json(singleProduct)

})
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})
app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})
// app.get('*', (req,res)=>{
//     res.status(404).send("Not found")
// })
app.listen(5000, () => {
    console.log("Server start")
})