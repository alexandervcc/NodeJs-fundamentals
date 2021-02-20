const chalk=require('chalk');
const yargs=require('yargs');

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
        console.log("Adding a new Title: ",argv.title, 
        " whose body is: ",argv.body)

    }
});

yargs.command({
    command:'remove',
    describe:'Removing a XD',

    handler:function(){
        console.log("Removing a XD")
    }
});

yargs.command({
    command:'list',
    describe:'Listing a XD',
    handler:function(){
        console.log("Listing a XD")
    }
});

yargs.command({
    command:'read',
    describe:'Reading a XD',
    handler:function(){
        console.log("Reading a XD")
    }
});

//Goes to the process of pargins arguments
yargs.parse()
//console.log(yargs.argv)