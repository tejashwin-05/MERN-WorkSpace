// // create mini-express app
 const exp = require('express')
 const productApp = exp.Router()

// //user body parser middelware
 productApp.use(exp.json())


  
  //route to read all products
  productApp.get('/products',async (req,res)=>{
    const productsCollectionObj = req.app.get('productsCollectionObj')
    let prodList = await productsCollectionObj.find().toArray()
    res.send({message:"all products",payload:prodList})
  })
  
  //route to read product by product id
  productApp.get('/products/:pname',async (req,res)=>{
    const productsCollectionObj = req.app.get('productsCollectionObj')
    let nameOfUrl = req.params.pname
    let product = await productsCollectionObj.findOne({pname:nameOfUrl})
    if(product === null){
      res.send({message:"No products found"})
    }else{
      res.send({message:"product found",payload:product})
    }
  })
  
  //route to create a neww product 
  productApp.post('/product',async (req,res)=>{
    const productsCollectionObj = req.app.get('productsCollectionObj')
    let newProd = req.body
    let dbRes = await productsCollectionObj.insertOne(newProd)
    res.send({message:" new product created"})
  })
  
  //route to update product list
  productApp.put('/product',async (req,res)=>{
    const productsCollectionObj = req.app.get('productsCollectionObj')
    let modifiedProd = req.body
    let dbRes = await productsCollectionObj.updateOne({name:modifiedProd.pname},{$set:{...modifiedProd}})

    if(dbRes.modifiedCount === 1){
      res.send({message:"Product modified"})
    }else{
      res.send({message:"NO modification"})
    }
  })
  
  //route to delete
  productApp.delete('/products/:pname', async (req,res)=>{
    const productsCollectionObj = req.app.get('productsCollectionObj')
    let nameOfUrl = req.params.pname;
    let dbRes = await productsCollectionObj.deleteOne({name:nameOfUrl})
    res.send({message:"user removed"})
  })

  // export product App
module.exports = productApp;