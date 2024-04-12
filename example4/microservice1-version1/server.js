require('dotenv').config()
const express = require('express')
const app = express()


const PORT = process.env.PORT


app.get('/client',(req,res)=>{
    res.json({'username':'John Doe','birthday':'07-12-1999'})
})

app.listen(5001,()=>{
    console.log(`Listening on port : 5001`)
})


