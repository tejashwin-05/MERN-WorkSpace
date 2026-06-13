//read elements of form
let form=document.querySelector('form');
let inp1=document.querySelector("#username")
let inp2=document.querySelector('#dob')
let btn =document.querySelector('button')
let parent=documrnt.querySelector('.parent')


//add event listener
form.addEventListener('submit',(event)=>{
    //stop reloading page
    event.preventDefault();

    //read values from inputs
    let username=inp1.value;
    let dob=inp2.value;
    //console.log({username,dob});

    //create elements
    // let h2=document.createElement('h2');
    // h2.textContent=username;
    // document.body.appendChild(h2)

    // let h3=document.createElement('h2');
    // h3.textContent=dob;
    // document.body.appendChild(h3)
    
    parent.innerHTML+=`<h1>${username}</h1><h1>${dob}</h1>`

})