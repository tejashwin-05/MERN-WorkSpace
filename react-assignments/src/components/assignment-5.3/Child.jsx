import React from 'react'
import { useForm } from 'react-hook-form';

const Child = ({parentData,getDataFromChild}) => {


  // const [childData,setChildData] = useState('');
  const {register,handleSubmit} = useForm();

  // function onSubmit(info){
  //   setChildData(info)
  //   console.log(info)
  // }

  return (
    <div className='container-fluid p-5 bg-danger text-white'>
      <h1>{parentData}</h1>
      <h3>CHILD</h3>
      <form onSubmit={handleSubmit(getDataFromChild)}>
        <label htmlFor='info' className='form-label fs-2 p-1'>Enter Child data : </label>
        <input id='info' {...register('info')} className='form-control m-1 w-25' type="text" />
        <button type='submit' className="btn-white text-dark border-white rounded-2 mt-2 mb-2 ms-1">Send to parent</button>
      </form>
    </div>
  )
}

export default Child