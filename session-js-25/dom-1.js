//access elememts from the DOM
let heading=document.querySelectorAll('h1')
console.log(heading)

let heading2=document.querySelector('#heading2')
console.log(heading2)

let heading3 = document.querySelector('.heading3')

let btn = document.querySelector('button')

console.log(heading3)

//extract the content 
console.log(heading2.textContent)

//add event listener to element
btn.addEventListener('click',()=>{
    
    //adding dynamic styles
    heading2.style.color='blue';
    heading2.style.backgroundColor='orange';
    heading2.style.fontSize='4rem';

    //change content or add dynamic content
    heading2.textContent='web stack';

    //remove element
    heading2.remove();

    //create and add new element
    let para=document.createElement('p');
    para.setAttribute("class","para")
    para.textContent='this is a para....';

    document.body.appendChild(para)
})


