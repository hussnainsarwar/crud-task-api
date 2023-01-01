const express= require('express');//look for express in node module and load it
const app=express();

const mongoose=require('./database/mongoose');


// app.listen(3000, function(){
// console.log("server started at port 3000");
// });   //check express js was sucessfully installed

app.listen(3000, ()=>{
    console.log("server started at port 3000");
});//check express js was sucessfully installed