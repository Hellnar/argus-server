import express from "express"
import { User } from "../models/UserModel.js"
import { Prize } from "../models/PrizeModel.js"
const usersRouter = express.Router()

usersRouter.post("/", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec()
        res.json({data: user})
    } catch(err) {
        console.log(err)
    }
})

usersRouter.patch("/", async (req, res) => {
    try {
        await User.updateOne({ email: req.body.email }, { active: false, prize: req.body.prize })
    } catch(err) {
        console.log(err)
    }

    try {
        await Prize.updateOne({ id: "prizes" }, { $inc: { chocolate: req.body.chocolate, jewelry: req.body.jewelry }})
    } catch(err) {
        console.log(err)
    }

    res.json({staus: "ok"})
})

export default usersRouter