// 1. Arithmetic operations

let n1 = 10;
let n2 = 5;

//Addition (+)
let sum;
sum = n1 + n2;  // sum is 15
console.log("sum is",sum);

//Subtraction (-)
let difference;
difference = n1 - n2;   // difference is 5
console.log("difference is",difference);

//Multiplication (*)
let product;
product = n1 * n2;    // product is 50
console.log("product is",product);

//Division
let div;
div = n1 / n2;    // Quotient is 2
console.log("Quotient is",div);

//Remainder (%)
let rem;
rem = n1 % n2;    // Remainder is 0
console.log("Remainder is",rem);

//exponent
let exp;
exp = n1 ** n2;      // exponent is 100000
console.log("Exponent is",exp);


// 2. Test unary increment and decrement operators

// Unary increment (a++ or ++a)

let a = 5;
let b = ++a;    // incremented by 1 b = 6
console.log(b);

let c = 5;
let d = c++;   // incremented by 1 but assigns value of c hence d = 5
console.log(d);

// Unary Decrement

let e = 5;
let f = e--;   // decremented by 1 but assign value of e hence f = 5
console.log(f);

let g = 5;
let h = --g;   // decremented by 1 h = 4
console.log(h);


// 3. program to verify comparision operators

let x = 5;
let y = '5';
// equal to (==)
console.log(x == y)  //returns true

// not equal to (!=)
console.log(x != y);  // returns false

// greater than
console.log(x > y);   // returns false

// greater than or equal to 
console.log(x >= y);   //returns true

//less than
console.log(x < y);   // returns false

//less than or equal to
console.log(x <= y);  // returns true



// 4. program to find difference between == and === operator

let u = 10;
let v = '10';

// == operator
console.log(u == v);  //returns true

// === operator
console.log(u === v);  //returns false

//Here the equal to operator (==) checks only the value without considering the data type
//While the strict equal to operator (===) check the value along with the data type



