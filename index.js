require('dotenv').config() // both are same
// import 'dotenv/config'

const express = require('express')
// import express from "express"  // both are same
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('hiteshdotcom')
})
app.get('/login' , (req,res) => {
    res.send('<h1>please login here</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})