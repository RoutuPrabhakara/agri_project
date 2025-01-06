const express = require('express')

const dotenv = require('dotenv')
const cors =require('cors')
// const mango = require('mongoose')

const app =express()
app.use(cors())
dotenv.config()
// mango.connect()

app.get('/home',(req,res)=>{
    res.send('Hello Prabhakara')
})
const PORT = 5000

app.listen(PORT,()=>{
    console.log("app js running")
})