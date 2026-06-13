
let numbers=[10,20,30,40]


//INSERTION
  //insert at start
  let l1=numbers.unshift(1,2,3,4,5)
  console.log(numbers)
  console.log(l1)
  //insert at end
  let l2=numbers.push(100)
  console.log(numbers)
  console.log(l2)
  //insert in between
  numbers.splice(2,0,111,222)
  console.log(numbers)

  //DELETION
    //START
    let rm1=numbers.shift()
    console.log(numbers)
    console.log(rm1)
    //END
    let rm2=numbers.pop()
    console.log(numbers)
    console.log(rm2)
    //BETWEEN
    let rm3=numbers.splice(2,1)
    console.log(numbers)
    console.log(rm3)

    //UPDATION
        numbers.splice(2,1,100)
        console.log(numbers)
    