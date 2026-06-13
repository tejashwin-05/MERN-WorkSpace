import React from 'react'
import './RegisForm.css'
import {useForm} from 'react-hook-form';

function RegisForm() {

    const {register,handleSubmit,formState:{errors}}=useForm();

    function handleFormChange(obj){
        console.log(obj)
    }

  return (
    <div className='total'>
        <form className='bg-dark text-white card card-body w-25 mx-auto mt-5 p-5' onSubmit={handleSubmit(handleFormChange)}>
            <p className='lead '>Registration Form</p>
            <div className='d-flex justify-content-between'>
                <div className='mb-3'>
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" {...register('firstname',{required:true,minLength:4,max:6})} id="firstname" className="form-control" />
                    {errors.firstname?.type==='required' && <p className='text-warning'>*First name is required</p>}
                    {errors.firstname?.type==='minLength' && <p className='text-warning'>*minimum length should be 4</p>}
                    {errors.firstname?.type==='max' && <p>*max is 6</p>}
                </div>
                <div className="ms-3 mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" {...register('lastname',{required:true,minLength:4,max:6})} id="lastname" className="form-control" />
                    {errors.lastname?.type==='required' && <p className='text-warning'>*last name is required</p>}
                    {errors.lastname?.type==='minLength' && <p className='text-warning'>*minimum length should be 4</p>}
                    {errors.lastname?.type==='max' && <p className='text-warning'>*max is 6</p>}
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-3'>
                    <label htmlFor="birthday" className="form-label">Birthday</label>
                    <input type="date" {...register('birthday',{required:true})} id="birthday" className="form-control" />
                    {errors.birthday?.type==="required" && <p className='text-warning'>*birthday is required</p>}
                </div>
                <div className=" mb-3">
                    <label>Gender</label>
                    <div>
                        <div className="form-check">
                            <input type="checkbox" {...register('male')} id="male" className="form-check-input" />
                            <label htmlFor="male" className="ps-1 form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" {...register('female')} id="female" className="form-check-input" />
                            <label htmlFor="female" className="ps-1 form-check-label">Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" {...register('email',{required:true})} id="email" className="form-control" />
                    {errors.email?.type==='required' && <p className='text-warning'>*Email is required</p>}
                </div>
                <div className="ms-3 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="phone" {...register('phone',{required:true,maxLength:10})} id="phone" className="form-control" />
                    {errors.phone?.type==='required' && <p className='text-warning'>*Phone number is required</p>}
                    {errors.phone?.type==="maxLength" && <p className='text-warning'>*Max length is 10</p>}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select {...register('subject',{required:true})} id="subject" className="form-select">
                {errors.subject?.type==='required' && <p className='text-warning'>*Subject is required</p>}
                    <option value="option">Choose option</option>
                  <option value="tekugu">Telugu</option>
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                </select>
                
              </div>
              <button type='submit' className="ms-5 me-5 btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default RegisForm