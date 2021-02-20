const notes=require("./notes.js")

//const ar=nots(2)
console.log(notes([2,3,'a']))
//console.log(nots(a))


//import module
const files=require('fs');
//import from file
const f1=require('./utils.js')

console.log(f1);
console.log(f1(1,3))

files.writeFile("q+b.xd","Que mas ve",(err)=>{
    console.log(err);
});

files.appendFile("q+b.xd","XDDD",(err)=>{
    console.log("Done");
})