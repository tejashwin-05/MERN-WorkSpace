//{
 //   key:value,
   // key:value,
//}


//object is an unordered collection of properties
let student={
    rollNo:100,
    name:'ravi',
    age:21,
    city:'hyd',
    mobile:999999
}

console.log(student.rollNo)
console.log(student.name)
console.log(student.age)
console.log(student.city)
console.log(student['age'])
console.log(typeof student)
console.log(student.course)
//for-in loop
//for(let v in student){    gives key
 //   console.log(v)
//}

for(let key in student){
    console.log(student[key])
}