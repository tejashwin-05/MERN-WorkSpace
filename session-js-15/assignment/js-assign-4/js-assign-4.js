// 1.find sum of elements of an array

let ar=[10,20,30,40,50];
let sum = ar.reduce((accumulator,element)=>(accumulator + element))    

console.log("Sum of arrays =",sum);


// 2.consider an array and create new array by adding to elements

let arr=[1,2,3,4];
// let result = arr.map((index,element)=>element + (index + 1) * 10)
let result=arr.map(element=>{
    if(element===1){
        return element+10
    }
    else if(element===2){
        return element+20
    }
    else if(element===3){
        return element+30
    }
    else if(element===4){
        return element +40
    }
  })

  console.log(result)

  // 3.array of strins
 

  
const student = [
    { name: "ravi", marks: { maths: 89, physics: 70, chemistry: 88 } },
    { name: "bhanu", marks: { maths: 98, physics: 50, chemistry: 68 } },
    { name: "kiran", marks: { maths: 50, physics: 82, chemistry: 94 } },
];

// Finding the highest marks in each subject
const highestMaths = Math.max(...students.map(student => student.marks.maths));
const highestPhysics = Math.max(...students.map(student => student.marks.physics));
const highestChemistry = Math.max(...students.map(student => student.marks.chemistry));

// Finding the student names who have the highest marks in each subject
const topMathsStudent = students.find(student => student.marks.maths === highestMaths).name;
const topPhysicsStudent = students.find(student => student.marks.physics === highestPhysics).name;
const topChemistryStudent = students.find(student => student.marks.chemistry === highestChemistry).name;

console.log(`Highest marks in Maths: ${topMathsStudent}`);
console.log(`Highest marks in Physics: ${topPhysicsStudent}`);
console.log(`Highest marks in Chemistry: ${topChemistryStudent}`);



let students = [

    { name: "ravi", marks: { maths: 89, physics: 70, chemistry: 88 } },
  
    { name: "bhanu", marks: { maths: 98, physics: 50, chemistry: 68 } },
  
    { name: "kiran", marks: { maths: 50, physics: 82, chemistry: 94 } },
  
  ]
  let highestMarks = {
    maths: { name: "", marks: 0 },
    physics: { name: "", marks: 0 },
    chemistry: { name: "", marks: 0 }
  }
  
  students.forEach(student => {
    if (student.marks.maths > highestMarks.maths.marks) {
      highestMarks.maths.marks = student.marks.maths;
      highestMarks.maths.name = student.name;
    }
    if (student.marks.physics > highestMarks.physics.marks) {
      highestMarks.physics.marks = student.marks.physics;
      highestMarks.physics.name = student.name;
    }
    if (student.marks.chemistry > highestMarks.chemistry.marks) {
      highestMarks.chemistry.marks = student.marks.chemistry;
      highestMarks.chemistry.name = student.name;
    }
  });
  console.log("names of students who got highest marks are:\nMaths is", highestMarks.maths.marks, "by", highestMarks.maths.name, "\nPhysics is", highestMarks.physics.marks, "by", highestMarks.physics.name, "\nChemistry is", highestMarks.chemistry.marks, "by", highestMarks.chemistry.name);
  
  
  