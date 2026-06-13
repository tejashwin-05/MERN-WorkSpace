import React from 'react'

function Navbar() {
  return (
    <div className='bg-dark text-white py-4 d-flex justify-content-between'>
        <img src="https://i.pinimg.com/originals/53/3e/0f/533e0f26ad552ff13d6d9d2cdfedb90b.png" width="40px" className='ms-5' alt="" />
        <ul className='nav justify-content-end pe-5'>
            <li className='nav-item'>Home</li>
            <li className='nav-item ps-5'>SignUp</li>
            <li className='nav-item ps-5'>Login</li>
        </ul>
    </div>
  )
}

export default Navbar