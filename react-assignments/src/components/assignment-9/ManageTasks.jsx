import React from 'react'
import AddTasks from './AddTasks'
import TaskList from './TaskList'
import TasksCount from './TasksCount'

function ManageTasks() {
  return (
    <div className='container'>
        <h1 className='text-center my-3'>TO DO APP</h1>
        <div className='d-flex justify-content-between'>
            <AddTasks />
            <TaskList />
            <TasksCount />
        </div>
        
    </div>
  )
}

export default ManageTasks