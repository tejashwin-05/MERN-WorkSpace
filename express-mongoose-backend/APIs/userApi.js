const exp = require('express')
const userApp = exp.Router()
const expressAsyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//add body parser middleware
userApp.use(exp.json())

 



//user api
userApp.get("/users",expressAsyncHandler(async (req,res)=>{
    // res.send({message:"User api is working"})
    //get users collections from users collection 
    let usersList = await UserModel.find()
    //send res
    res.send({message:"All users",payload:usersList})
}))

//create new user
userApp.post("/user",expressAsyncHandler(async(req,res)=>{
    //get new user object
    const newUser = req.body;
    //hash the password
    const hashedPassword = await bcrypt.hash(newUser.password,5)
    //replace the plain password with hashed password
    newUser.password = hashedPassword;
    //create document for new user
    const userDocument = new UserModel(newUser)
    // console.log(userDocument)
    // save to db
    let dbRes = await userDocument.save()
    console.log(dbRes)
    //send res
    res.send({message:"new User created"})
}))

//user login route
userApp.post("/login",expressAsyncHandler(async (req,res)=>{
    //get user login credentials
    const userCredObj = req.body
    //verify username
    let userInDB = await UserModel.findOne({username:userCredObj.username})
    console.log(userInDB)
    //if username not found
    if(userInDB === null){
        res.send({message:"Invalid username"})
    } 
    //if user existed,compare password
    else{
        //compare password
        let result = await bcrypt.compare(userCredObj.password,userInDB.password)
        //if password not matched
        if(result === false){
            res.send({message:"Invalid password"})
        }//if passwords are matched
        else{
            //create JWT token
            let signedToken = jwt.sign({message:userInDB.username},'abcdef',{expiresIn:'1d'})
            //send res
            res.send({message:"login success",token:signedToken,payload:userInDB})
        }
    }
}))

//update user
userApp.put('/user',expressAsyncHandler(async(req,res)=>{
    //get modified user from req
    const modifiedUser = req.body;
    //update
    // let updatedDoc = await UserModel.findOneAndUpdate(
    //     {name:modifiedUser.name},
    //     {$set:{...modifiedUser}},
    //     {returnOriginal:false}
    // );
    let updatedDoc = await UserModel.findByIdAndUpdate(
        modifiedUser._id,
        {$set:{...modifiedUser}},
        {returnOriginal:false}
    )
    console.log(updatedDoc)
    //send res
    res.send({message:"updated user",payload:updatedDoc})
}))

//delete user
userApp.delete('/user/:_id',expressAsyncHandler(async(req,res)=>{
    //get name from url
    //const nameOfUrl = req.params.name;
    const _id = req.params._id;
    //delete
    //let deletedUser = await UserModel.findOneAndDelete({name:nameOfUrl})
    let deletedUser = await UserModel.findByIdAndDelete(_id)
    //send res
    res.send({message:"user removed",payload:deletedUser})
}))

//export userApp
module.exports = userApp


//encryption(reversible)
//hashing(irreversible)