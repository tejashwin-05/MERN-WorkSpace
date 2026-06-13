//Create users ( first name,last name, email,date of birth) and display them in Table represenation below the form. Each user will become a table row.
let form = document.querySelector('form')
let inp1 = document.querySelector('#firstname')
let inp2 = document.querySelector('#lastname')
let inp3 = document.querySelector("#email")
let inp4 = document.querySelector('#dob')
let btn = document.querySelector('button')
let table = document.querySelector('table')
let body = document.querySelector('tbody')

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let firstname = inp1.value;
    let lastname = inp2.value;
    let email = inp3.value;
    let dob = inp4.value;
    
    let user = {
        firstname,
        lastname,
        email,
        dob
      };

      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.dob}</td>
      `;
      body.appendChild(tr);

      form.reset();
})