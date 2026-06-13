//normal params
function findSum1(a,b){
    let sum = a+b;
    return sum;
}

console.log(findSum1());
//default value params
function findSum2(a=0,b=0){
    let sum = a+b;
    return sum;
}

console.log(findSum2(10,20));

//rest params
function findSum3(...a){
    return a.reduce((acc,element)=>acc+element)
}

console.log(findSum3(10,20,30,40,50,60))