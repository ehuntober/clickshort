const express = require('express')
const shortid = require('shortid')
const createHttpError = require('http-errors')


const app = express()


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})