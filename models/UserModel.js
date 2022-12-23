import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    active: Boolean,
    prize: String
})

export const User = mongoose.model('User', userSchema)