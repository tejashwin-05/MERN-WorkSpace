//1. program to find big number of given two numbers
let a = 4;
let b = 6;
 
if(a >= b){
    console.log(a,'is greater than',b);
}
else{
    console.log(b,'is greater than',a);
}


//2. program to find big one in given three numbers
let x = 1;
let y = 2;
let z = 3;

if(x >= y || x >= z){
    console.log(x,"is largest number");
}
else if(y >= z){
    console.log(y,"is largest number");
}
else{
    console.log(z,"is largest number");
}


//3.write a function to find factors of a given number
let f = 6;
function factors(f){
    for(let i=1;i<=f;i++){
        if(6 % i == 0){
            console.log("Factor of",f,"is",i);
        }
    }
}

factors(f);


//4.write a function to check given number is prime or not
let n = 6;
let count = 0;
function prime(n){
    for(let i=1;i<=n;i++){
        if(n % i == 0){
            count++;
        }   
    }
    if(count==2){
        console.log(n,"is a prime number");
    }
    else{
        console.log(n,"is not a prime number");
    }
}

prime(n);


//5.write a function to print even factors of given number
let k = 18;

function evenFactors(k){
    for(let i=1;i<=k;i++){
        if(k % i == 0){
            if(i % 2 == 0){
                console.log(i,"is a even factor of",k);
            }
        }
    }
}

evenFactors(k);


//6.write a functionn to receive a number as arg and return sum  of its digits
let l = 1234;
let sum = 0;

function sumOfDigits(l){
    while(l != 0){
        let m = l % 10;
        sum = sum + m;
        l = parseInt(l / 10);
    }
    console.log("sum of the digits is",sum);
}

sumOfDigits(l);