//  // create HTTP SERVER
//     // using http core module
// //    const http = require('http')
// //    const server = http.createServer()
// //    server.listen(3000,()=>{console.log("http server listening on port 3000")})
   // using express module
   const exp = require('express')
   const app = exp()
   //app.listen(3500,()=>{console.log('server listening on port no 3500')})


   //connect to MongoDB server
       //get MongoClient
       const mClient = require('mongodb').MongoClient
       //connect to DB
       mClient.connect('mongodb://localhost:27017/vnr')
       .then((client)=>{
        //get DB object
        const dbObj = client.db('vnr')
        //get collection object
        const productsCollectionObj = dbObj.collection('products')
        //share userCollectionObj
        app.set('productsCollectionObj',productsCollectionObj)
         console.log("DB connection is success")
         app.listen(3500,()=>{console.log("http server listening on port 3500")})
       })
       .catch(err=>{
         console.log("Error in DB connection",err)
       })

        

//    const userApi = require('./APIs/userApi')
    const productApi = require('./APIs/ProductApi')

//    //forward req to userApi , if path starts with /user-api
//    app.use('/user-api',userApi)

    //forward req to productApi , if path starts with /product-api
    app.use('/product-api',productApi)

   //error handling middleware
   app.use((err,req,res,next)=>{
    res.send({message:"error occurred",payload:err.message})
   })







// ASSSIGNNMENT - PRODUCTAPI

// const exp = require('express')
// const app = exp()
// app.listen(3500,()=>{console.log('server listening on port no 3500')})

// app.use(exp.json())


// let prodList = [
//   {
//     pid : 100,
//     pname : "mobile",
//     price: 10000
//   },
//   {
//     pid : 200,
//     pname : "Tv",
//     price: 30000
//   }

// ]

// //route to read all products
// app.get('/products',(req,res)=>{
//   res.send({message:"All products",payload:prodList})
// })

// //route to read product by product id
// app.get('/products/:pid',(req,res)=>{
//   let prodId = Number(req.params.pid)
//   let product = prodList.find((prodObj)=>prodObj.pid === prodId)
//   if (product === undefined){
//     res.send({message:"No product exist"})
//   }
//   else{
//     res.send({message:"Product with id is exist",payload:product})
//   }
// })

// //route to create a neww product 
// app.post('/product',(req,res)=>{
//   let newProd = req.body
//   prodList.push(newProd)
//   res.send({message:" new product created"})
// })

// //route to update product list
// app.put('/product',(req,res)=>{
//   let modifiedProd = req.body
//   let prodIndex = prodList.findIndex((prodObj)=>prodObj.pid === modifiedProd.pid)
//   if(prodIndex === -1){
//     res.send({message:"no product is updated"})

//   }else{
//     prodList.splice(prodIndex,1,modifiedProd)
//     res.send({message:"Products updated"})
//   }
// })

// //route to delete
// app.delete('/products/:pid',(req,res)=>{
//   let productId = Number(req.params.pid)
//   let prodIndex = prodList.findIndex((prodObj)=>prodObj.pid === productId)
//   if(prodIndex === -1){
//     res.send({message:"no product is deleted"})

//   }else{
//     prodList.splice(prodIndex,1)
//     res.send({message:"Products deleted"})
//   }
// })

//.........................................................................................................................................
//.........................................................................................................................................
//.........................................................................................................................................
//.........................................................................................................................................


//  ASSIGNMENT - MULTIPLE API
// // create mini-express app
//  const exp = require('express')
//  const productApp = exp.Router()

// // //user body parser middelware
//  productApp.use(exp.json())



// let prodList = [
//     {
//       pid : 100,
//       pname : "mobile",
//       price: 10000
//     },
//     {
//       pid : 200,
//       pname : "Tv",
//       price: 30000
//     }
  
//   ]

//   function middleware1(req,res,next){
//     console.log("middleware-1 executed")
//     next()
//   }

//   function middleware2(req,res,next){
//     console.log("middleware-2 executed")
//     next()
//   }

//   function middleware3(req,res,next){
//     console.log("middleware-3 executed")
//     next()
//   }

//   productApp.use(middleware1)
  
//   //route to read all products
//   productApp.get('/products',(req,res)=>{
//     res.send({message:"All products",payload:prodList})
//   })
  
//   //route to read product by product id
//   productApp.get('/products/:pid',(req,res)=>{
//     let prodId = Number(req.params.pid)
//     let product = prodList.find((prodObj)=>prodObj.pid === prodId)
//     if (product === undefined){
//       res.send({message:"No product exist"})
//     }
//     else{
//       res.send({message:"Product with id is exist",payload:product})
//     }
//   })
  
//   //route to create a neww product 
//   productApp.post('/product',middleware2,middleware3,(req,res)=>{
//     let newProd = req.body
//     prodList.push(newProd)
//     res.send({message:" new product created"})
//   })
  
//   //route to update product list
//   productApp.put('/product',(req,res)=>{
//     let modifiedProd = req.body
//     let prodIndex = prodList.findIndex((prodObj)=>prodObj.pid === modifiedProd.pid)
//     if(prodIndex === -1){
//       res.send({message:"no product is updated"})
  
//     }else{
//       prodList.splice(prodIndex,1,modifiedProd)
//       res.send({message:"Products updated"})
//     }
//   })
  
//   //route to delete
//   productApp.delete('/products/:pid',(req,res)=>{
//     let productId = Number(req.params.pid)
//     let prodIndex = prodList.findIndex((prodObj)=>prodObj.pid === productId)
//     if(prodIndex === -1){
//       res.send({message:"no product is deleted"})
  
//     }else{
//       prodList.splice(prodIndex,1)
//       res.send({message:"Products deleted"})
//     }
//   })

//   // export product App
// module.exports = productApp;