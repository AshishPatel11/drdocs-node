import mongoose from 'mongoose' //mongoose for connecting the mongoDB
import dotenv from 'dotenv'
dotenv.config()

const mongoURI = process.env.DATABASE_URL; //mongodb connection String

//function for the database connection setup
const dbConnection = () => {
    return new Promise((resolve, reject) => {
        //connecting the database
        mongoose.connect(mongoURI);

        let conn = mongoose.connection;
        conn.on('connected', () => {
            console.log('database is connected successfully');
        });
        conn.on('disconnected', () => {
            console.log('database is disconnected successfully');
        });
        conn.on('error', (err) => {
            console.error('connection error:', err);
            reject(err);
        });
    });
};

export default dbConnection;