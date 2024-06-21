import mongoose from 'mongoose'
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const UserSchema = new Schema({
    //fields to be added in collection
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//exporting the model module
export const Users = mongoose.model('users', UserSchema)