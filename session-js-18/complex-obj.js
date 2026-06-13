 let emp={
    empid:100,
    firstName:'ravi',
    lastName:'kumar',
    age:30,
    isWorking:true,
    skills:["css","js","angular","reactja"],
    address:{
        street:"KPHB",
        city:"hyderabad",
        pincode:500055,
        countryName:"India",
    },
    //method
    getFullName:function(){
        return this.firstName + this.lastName;
    },
 };

 console.log(emp.empid);
 console.log(emp.age); 
 console.log(emp.address.city);
 console.log(emp.getFullName());