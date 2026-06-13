import React, { useContext } from 'react'
import { taskContextObj } from '../context/TaskContext'

function TasksCount() {

    const {tasks} = useContext(taskContextObj)

  return (
    <div>
    <h3 className='my-2'>Tasks Count</h3>
    <p className='text-center'>{tasks.length}</p>
    </div>
  )
}

export default TasksCount