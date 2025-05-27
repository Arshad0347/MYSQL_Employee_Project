const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'emss'
})
connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("connection established");
    }
})
module.exports=connection