const mongoose=require("mongoose");
const validator = require('validator')



//MODEL
const Task=mongoose.model("Tasks",{
    description:{
        type:String,
        required:true,
        trim:true

    },
    state:{
        type:Boolean,
        default:false
    }
})

module.exports=Task