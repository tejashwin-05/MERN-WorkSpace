import React, { useState } from 'react'
import Child from './Child'
import { useForm } from 'react-hook-form'

const Parent = () => {

  const {register,handleSubmit} = useForm();
  const [parentData,setParentData] = useState('');
  const [childInfo,setChildInfo] = useState('');

  function onSubmit(data){
    setParentData(data)
    console.log(data)
  }

  //parameterized function in order to get data from child
  function getDataFromChild(info){
    setChildInfo(info)
    console.log(info)
  }

  //console.log(parentData)

  return (
    <div className='container-fluild bg-primary p-5 text-dark'>
      <h1>{childInfo.info}</h1>
      <h3>PARENT</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='data' className='form-label fs-2 p-1'>Enter parent data : </label>
        <input id='data' {...register('data')} className='form-control m-1 w-25' type="text" />
        <button type='submit' className="btn-white text-dark border-white rounded-2 mt-2 mb-2 ms-1">Send to child</button>
      </form>
      <Child parentData = {parentData.data} getDataFromChild={getDataFromChild}  />
    </div>
  )
}

export default Parent

