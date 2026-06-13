//1.take a number array and find the sum of elements of it.
let ar = [10,20,30,40];
let sum=0;
for(let i=0;i<ar.length;i++){
    sum = sum + ar[i];

}

console.log("Sum of array elements is",sum);


// 2.Take a number array and print even numbers in it.
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i],"is a even number");
    }
}


// 3.Take a number array and print prime numbers in it
let array = [1,2,3,4,5,6,7,8,9,10];

for(let i=1;i<=array.length;i++){
    let count = 0;
   for(let j=1; i>j; j++){
        if(array[i] % j == 0){
            count++;
        }
   }
   if(count == 1){
    console.log(array[i]);
   }
    
}


