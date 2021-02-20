//imports
require("./db/mongoose")

const express=require("express")
const Task = require("./modules/task")
const chalk=require("chalk")
const app=express();
const userRouter =require("./Router/user")
const taskRouter = require("./Router/task")

const port=process.env.PORT || 3000;

//PARSE json for use
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)






app.listen(port,()=>{
    console.log(chalk.blue.inverse.bold("Server is on port: "+port))
});

//
