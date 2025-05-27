const express= require('express');
const app = express();
const connection = require('./structure/employee');
const port = 4000;
app.use(express.json());

//Add Employee to the company;

app.post ('/add-employee',(req,res)=>{
    const employee={
        name:req.body.name,
        salary:req.body.salary,
        city:req.body.city,
        email:req.body.email
    }
    // console.log(employee);
    const sql="INSERT INTO `management` SET ?";
    connection.query(sql,employee,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.status(200).send("Employee Added Successfully ");

        }
    })
})


app.listen(port, () => {
    console.log(`Employee Management System listening on port ${port}`)
})