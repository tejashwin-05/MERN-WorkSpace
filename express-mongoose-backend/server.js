// create express app
const exp = require('express')
const app = exp();
const userApp = require('./APIs/userApi')

const mongoose = require('mongoose')

//connect to DB
mongoose.connect('mongodb://localhost:27017/vnrmongoose')
.then(()=>{
    app.listen(6000,()=>{console.log("server listening on 6000..")})
    console.log("DB connection successful")
})
.catch(err=>{
    console.log("error in db connection",err)
})

//if path starts with user-api then send req to userApp
app.use('/user-api',userApp)

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occurred",payload:err.message})

})