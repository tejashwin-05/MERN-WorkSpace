
let ar=[10,40,29,7,89,56];

//filter(selection) method
  //get elements less than 50
  let result1=ar.filter(function(element){
    return element<50;
  })
  //get elemnts between 30 amd 70
  let result2=ar.filter(element=>element>30&&element<70)
    
  console.log(result1);
  console.log(result2);

  //manual logic for  filter method
  /*let newAr=[]
  function getElementsLessThan50(){
    for(let el of ar){
        if(el<50){
            newAr.push(el)
        }
    }
  }
  getElementsLessThan50()
  console.log(newAr)*/

  //map (modification)
  //increment each element by 5
  let result3=ar.map(element=>element+5)
  // increment by 5 for the elements less than 40 and 10 for the remaining
  let result4=ar.map(element=>{
    if(element<40){
        return element+5
    }
    else{
        return element+10
    }
  })
  console.log(result3)
  console.log(result4)

    //iterate
  for(let el of ar){
    console.log(el);
  }  

  for(let index=0;index<ar.length;i++){
    console.log(index);
    console.log(ar[index]);
  }

  ar.forEach((el,index)=>console.log(el,index))

  //find(search)
     //search for 40
     let result5=ar.find(element=>element===40)
     console.log(result5)

  //find index
      let result6=ar.findIndex(element=>element===40)
      console.log(result5)  

  //reduce(reduce array to a single value)
     //find sum of elements
     let ar2 = [1,5,8,9];
     let sum = ar2.reduce((accumulator,element)=>(accumulator + element))    
     console.log(sum);

     //find small element
     let small=ar2.reduce((acc,element)=>acc<element?acc:element)
     console.log(small)