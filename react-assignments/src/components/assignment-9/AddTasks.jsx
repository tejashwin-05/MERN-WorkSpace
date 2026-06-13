import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { taskContextObj } from '../context/TaskContext';

function AddTasks() {

    const {register,handleSubmit} = useForm();
    const {tasks,setTasks} = useContext(taskContextObj)

    function addNewTask(taskObj){
        console.log(taskObj)
        setTasks([...tasks,taskObj.newtask])
    }

  return (
    <div className='bg-light text-center p-3'>
    <h3>Enter Task</h3>
        <form onSubmit={handleSubmit(addNewTask)}>
            <div>
                <input type="text" {...register('newtask')} id="newtask" className='form-control my-3' />
            </div>
            <button type='submit' className="btn btn-outline-dark">Add</button>
        </form>
    </div>
  )
}

export default AddTasks