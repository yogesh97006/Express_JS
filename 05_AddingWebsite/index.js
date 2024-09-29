const express = require('express')
const path = require('path')
const app = express()

// console.log()

app.use(express.static(path.join(__dirname,"/public")))

app.get('/',(req,res)=>{
    res.send("Hello Its Working")
})

app.listen(8000,()=>{
    console.log("Its Working");
    
})