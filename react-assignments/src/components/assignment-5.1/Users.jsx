import React, { useState,useEffect } from 'react'
import Usercount from './Usercount'

function Users() {

  let [user,setUser]=useState([])
  let [count,setUserCount]=useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  function handleAddUser(){
    setUserCount(count + 1)
  }

  return (
    <div>
      <div className="container mt-5">
        <Usercount count={count}/>
        <div className="row">
          {user.map((user)=>(
            <div key={user.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-center p-2">{user.name}</h5>
                  <p className='card-text'>
                    <strong>Email:</strong>{user.email}
                  </p>
                  <p className='card-text'>
                    <strong>Phone:</strong>{user.phone}
                  </p>
                </div>
                <div className='card-footer'>
                  <button className='btn btn-primary w-100' onClick={handleAddUser}>Add User</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Users