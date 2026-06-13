import React, { useState } from 'react'
import Parent from './Parent';

function Child() {
    
    let [count, setCount] = useState(10);

    function handleIncrement(){
        setCount(count+1)
    }

    function handleDecrement(){
        setCount(count-1)
    }

  return (
    <div className='text-center'>
        <div className="container mt-3">
            
            <Parent count = {count} />
        </div>
        <div className='container mt-5'>
            <button className="btn btn-success me-3" onClick={handleIncrement}> Increment </button>
            <button className="btn btn-success" onClick={handleDecrement}> Decrement </button>
        </div>
        
    </div>
  )
}

export default Child