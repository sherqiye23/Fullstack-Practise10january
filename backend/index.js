console.log("salam")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
dotenv.config()


mongoose.connect(process.env.Connection)
    .then(() => {
        console.log("Connected");
        app.listen(process.env.Port, () => console.log("listen 3737"))
    })
    .catch((err) => console.log("Failed: ", err))


const immigrationSchema = new mongoose.Schema({
    country: String,
    title: String,
    description: String,
    image: String
})

let immigrationModel = mongoose.model("immigration", immigrationSchema)

app.get("/", (req, res) => {
    res.send("Salamm")
})

app.get("/immigration", async (req, res) => {
    let immigrations = await immigrationModel.find()
    res.send(immigrations)
})

app.get("/immigration/:id", async (req, res) => {
    let { id } = req.params
    let immigration = await immigrationModel.findById(id)
    res.send(immigration)
})

app.post("/immigration", async (req, res) => {
    await immigrationModel(req.body).save()
    res.send(req.body)
})

app.delete("/immigration/:id", async (req, res) => {
    let { id } = req.params
    await immigrationModel.findByIdAndDelete(id)
    res.send({
        message: "Success delete"
    })
})

