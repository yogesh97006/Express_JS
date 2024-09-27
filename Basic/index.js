const express = require('express')

const app = express()
const port = 8000

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get('/About',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.listen(port,()=>{
    console.log(`server is running on port no :${port} `);
    
})