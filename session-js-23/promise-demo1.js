//creater of promise
function createPromise(){
    let futureCondition=true;
    //create and return a promise object
    return new Promise((fulfilled,rejected)=>{   //first parameter fuulfilled second parameter rejected
        if(futureCondition===true){
            fulfilled('promise is fulfilled')
        }else{
            rejected('promise is rejected')
        }
    }) 
}


//consumer of promise
createPromise()
.then((msg)=>{console.log(msg)})
.catch((err)=>{console.log(err)})

// console.log(createPromise())

//every promise has two stages
// 1. pending
// 2. follfilled or rejected (settled)
