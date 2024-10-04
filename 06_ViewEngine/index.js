const express = require('express')
const app = express()

const viewsFile = __dirname+"/files"
// console.log(__dirname+'\\files')

app.set("view engine","hbs")
app.set("views",viewsFile)

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(8000,()=>{
    console.log("working............");
    
})
