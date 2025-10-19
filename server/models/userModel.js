import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;