import {Schema, mongoose} from "mongoose";

const userSchema = new Schema({
    role:{
        type:String,
        // Consumer
    },
    profile: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },

}, { timestamps: true });

const Users = mongoose.model('Users', userSchema);

export {Users}