const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(" Welcome To My Website 😃")
})
app.get('/about',(req,res)=>{
    res.send(" Welcome To My About Page")
})


app.listen(8000,()=>{
    console.log(" The website is Running on http://localhost:8000.com")
})
