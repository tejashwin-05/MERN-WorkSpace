import React from 'react'
import {useState} from 'react';

function Assign1() {

    //state
    //Take state as array of employee objects and display it in a table.
    let emps = [
      {eid:1,name:'kiran',age:30,salary:10000},
      {eid:2,name:'vikas',age:20,salary:15000},
      {eid:3,name:'bhanu',age:35,salary:20000}
    ]



  return (
    <div className='container'>
         <h2 className='text-center m-5'>Employee Table</h2>
         <table className='table table-bordered table-info text-center table-hover'>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
             {
              emps.map(empObj=><tr key={empObj.eid}>
                <td>{empObj.eid}</td>
                <td>{empObj.name}</td>
                <td>{empObj.age}</td>
                <td>{empObj.salary}</td>
              </tr>)
             }
          </tbody>
         </table>
    </div>
  )
}

export default Assign1;