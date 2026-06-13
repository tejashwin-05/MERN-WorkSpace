import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-black text-white '>
        <ul className='nav d-flex justify-content-end py-3 px-5 '>
            <li className="nav-item">
              <Link to='' className='nav-link text-white'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className='nav-link text-white'>Register</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className='nav-link text-white'>Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/technologies' className='nav-link text-white'>Technologies</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header