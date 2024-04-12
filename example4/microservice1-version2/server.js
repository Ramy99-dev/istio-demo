
const express = require('express')
const axios = require('axios')
const app = express()



const PORT = process.env.PORT


app.get('/client',async(req,res)=>{
    let date ;
    try {
        const response = await axios.get('http://time-microservice2-svc:5002/date/currentDate');
        date = response.data;
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error communicating with app2');
    }

    res.json({'username':'John Doe','birthday':'07-12-1999','currentDate':date})
})

app.listen(5001,()=>{
    console.log(`Listening on port : 5001`)
})

