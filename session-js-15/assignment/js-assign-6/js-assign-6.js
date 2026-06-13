// 1. Consider the following string
// aaaabbababababbbbabababaaaa
// Find frequency of "a" and "b".
// Note- Frequency means, the no of times that specific character has appeared.

str = "aaaabbababababbbbabababaaaa";

len = str.length
countA = 0;
countB = 0;
for(let i=0;i<=len;i++){
    if(str[i]=='a'){
        countA++;
    }
    else{
        countB++;
    }
}

console.log("Frequency of a :",countA);
console.log("Frequency of b :",countB);




// 2. Write a function to receive a string of multiple words as argument and then print the no of words in that string.
// Example:
//     Input : how are you all
//     Output: 4

function countString(txt){
    count = txt.split(' ');
    console.log('Number of words:',count.length);
}

countString("how are you all")