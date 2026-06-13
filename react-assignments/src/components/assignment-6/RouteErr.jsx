import React from 'react'
import { useRouteError } from 'react-router-dom'
import error from '../../assets/error.png'

function RouteErr() {

    const err = useRouteError();
    console.log(err)

  return (
    <div className='text-center d-flex flex-column align-items-center justify-content-center'>
        <h1 className='mt-5'>{err.data}</h1>
        <h3>{err.statusText} - {err.status}</h3>
        <img src={error} className='mt-5' width='250px' alt="" />
    </div>
  )
}

export default RouteErr