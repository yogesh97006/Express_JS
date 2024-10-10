const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://localhost:27017/Cources").then(()=>{
    console.log("Connected to Database Successfully ................"); 
}).catch((err)=>{
      console.log("There Is an Error While Connecting To The DataBase");
})


const Cources = new mongoose.Schema({
    name:{
        type:String,
        uniqe:true,
        lowercase:true,
        trim:true,},
    videos:{
        type:Number,
        // validate(v){
        //     if(v<0){
        //         throw new Error ("There Can Not be Negative Values")
        //     }
        // }
        // validate:{
        //     validator:function(v){
        //         return v.length<0
        //     },
        //     message:"There Can Not be a Nagative Value"
        // }
    },
    available:{
        type:Boolean,
        lowercase:true,
        enum:[true,false]
    },
    email:{
        type:String,
        validate(Value){
           if(!validator.isEmail(Value)){
                throw new Error ("please Enter A Right Email")
           }
        }
    }
})


const Courc = new mongoose.model('Courc',Cources)

const AllCources = async () =>{
    // let JS = new Courc({
    //    name:"JavaScript",
    //    videos:100,
    //    available:true
    // })

    // let NextJs = new Courc({
    //     name:"Next JS",
    //     videos:50,
    //     available:false
    // })

    // let NodeJs = new Courc({
    //     name:"Node JS",
    //     videos:80,
    //     available:true
    // })

    
    // let Express = new Courc({
    //     name:"Express JS",
    //     videos:15,
    //     available:true
    // })
    
    // let TS = new Courc({
    //     name:"TypeScript",
    //     videos:40,
    //     available:false
    // })
    let FullStack = new Courc({
        name:"  Full    Stack !...................          ",
        videos:-200,
        available:1,
        email:"Mahesh@gmail.com"
    })
    let AllCourcesDeatils = await Courc.insertMany([FullStack])
    console.log(AllCourcesDeatils)
     return AllCourcesDeatils

}


AllCources()


const FindCources = async () =>{
    try{
        const Value = await Courc.find().sort({name:-1})  //1 for acending //-1 for decending
        // const Value = await Courc.find({$and:[{name:"JavaScript"},{videos:{$gt:50}}]})
        // const Value = await Courc.find({name:"JavaScript"}).select({name:1}).limit(2)
        console.log(Value)
        return Value
    }catch(err){
        console.log('its fail')
    }
}


// FindCources()

const updateDocument = async (_id) =>{
    try{
        const value = await Courc.findByIdAndUpdate({_id},{$set:{available:true}},{
            new:true
        })
        console.log(value)
        return value
    }catch(err){
        console.log("error 404")
    }
}

// updateDocument("6703c8998f3832841836bcae")

const DeleteDocument = async (_id) =>{
    try{
        // const value = await Courc.deleteOne({_id})
        const value = await Courc.findByIdAndDelete({_id})
        console.log(value)
    }catch(err){
        console.log(err);
    }
}

// DeleteDocument("6706130b82e3fcd5606ca34b")




