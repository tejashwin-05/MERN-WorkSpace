import { useState } from 'react';
import {createContext} from 'react';
export const counterContextObj = createContext();

import React from 'react'

function CounterContext({children}) {

    //state of context
    const [counter,setCounter]=useState(10)

  return (
    <counterContextObj.Provider value={{counter,setCounter}}>
         {children}
    </counterContextObj.Provider>
  )
}

export default CounterContext
