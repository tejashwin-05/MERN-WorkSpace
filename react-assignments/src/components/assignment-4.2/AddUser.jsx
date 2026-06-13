import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Userlist from './Userlist';

function AddUser() {

    let [users,setUsers] = useState([]);

    const {register,handleSubmit,formState:{errors}}=useForm();

    const handleUserChange=(data)=>{
        console.log(data);
        setUsers(prevUsers=>[...prevUsers,data])
    };

    

  return (
    <div>
        
        <form  className="bg-dark text-white card card-body w-25 mt-5 mx-auto p-5" onSubmit={handleSubmit(handleUserChange)}>
            <h3 className='text-center text-white'>User Registration</h3>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username',{required:true,minLength:4,max:8})} id="username" className="form-control" />
                {errors.username?.type==='required' && <p className='text-warning'>*Username is required</p>}
                {errors.username?.type==='minLength' && <p className='text-warning'>*Username should have min 4 characters</p>}
                {errors.username?.type==='max' && <p className='text-warning'>*Username contains max 8 characters</p>}
            </div>
            {/* date of birth */}
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" {...register('dob',{required:true})} id="dob" className="form-control" />
                {errors.dob?.type==='required' && <p className='text-warning'>*DOB is required</p>}
            </div>
            {/* city */}
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" {...register('city',{required:true})} id="city" className="form-control" />
                {errors.city?.type==='required' && <p className='text-warning'>*City is required</p>}
            </div>
            {/* buttton */}
            <button className="w-50 btn btn-primary">Add User</button>
        </form>
        <Userlist users={users} />
    </div>
  );
}

export default AddUser;

