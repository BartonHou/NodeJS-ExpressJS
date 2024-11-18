const authorize =(req, res, next)=>{
    const {username, password} = req.query
    if (username === 'barton' &&password ==='4N6b6t9g')
    {
        console.log("identity Authorized")
        next()
    }
    else{
        console.log('authorization fail')
        res.end("<h1>authorization fail</h1>")
    }
}
module.exports = authorize