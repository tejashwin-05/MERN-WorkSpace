//1. Create Employee class and add properties name,age,basic and add getSalary method to its prototype. Create % Employee objects and print their salaries.
class Employee{
    name;
    age;
    basic;

    constructor(name,age,basic){
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
    getSalary(){
        return this.basic;
    }
}

let emp1 = new Employee("tej",18,10000);
let emp2 = new Employee("ashwin",19,12000);
let emp3 = new Employee("mahesh",20,114000);
let emp4 = new Employee("babu",21,20000);
let emp5 = new Employee("kumar",22,30000);
console.log('emp1 salary :',emp1.getSalary());
console.log('emp2 salary :',emp2.getSalary());
console.log('emp3 salary :',emp3.getSalary());
console.log('emp4 salary :',emp4.getSalary());
console.log('emp5 salary :',emp5.getSalary());


//2.Create product class and add properties brand,price,model and add getDiscountPrice method to its prototype.Create 5 Product objects and print heir discount prices
class Product{
    brand;
    price;
    model;

    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }

    getDiscountPrice(d){
        return this.price*(1-(d/100));
    }
}

let p1 = new Product('sony',30000,'laptop');
let p2 = new Product('apple',40000,'mobile');
let p3 = new Product('samsung',50000,'tablet');
let p4 = new Product('boat',60000,'earphones');
let p5 = new Product('noise',70000,'smart watch');

console.log("Product 1 discount price:",p1.getDiscountPrice(10));
console.log("Product 2 discount price:",p2.getDiscountPrice(20));
console.log("Product 3 discount price:",p3.getDiscountPrice(30));
console.log("Product 4 discount price:",p4.getDiscountPrice(40));
console.log("Product 5 discount price:",p5.getDiscountPrice(50));