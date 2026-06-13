//create any three promises and consume them. Use setTimeout() to simulate
// 3 promises of 
// 1.Booking movie tickets
// 2.Ordering Snacks
// 3.Drop at home

//booking movie tickets
function bookTickets(){
    let booked = true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(booked === true){
                fulfilled("Confirmed booking ")
            }else{
                rejected("not confirmed")
            }
        },5000)
    })
}

//ordering Snacks
function orderSnack(){
    let order = true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(order === true){
                fulfilled("Snacks ordered")
            }else{
                rejected("snacks not ordered")
            }
        },3000)
    })
}

//drop at home
function dropAtHome(){
    let drop = true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(drop === true){
                fulfilled("Come lets go")
            }else{
                rejected("book a cab")
            }
        },1000)
    })
}

bookTickets()
.then((msg)=>{
    console.log(msg)
    return orderSnack()
})
.then((msg)=>{
    console.log(msg)
    return dropAtHome()
})
.then((msg)=>{
    console.log(msg)
    
})
.catch(err=>console.log(err))