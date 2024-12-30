//1.import express
const express = require('express')
require("./connection")
var empModel = require("./model/employee")
var cors=require('cors')
//2.initialize
const app = express()
app.use(express.json())
app.use(cors())
//3.api
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/trail", (req, res) => {
    res.send("This is a trial message")
})
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({message:"data added"})
        
    } catch (error) {
        console.log(error)
    }
})
app.get("/view", async (req, res) => {
    try {
        const data = await empModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        
    }
})
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted" })
        
    } catch (error) {
        console.log(error)
        
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:"data updated"})
        
    } catch (error) {
        console.log(error)
        
    }
})

//4.port setting
app.listen(3004, () => {
    console.log('server is running on port 3004')
})