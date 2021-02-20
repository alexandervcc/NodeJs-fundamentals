//Imports
const fs = require('fs')
const { string } = require('yargs')

//Object
const book={
    title:'El tunel',
    author:"Ernesto Sabato",
    age: 63
}

//Method, takes a Object -> JSON representation
const bookjson= JSON.stringify(book)
console.log(bookjson)

//Creating JSON file

fs.writeFile("book2.json",bookjson,(err)=>{
    if(err==null){
        console.log("Created")
    }else{
        console.log("Error")
    }
})

//Method, takes JSON -> Object
const bookparse=JSON.parse(bookjson)
console.log(bookparse,bookparse.title)

//Reading JSON File
//Reading as a binary data
const buffer=fs.readFileSync('book.json');
//Getting binary as toString
const dataJson=buffer.toString();
//Converting string to Object
const data=JSON.parse(dataJson)

console.log(buffer);
console.log(buffer.toString());

