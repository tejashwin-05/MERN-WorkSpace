// 1.Create student,bus,employee and mobile objects with all possible properties
let student={
    name:"tejashwin",
    rollNo:77,
    age:18,
    gender:'male',
    address:{
        hNo:'6-555/3',
        roadNo:1,
        street:'Dwaraka nagar',
        city:'hyderabad'
    },
    email:"tejashwinbadugu@gmail.com",
    course_name:'CSE-AIML',
    section:'B',
    college_name:'VNR VJIET',
    college_address:'Bachupally'

}

let bus={
    routeNo:219,
    route:'secunderabad to patancheru',
    distance:'30 KM',
    plateNumber:'AP 28 TZ 3121',
    driverName:'ramu',
    driverNumber:999999999,
    capacity: '30 - 40',
    company:'RTC'



}

let employee={
    employeeId:101,
    name:'ravi',
    age:30,
    gender:'male',
    address:{
        hNo:'6-555/3',
        roadNo:1,
        street:'Dwaraka nagar',
        city:'hyderabad'
    },
    email:'test2234nvnv@gmail.com',
    phNo:3453456653,
    deptId:33,
    jobTitle:'Manager',
    salary:250000,
    companyName:'mahindra'
}

let mobile={
    brand:'vivo',
    model:'vivo 1920',
    imeiNumber:23432343234332,
    operatinSystem:'android',
    storageCapacity:'128GB',
    ram:'8GB',
    batteryCapacity:'4500mAh',
    screenSize:'11.2 cm',
    cameraPixel:'48 MP',
    price: 21000
}


console.log(student);
console.log(bus);
console.log(employee);
console.log(mobile);



//2.Create Student object with properties roll number,name,marks(array),address and method to compute aggregate of marks
let studentobj={
    rollNumber:77,
    name:'tejashwin',
    marks:[88,77,99],
    address:{
        hNo:'6-555/3',
        roadNo:1,
        street:'Dwaraka nagar',
        city:'hyderabad'
    },
    //method to calculate aggregate of marks
    average:function(){
        let sum = this.marks.reduce((acc,mark)=>(acc + mark));
        return sum/this.marks.length;
    }

}

console.log(studentobj);
console.log("Aggregate of marks:",studentobj.average());



//3.create product object with properties product number,product name,model,price and a method to return discount price by receiving the discount percentage as argument.
let product={
    productNumber:101,
    productName:'laptop',
    model:'aspire',
    price:40000,
    discount:function(d){
        return this.price*(1-((d/100)));
    }
}

console.log(product);
console.log('discount price:',product.discount(10));



