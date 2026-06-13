import React from 'react'

function Eventdemo() {

    //parameterless
    function handleClick(){
        console.log("function called")
    }

    //parameterized
    function handleClickAgain(a){
        console.log("another event cooured and a is ",a)
    }
  return (
    <div>
        <h1>Event Demo</h1>
        <div className="btn btn-success mb-5" onClick={handleClick}>Click-1</div>

        <div className="button btn btn-warning mt-5" onClick={()=>handleClickAgain(10)}>Click-2</div>

    </div>
  )
}

export default Eventdemo;