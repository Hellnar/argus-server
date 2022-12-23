import mongoose from "mongoose"

const Schema = mongoose.Schema

const prizeSchema = new Schema({
    id: String,
    chocolate: Number,
    jewelry: Number,
    infinite: [String]
})

export const Prize = mongoose.model('Prize', prizeSchema)