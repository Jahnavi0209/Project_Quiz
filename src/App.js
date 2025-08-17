import { useEffect, useState } from 'react';
import Student from './student';
import Teacher from './teacher';
import React from 'react';
import AddQuestion from './addquestion';
import GetQuestion from './fetchques';
import UpdateQues from './update';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
  } from 'react-router-dom';
  
function App() {
  // const [usertype,setusertype] = useState('')
  
  const Dashboard =()=> (

    <>
    <Link to="/students">StudentQues</Link><br/>
    <Link to="/teacher">Teacher</Link>
    </>
  )
  
  
 
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/students" element={<Student/>}/>
        <Route path="/teacher" element={<Teacher />}/>
        <Route path="/teacher/getallques" element={<GetQuestion/>}/>
        <Route path="/teacher/addques" element={<AddQuestion/>} />
        <Route path="teacher/update" element={<UpdateQues />} />
      </Routes>

      

    </Router>
    
  );
}

export default App;
