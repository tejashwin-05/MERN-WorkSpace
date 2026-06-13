import React from 'react'
import { useState } from 'react'

function ArrayState() {
   // 1. Take an array of numbers state and perform the following operations on it
        //  a. Add new number at either end
        // b. Delete element at specific index

        let [numbers,setNumbers]=useState([10,20,30,40])
        function handleNewStartChange(){
            setNumbers([5,...numbers])
        }

        function handleNewEndChange(){
            setNumbers([...numbers,60])
        }

        function handleDeleteSpecified(){
            let copy=[...numbers]
            copy.splice(2,1)
            setNumbers(copy)
        }

  return (
    <div className='text-center mt-5 container'>
        <h1 className='mb-5'>ARRAY OPERATIONS</h1>
        {
            numbers.map((m)=><p key={m}>{m}</p>)
        }
        <div className="d-flex mt-5 justify-content-around text-center">
            <button className="btn btn-dark text-white" onClick={handleNewStartChange}>Add start</button>
            
            <button className="btn btn-dark text-white " onClick={handleNewEndChange}>Add end</button>
            
            <button className="btn btn-dark text-white " onClick={handleDeleteSpecified}>Delete num</button>
        </div>
    </div>
  )
}

export default ArrayState