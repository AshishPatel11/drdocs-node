const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const app = express()
app.get('/', (req, res, next) => {
    res.send("hello world!")
})

app.listen(port, () => {
    console.log(`server listinig on port ${port}`)
})