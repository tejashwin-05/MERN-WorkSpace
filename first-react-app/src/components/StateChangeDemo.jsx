import {useState} from 'react'

function StateChangeDemo() {
    //state
    //let a=10;
    let [a,setA] = useState(10); 
    let [companyName,setCompanyName] = useState('mastercoding');
    // let person = {
    //   pid : 22,
    //   name : 'ravi',
    //   age : 32
    // }

    let [person,setPerson]=useState({pid : 22, name : 'ravi', age : 32});

    let [marks,setMarks]=useState([10,20,30]);

    function handleChangeA(){
        setA(a+1)
    }

    function handleCompanyNameChange(){
      setCompanyName('stack company')
    }

    function handlePersonChange(){
      setPerson({...person,name:'mahesh',pid:200})

    }

    function addNewMark(){
      //setMarks([...marks,50])

      //create copy
      let copy = [...marks]
      //make changes on copy
      copy.splice(2,0,2000);
      //replace old one with copy
      setMarks(copy);
    }

  return (
    <div className='text-center'>
        <h1>State Change Demo</h1>
        <h2>a is {a}</h2>
        {/* <button className='btn btn-primary' onClick={handleChangeA}>Change value of a</button> */}
        <button className='btn btn-primary' onClick={()=>setA(a+1)}>click</button>
        <h2>name : {companyName}</h2>
        <button className='btn btn-secondary' onClick={handleCompanyNameChange}>text-change</button>

        {/* person object state */}
        <p className='lead fs-1 mt-5'>PID : {person.pid}</p>
        <p className='lead fs-1'>NAME : {person.name}</p>
        <p className='lead fs-1'>age : {person.age}</p>
        <button className='btn btn-danger' onClick={handlePersonChange}>change persons details</button>

        {/* marks array state */}
        {
          marks.map(m=><p className='fs-2' key={m}>{m}</p>)
        }

         <button className='btn btn-warning' onClick={addNewMark}>change marks list</button>




    </div>
  )
}

export default StateChangeDemo;