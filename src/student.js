import React from 'react';
import { useState } from 'react';
const Student =() => {
    const[data,setdata] = useState([])
      
      const fetchQuestion = async (id)=>{
        fetch(`http://localhost:8080/quiz/get/${id}`)
          .then(async (response) => {
            const questionobj=await response.json();
            setdata(questionobj);
            // console.log(response.json());
          })
      }
       console.log(data);
    return (
        <div>
            <div>
              <button onClick={()=>fetchQuestion(1)}>1</button>
              <button onClick={()=>fetchQuestion(2)}>2</button>
              <button onClick={()=>fetchQuestion(5)}>3</button>
              <button onClick={()=>fetchQuestion(4)}>4</button>
            </div>
            <div>
                {data.map((item)=> (
                  <div>
                    <br/>
                    { item.questionTitle}
                    <br/>
                    a.{item.option1}<br/>
                    b.{item.option2}<br/>
                    c.{item.option3}<br/>
                    d.{item.option4}<br/>
                
                   </div>
                  ))}
            </div>
            </div>
    );
}

export default Student;