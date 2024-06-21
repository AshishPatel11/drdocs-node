import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './src/utils/dbConnection.js'
import authRoutes from './src/api/auth/auth.router.js'
import errorHandler from './src/utils/errorHandler.js'

dotenv.config()

//database connection funtion
dbConnection()
const port = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded())

//api routes
app.use('/auth', authRoutes);

//common Error handler
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server listinig on port ${port}`)
})