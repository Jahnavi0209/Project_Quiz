import { useEffect, useState } from 'react';
import Student from './student';
import Teacher from './teacher';
function App() {
  const [usertype,setusertype] = useState('')
  

  const studentClick = ()=>{
    setusertype('student');
    //debugger;
    // fetchQuestion();
  
  }


  //const teacherClick = ()=> { setusertype('teacher')}
  // useEffect(() => { console.log("string")})
  // useEffect(() => { console.log("string")}, [])
  // useEffect(() => { console.log("string")}, [usertype])

  return (
    <div>
      <button onClick={studentClick}>student</button>
      <button onClick={()=>setusertype('teacher')}>Teacher</button>
        {
          usertype==="student" && 
          ( 
            <Student />  
          ) 
        }
        {
          usertype==="teacher" &&
          (
            <Teacher/>
          )
        }
    </div>
  );
}

export default App;
