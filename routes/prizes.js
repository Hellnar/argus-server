import express from "express"
import { Prize } from "../models/PrizeModel.js"
const prizesRouter = express.Router()

prizesRouter.get("/", async (req, res) => {
    const currentPrizes = await Prize.find({})
    res.json({prizes: currentPrizes})
})

export default prizesRouter