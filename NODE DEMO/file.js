//import fs module
const fs=require('fs')
const fsPromise = require('fs/promises')

//reading data of file
  //callback (callback hell)
  function getFileData1(){
    fs.readFile('./sample1.txt',(err,data)=>{
        if(err){
            console.log("err in reading file",err);
        }else{
            console.log("data is ",data.toString())
        }
    })
  }

  getFileData1()
  //promises

  function getFileData2(){
    fsPromise.readFile('./sample.txt')
    .then(data=>console.log(data.toString()))
    .catch(err=>console.log("err is ",err))
  }

  getFileData2()


  //async & await
  async function getFileData3() {
    let data=await fsPromise.readFile('./sample.txt')
    console.log("data is ",data.toString())
    
  }

  getFileData3()


  //write data to file
  async function writeDataToFile() {
    await fsPromise.writeFile('./sample.txt','Good bye to all')
    console.log("writing to file is completed")
  }

  //writeDataToFile()

  async function appendDataToFile() {
    await fsPromise.appendFile('./sample.txt','Good bye to all')
    console.log("writing to file is completed")
  }

  appendDataToFile()