import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {

  const {register,handleSubmit,formState:{errors}} = useForm();
  const navigate = useNavigate();
  const [userLoginErr,setUserLoginErr] = useState(null)

  function handleFormSubmit(data){
    //console.log("Login data : ",data)
    fetch(`http://localhost:3000/users?username=${data.username}&password=${data.password}`)
    .then(res=>res.json())
    .then(usersObjList=>{
      if(usersObjList.length===0){
        setUserLoginErr({message:"Username or Password is incorrect"})
      }
      else{
        //console.log("user login success",usersObjList[0])
        //navigate to user-profile component and transfer current user obj to it
        navigate('/user-profile')
      }
    }).catch(err=>setUserLoginErr(err))
  }

  return (
    <div>
      <h1 className='text-center mt-4'>User Login</h1>
      {
        userLoginErr!==null&& <p className='text-danger fs-1 text-center'>{userLoginErr.message}</p>
      }
      <form
        className="w-25 mx-auto mt-2"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
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
        <div className="mb-3">
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
        <button className="btn btn-outline-dark d-block mx-auto" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login