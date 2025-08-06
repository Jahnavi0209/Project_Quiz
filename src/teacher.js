import React from 'react';
import { useState } from 'react';
const Teacher =() => {
    const[data,setdata] = useState([])
      
    const fetchQuestion = async ()=>{
    fetch(`http://localhost:8080/questions/allquestions`)
        .then(async (response) => {
        const questionobj=await response.json();
        setdata(questionobj);
        console.log(response);
        })
    }
    console.log(data);
    const deleteQuestion =(id)=>{
        fetch(`http://localhost:8080/questions/delete/${id}`, { method: 'Delete' })
        .then(response=>{
            alert(`deleted ${id}`);
            fetchQuestion();
        })
    }
    return (
        <div>
            <div>
              <button onClick={()=>fetchQuestion()}>getallquestions</button>
              {/* <button onClick={()=>fetchQuestion(2)}>2</button> */}
              {/* <button onClick={()=>fetchQuestion(5)}>3</button>
              <button onClick={()=>fetchQuestion(4)}>4</button> */}
            </div>
            <div>
                {data.map((item)=> (
                  <div>
                    <br/>
                    {item.id}.
                    { item.questionTitle}
                    <br/>
                    a.{item.option1}<br/>
                    b.{item.option2}<br/>
                    c.{item.option3}<br/>
                    d.{item.option4}<br/>
                    <button onClick={()=>deleteQuestion(item.id)}>delete</button>

                   </div>
                  ))}
            </div>
            </div>
    );
}

export default Teacher;