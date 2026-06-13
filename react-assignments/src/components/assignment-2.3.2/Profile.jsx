import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import './Profile.css';

function Profile(props) {
  return (
    <div className='card border rounded-4 mt-5  p-2'>
      <img src={props.userObj.image} width="400px" className='d-block mx-auto pe-2' height="250px" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" width="50px" className='l1 border rounded-circle' alt="" />
      <h5>{props.userObj.title}</h5>
      <p className="lead fs-6">{props.userObj.desc}</p>
      
        <p className='lead fs-6'><IoPersonSharp className='me-2'/>{props.userObj.bottom.name}</p>
        <p className="lead fs-6"><SlCalender className='me-2' />{props.userObj.bottom.date}</p>
      
    </div>
  )
}

export default Profile