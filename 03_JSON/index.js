const express = require('express')
const app = express()

app.get("/",(req,res)=>{
     res.send("This is a Home Page")
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is a About Page</h1>')
})

app.get("/contact",(req,res)=>{
    res.send({
        Email:"MaheshDalle@dalle.com",
        phone:9999999999,
        userId:"Dalle_Mahesh420",
    })
})

app.listen(8000,()=>{
    console.log("This server is running on ocal host");
    
})