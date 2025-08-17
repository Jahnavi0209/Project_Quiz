import React from 'react';
import { useState } from 'react';
import AddQuestion from './addquestion';
import UpdateQues from './update';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
  } from 'react-router-dom';
import GetQuestion from './fetchques';

const Teacher =() => {
    

    
    

    // const addQuestion =(payload)=>{
    //     // const payload = {
    //     // questionTitle: "What is React?",
    //     // option1: "Library",
    //     // option2: "Framework",
    //     // option3: "Language",
    //     // option4: "Tool",
    //     // rightAnswer: "Library",
    //     // difficultylevel: "Easy",
    //     // category: "Frontend"
    //     // };

    //     fetch(`http://localhost:8080/questions/add` , 
    //         { 
    //             method: 'POST',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             }, 
    //             body: JSON.stringify(payload ) 
    //         }
    //     )
    //     .then()
         
    // }

    // const handleSubmit= (e)=> {
    //     e.preventDefault();
    //    // console.log(e);
    //     // addQuestion(data);
    //     const formData = new FormData(e.target);
    //     console.log(formData);

    //     const payload = {
    //         questionTitle: formData.get('questionTitle'),
    //         option1: formData.get('option1'),
    //         option2: formData.get('option2'),
    //         option3: formData.get('option3'),
    //         option4: formData.get('option4'),
    //         rightAnswer: formData.get('rightAnswer'),
    //         difficultylevel: formData.get('difficultylevel'),
    //         category: formData.get('category')
    //     };
    //     addQuestion(payload);

    //     console.log(payload);
    // }

    // const handleChange=(event)=>{
    //     // console.log(event.target.value,"handlechange");
    // }
    

    return (
        <>
        <Link to="/">Home</Link><br/>
        <Link to="/teacher/addques">Add Question</Link><br/>
        <Link to="/teacher/getallques">Get all Questions</Link><br/>
        <Link to="/teacher/update">Update Question</Link>
       </>
    );
}

export default Teacher;