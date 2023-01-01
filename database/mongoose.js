//contains all the logic/configuration needed to connect to database
const mongoose=require('mongoose');

mongoose.Promise=global.Promise; //promise to any async operations 
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb',{useNewUrlParser:true})//connect to database copy this from mongo cmd in comand prompt by changing directory to mongo 
//here taskmanagerdb is collection
     .then( 
          ()=>{ console.log('Connected')
          
        }
          )
     .catch(
           (error)=>{ console.log('error in connection')}
           );

module.exports=mongoose;
//npm install nodemon --save-dev(it automatically save the changes)


