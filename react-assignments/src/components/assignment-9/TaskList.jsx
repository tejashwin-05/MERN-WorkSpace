import React, { useContext } from 'react'
import { taskContextObj } from '../context/TaskContext'

function TaskList() {

    const {tasks} = useContext(taskContextObj)

  return (
    <div>
        <h3 className='my-2'>Tasks List</h3>
        {
            tasks?.map((task,index)=>(
                <p key={index} className='text-center'>{task}</p>
            ))
        }
    </div>
  )
}

export default TaskList