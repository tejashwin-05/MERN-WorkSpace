// create mini-exp app(it is a special route )
const exp = require('express')
const userApp = exp.Router()
const expressAsyncHandler = require('express-async-handler')

//user body parser middelware
userApp.use(exp.json())

 //sample users list(Replaced with DB in future)
//  let usersList=[
//     {id:100,name:"ravi",age:31},
//     {id:200,name:"manasa",age:21}
//    ]
   // create REST API(Routes)
   // a route is used to handle client request

        //route to handle get req
        userApp.get('/users',expressAsyncHandler(async (req,res)=>{
            //res.send({message:'users',payload:usersList})
            
            //get userCollectionObj
            const usersCollectionObj = req.app.get('usersCollectionObj')
            //read users from db
            let usersList = await usersCollectionObj.find().toArray()
            //send res
            res.send({message:"all users",payload:usersList})
            
        }))

        //route to handle get req to get a user by id
        userApp.get('/users/:name',async (req,res)=>{
            //read value of url parameter
            // let userId = Number(req.params.id); //{ id : 20 }
            // //find user with this userId
            // let user = usersList.find(userObj=>userObj.id===userId)
            // if(user === undefined){
            //     res.send({message:"A user is not found"})
            // }else{
            //     res.send({message: 'A user',payload: user})
            // }

            //get userCollectionObj
            const usersCollectionObj = req.app.get('usersCollectionObj')
            //get user by url
            let nameOfUrl = req.params.name;
            //get user by name
            let user = await usersCollectionObj.findOne({name:nameOfUrl})
            //if user not found
            if(user === null){
                res.send({message:"No user found"})
            }else{
                res.send({message:"user found",payload:user})
            }


        })
    
    //route to handle post req(create new user)
    userApp.post('/user',async (req,res)=>{
        // //read data send by the client in post request
        // let newUser = req.body
        // // console.log(newUser)
        // //add new user to usersList
        // usersList.push(newUser)
        // res.send({message:"A new user is created"})

        //get userCollectionObj
        const usersCollectionObj = req.app.get('usersCollectionObj')
        //get body of req
        let userFromClient = req.body;
        //insert
        let dbRes = await usersCollectionObj.insertOne(userFromClient)
        //console.log(dbRes)
        //send res
        res.send({message:"New user created"})
       
    })

    //route to handle put request(update user)
    userApp.put('/user',async (req,res)=>{
        //get modifiedUser from client
        // let modifiedUser = req.body;
        // //get index of user with id of modifiedUser
        // let userIndex = usersList.findIndex(userObj=>userObj.id === modifiedUser.id)
        // //if user not found
        // if(userIndex === -1){
        //     res.send({message:"User not found to update"})
        // }else{
        //     usersList.splice(userIndex,1,modifiedUser)
        //     res.send({message:"User modified"})
        // }

        //get userCollectionObj
        const usersCollectionObj = req.app.get('usersCollectionObj')
        //get modified user
        let modifiedUser = req.body;
        //update
        let dbRes = await usersCollectionObj.updateOne({name:modifiedUser.name},{$set:{...modifiedUser}})

        if(dbRes.modifiedCount === 1){
            res.send({message:"User modified"})
        }else{
            res.send({message:"No modification"})
        }
    })

    //route to handle delete request(delete user by id)
    userApp.delete('/users/:name',async (req,res)=>{
        // let userId = Number(req.params.id)
        // //get index of user with id of modifiedUser
        // let userIndex = usersList.findIndex(userObj=>userObj.id === userId)
        // //if user not found
        // if(userIndex === -1){
        //     res.send({message:"User not found to delete"})
        // }else{
        //     usersList.splice(userIndex,1)
        //     res.send({message:"User deleted"})
        // }  

        //get userCollectionObj
        const usersCollectionObj = req.app.get('usersCollectionObj')
        //get name from url
        let nameOfUrl = req.params.name;
        //delete
        let dbRes = await usersCollectionObj.deleteOne({name:nameOfUrl})
        //send res
        res.send({meaasge:"user removed"})
    })


    //export userApp
    module.exports = userApp