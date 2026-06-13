function EmpTable(){

    //Take state as array of employee objects and display it in a table.
    let employee =[
        {eid: 101,ename: "ravi",salary: 10000},
        {eid: 102,ename: "kumar",salary: 20000},
        {eid: 103,ename: "mahesh",salary: 30000},
        {eid: 104,ename: "ashwin",salary: 30000},
        {eid: 105,ename: "rajesh",salary: 40000},
        {eid: 106,ename: "balu",salary: 34600},
        {eid: 107,ename: "kalyan",salary: 40000},
        {eid: 108,ename: "prabhas",salary: 50000}
    ]

    return(
        
        <div className="min-vh-100 bg-info">
            <h1 className="text-center text-info pb-5 pt-5 bg-dark">EMPLOYEE TABLE</h1>
            <table className="table table-center table-bordered table-dark container mt-5 text-center">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((empObj)=><tr key={empObj}>
                            <td>{empObj.eid}</td>
                            <td>{empObj.ename}</td>
                            <td>{empObj.salary}</td>
                        </tr>)
                    } 
                </tbody>
            </table>
        </div>
        
    );
}

export default EmpTable;