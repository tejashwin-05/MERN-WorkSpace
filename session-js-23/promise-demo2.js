// you promise to friend that you call him in 10 minutes

console.log("you decided to call your friend in 5 sec")

//Promise made by you
function callTofrnd(){
    let yourAvailabilityAfterAnHour = true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(yourAvailabilityAfterAnHour===true){
                fulfilled('hello frnd....how are you?')
            }else{
                rejected('could not call')
            }

        },5000)
        
    })
}


//your promise consumed by friend
callTofrnd()
.then(msg=>console.log(msg))
.catch(err=>console.log(err))


console.log("first")