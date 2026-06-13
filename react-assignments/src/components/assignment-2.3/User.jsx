import React from 'react'

function User(props) {
  return (
    <div className='container'>
        <div className="card card-body m-5 text-center border rounded-4">
            <img src={props.userObj.image} width="150px" className='d-block mx-auto' alt="" />
            <h5 className='mt-2'>{props.userObj.name}</h5>
            <h6>{props.userObj.category}</h6>
            <div className="btn btn-secondary">Profile</div>
        </div>
    </div>
  )
}

export default User