import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import * as dotenv from 'dotenv'
import usersRouter from "./routes/users.js"
import prizesRouter from "./routes/prizes.js"

const app = express()
dotenv.config()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/api/users", usersRouter)
app.use("/api/prizes", prizesRouter)

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running`)
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.MONGO_DB, () => {
        console.log(`Connected to DB`)
    })
})