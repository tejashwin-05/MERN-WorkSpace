import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Register() {

  const {register,handleSubmit,formState:{errors}} = useForm();
  const navigate = useNavigate();
  const [err,setErr] = useState(null);

  function handleFormSubmit(data){
    //console.log(data)
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>{
      //console.log(res)
      if(res.status === 201){
        navigate('/login')
      }else{
        console.log({message:err.message})
      }
    })
    .catch(err=>setErr(err))
  }

  return (
    <div className=''>

    <h1 className='text-center mt-4'>User Registration</h1>

    {err !== null && <p className='text-center fs-1 text-danger'>{err.message}</p>}

      <form
        className="w-25 mx-auto mt-2"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-1">
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            type="text"
            {...register("username",{required:true,minLength:4,maxLength:6})}
            id="un"
            className="form-control"
          />
          {/* validation error msg for username */}
          {errors.username?.type==='required' && <p className='text-danger'>*Username is required</p>}
          {errors.username?.type==='minLength' && <p className='text-danger'>*Min length should be 4</p>}
          {errors.username?.type==='maxLength' && <p className='text-danger'>*Max length should be 6</p>}

        </div>
        {/* password */}
        <div className="mb-1">
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            type="password"
            {...register("password",{required:true})}
            id="pw"
            className="form-control"
          />
            {/* validation error msg for password */}
            {errors.password?.type==='required' && <p className='text-danger'>*Password is required</p>}
        </div>
        {/* email */}
        <div className="mb-1">
          <label className="form-label" htmlFor="em">
            Email
          </label>
          <input
            type="email"
            {...register("email",{required:true})}
            id="em"
            className="form-control"
          />
            {/* validation error msg for email */}
            {errors.email?.type==='required' && <p className='text-danger'>*Email is required</p>}
        </div>
        {/* date of birth */}
        <div className="mb-1">
          <label className="form-label" htmlFor="db">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob",{required:true})}
            id="db"
            className="form-control"
          />
            {/* validation error msg for username */}
            {errors.dob?.type==='required' && <p className='text-danger'>*Date of birth is required</p>}
        </div>
        {/* submit button */}
        <button className="btn btn-outline-dark d-block mx-auto" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register