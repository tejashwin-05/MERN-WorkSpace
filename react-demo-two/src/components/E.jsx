import React from 'react'
import { usersContextObj } from '../contexts/UsersContext'
import { useContext } from 'react'

function E() {

  let {users} = useContext(usersContextObj)

  return (
    <div className='bg-danger p-5'>
        <h3>Component-E</h3>
        <h4>{users[0]?.name}</h4>
    </div>
  )
}

export default E