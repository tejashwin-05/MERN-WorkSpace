// person (Super class or parent class or base class)
class Person{
    name;
    adress;
    age;
    moble;
    constructor(name,adress,age,moble){
        this.name = name;
        this.adress = adress;
        this.age = age;
        this.moble =moble

    }
}

//student is a person
class Student extends Person{
    course;
    fees;
    constructor(name,adress,age,moble,course,fees){
        super(name,adress,age,moble)
        this.course = course;
        this.fees = fees;

    }
}


let std = new Student('ravi',{city:'hyd'},21,232323,'MBA',10000)
console.log(std)

//emp is a person
class Emp extends Person{
    salary;
    company;
}

//manager is a person
class Manager extends Person{
    project;
}

