// //sync programming
// console.log("first")

// //time consuming task(sync)
// //for(let index=0;index<20000000000;index++){}

// //time consuming tasks(async)
// // setTimeout(()=>{},timeout) ex: timeout 1000 represents 1 secs becoz 1000 is in milliseconds

// setTimeout(()=>{
//     console.log('hello')
// },5000);

// console.log("second")
// console.log("third")


//example related to restaurent in terms of syn and async

//waiter behaves synchronously
// console.log("Three customers went restaurent");

// console.log("cust-1 ordered biryani");
// for(let index = 0; index < 4000000000; index++){}
// console.log("cust-1 received biryani")

// console.log("cust-2 ordered soup");
// for(let index = 0; index < 2000000000; index++){}    
// console.log("cust-2 received soup");

// console.log("cust-3 ordered water bottle");
// for(let index = 0; index < 100000; index++){}
// console.log("cust-3 received water bottle");




//waiter behaves asynchronously
console.log("Three customers went restaurent");

console.log("cust-1 ordered biryani");
setTimeout(()=>{
    console.log("cust-1 received biryani")
},5000);


console.log("cust-2 ordered soup");
setTimeout(()=>{
    console.log("cust-2 received soup");
},3000);  


console.log("cust-3 ordered water bottle");
setTimeout(()=>{
    console.log("cust-3 received water bottle");
},1000); 
