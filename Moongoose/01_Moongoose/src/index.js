const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const { type } = require('os');

mongoose.connect("mongodb://localhost:27017/socialmedia")
.then(()=>{console.log("Connected Successfully")})
.catch((err)=>{console.log(err);
})


//+ schema

const User = new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    UserType:"string",
    PhoneNum:Number,
    Date:{
        type:Date,
        default:Date.now
    }
})


const Users = new mongoose.model("Users",User)

const CreateUser = async () =>{
    try{const User1 = new Users({
         name:"Mahesh Dalle",
         UserType:"User",
         PhoneNum:123456789,
    })

   const result = await User1.save()
   console.log(result);
   }catch(err){
    console.log(err);
   }
}

CreateUser()
