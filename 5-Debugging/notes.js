const fs=require('fs');
const chalk=require('chalk');
const { debug } = require('console');

const getNotes=function(){
    const notes=loadNotes();
    notes.forEach(element => {
        console.log(element.title)
    });
//    console.log(notes);
}

const addNote=function(partitle,parbody){
    const notes=loadNotes();

    const dup=notes.filter((note)=>{
        return note.title===partitle
    })

    //Stop app at this time
    debugger
    //execute witj:
    //  node inspect crud.js ---

    if(dup.length===0){
        notes.push({
            title:partitle,
            body:parbody
        })
        saveNotes(notes)
    }else{
        console.log("Title already Created")
    }
}

const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
    console.log(chalk.bold.blue("Updated"))
    console.log(notes)
}

const loadNotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json')
        const datajson=databuffer.toString()
        return JSON.parse(datajson)
    }catch(e){
        return []
    }
}

const removeNote=(partitle)=>{
    const notes=loadNotes()

    const dup=notes.filter((note)=>{
        return note.title!==partitle
    })

    if(notes.length>dup.length){
        console.log(chalk.green.inverse("Removed"))
        saveNotes(dup)
    }else{
        console.log(chalk.red.inverse.bold("not found"))
    }
}

const findNote=(partitle)=>{
    const notes=loadNotes()

    const dup=notes.find((note)=>{
        if(note.title===partitle){
         //   console.log(note)
            return note
        }
    })
    if(dup==null){
        console.log(chalk.red.inverse.bold('Not found'))
    }else{
        console.log(dup)
    }
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    getNotes:getNotes,
    findNote:findNote
};