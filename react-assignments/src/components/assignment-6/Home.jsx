import React from 'react'
import earth from '../../assets/earth-asia.png'


function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-center py-3 pb-4'>REACT ROUTING</h1>
      <img src={earth} className='250px mt-4' alt="" />
    </div>
  )
}

export default Home