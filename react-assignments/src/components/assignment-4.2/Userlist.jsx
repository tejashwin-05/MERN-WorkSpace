import React from 'react'

function Userlist({users}) {
  return (
    <div className='container mt-5 w-50'>
        <table className='table table-dark text-center table-center text-white'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>DOB</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td  colSpan='3' className='text-center'>No users added yet</td>
                    </tr>
                ):(
                    users.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.dob}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Userlist

