const mongoose=require("mongoose");
const validator = require('validator')

//MODEL
const User=mongoose.model("User",{
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Age must be positive ")
            }
        }
    },
    email:{
        type:String,
//        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }

    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(validator.contains(value.toLowerCase(),"password")){
                throw new Error("Invalid Password Content")
            }
        }
    }
});

module.exports=User