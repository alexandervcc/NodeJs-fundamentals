const chalk=require('chalk');
const { argv } = require('yargs');
const yargs=require('yargs');
const notes=require('./notes');

//Customize yargs version
yargs.version('1.1.1');


yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Title Inserted",  //Description
            demandOption:true,          //Required
            type:'string'               //Primitive Data Type
        },
        body:{
            describe:"Body Description",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
});

yargs.command({
    command:'remove',
    describe:'Removing a XD',
    builder:{
        title:{
            describe:"Title to be Deleted", 
            demandOption:true,          
            type:'string'               
        }
    },
    handler:function(){
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command:'list',
    describe:'Listing a XD',
    handler:function(){
        notes.getNotes()
    }
});

yargs.command({
    command:'read',
    describe:'Reading a XD',
    builder:{
        title:{
            describre:"Read a title",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        notes.findNote(argv.title)
    }
});

//Goes to the process of pargins arguments
yargs.parse()
//console.log(yargs.argv)