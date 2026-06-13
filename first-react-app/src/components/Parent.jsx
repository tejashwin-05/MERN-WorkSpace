import React from 'react'
import Child from './Child';
import {useState} from 'react';

function Parent() {

    let a=100;
    let b= 20;
    let [counter,setCounter]=useState(1)
    let [childData,setChildData]=useState(0)

    //parameter function
    function getDataFromChild(x){
      setChildData(x);
      console.log(x);
    }

  return (
    <div className='bg-warning p-5'>
        <h2>Parent</h2>
        <h2>{counter}</h2>
        <h2>Data from child {childData}</h2>
        {/* nest Child */}
        <Child a={a} b={b} counter={counter} setCounter={setCounter} getDataFromChild={getDataFromChild} />
    </div>
  )
}

export default Parent;

