import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
export const usersContextObj = createContext()

import React from 'react'

function UsersContext({children}) {

    let [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(usersData=>setUsers(usersData))
        .catch(err=>console.log(err))
    },[])

  return (
    <usersContextObj.Provider value={{users}}>
        {children}
    </usersContextObj.Provider>
  )
}

export default UsersContext