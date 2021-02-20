//Non-blocking: do toher things, while wait

console.log('Startin ')

//After a time it executes the handling through callbackcs
setTimeout(()=>{
    console.log('Printing After 2s')
},2000);

setTimeout(()=>{
    console.log('Printing After 0.1s')
},00);

console.log('Ending')


/*Callstac: data structure
    To track execution of the program
    Track of functions currently running

*/