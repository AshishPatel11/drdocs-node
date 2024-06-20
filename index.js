import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './src/utils/dbConnection.js'
dotenv.config()

//database connection funtion
dbConnection()
const port = process.env.PORT ?? 3000
const app = express()

app.get('/', (req, res, next) => {
    res.send("hello world!")
})

app.listen(port, () => {
    console.log(`server listinig on port ${port}`)
})