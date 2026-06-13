// you meet frnd in 10 min
function meetFrnd(){
   let availability = true;
   return new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(availability===true){
            fulfilled("Hi frnd...")
        }else{
            rejected("could not meet frnd")
        }

    },5000)
   })
   
}
// order food after meet
function orderFood(){
    let foodAvailableStatus = true;
   return new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(foodAvailableStatus===false){
            fulfilled("Order food")
        }else{
            rejected("Eat the available food")
        }

    },5000)
   })
    
}





//consuming these two promises
meetFrnd()
.then((msg)=>{
    console.log(msg)
    return orderFood()
})
.then((msg)=>{
    console.log(msg)
    console.log(msg)
})
.catch(err=>console.log(err))
