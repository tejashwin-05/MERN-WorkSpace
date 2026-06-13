//1.Create a promise which can be either fulfilled or rejected after 5 secs.
function callback(){
    let available = true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(available === true){
                fulfilled('hello....')
            }else{
                rejected('busy')
            }
        },5000)
    })
}


callback()
.then(msg=>console.log(msg))
.catch(err=>console.log(err))