import x from '../module-1/file-1.js';

// 1.find the names(array of names) of employees of Hyderabad
let hyderabadiPeople = x.filter(element => element.address.city === 'hyderabad').map(element => element.name)
console.log("Names in hyderabad :",hyderabadiPeople);


//2.Find the name and address of employees whose age is between 40 and 50.
let emp = x.filter(element => element.age >= 40 && element.age <= 50).map(element =>({name: element.name,address: element.address}));
console.log("Employess between 40 and 50 age :",emp);


//3.find the employees who are not from Hyderabad
let notHyderabadi = x.filter(element => element.address.city !== 'hyderabad');
console.log("employees not from hyderabad :",notHyderabadi);

//4.Find the names (array of names) of employees whose skill is 'react.js'
let names = x.filter(element => element.skills.includes('reactjs')).map(element => element.name);
console.log("Names of employees with reactjs skill :",names);