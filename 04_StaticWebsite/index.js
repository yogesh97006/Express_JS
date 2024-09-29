const express = require('express')
const path = require('path')
const app = express()

const PageLink = path.join(__dirname,"/public")
// console.log(__dirname,"/index.html")

app.use(express.static(PageLink))

app.get("/",(req,res)=>{
    res.send("lets see")
})

app.listen(8000,()=>{
    console.log("working");
    
})

