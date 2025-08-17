import React from 'react';
import { useState } from 'react';
const Student =() => {
    const[data,setdata] = useState([])
    const[quizId,setquizid]=useState(null)
    const[result,setresult]=useState({})
    const[score,setScore]=useState(null)
      
      const fetchQuestion = async (id)=>{
        setScore(null);
        setresult({});
        fetch(`http://localhost:8080/quiz/get/${id}`)
          .then(async (response) => {
            const questionobj=await response.json();
            setdata(questionobj);
            setquizid(id);
            // console.log(response.json());
          })
      }

      const sendResult = async (e) => {
        
  // convert {3: "def", 4: "lang"} into [{id: 3, response: "def"}, {id: 4, response: "lang"}]
      const resultPayload = Object.entries(result).map(([id, response]) => ({
        id: Number(id),
        response
      }));

      try {
        const response = await fetch(`http://localhost:8080/quiz/result/${quizId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resultPayload)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error from backend:", errorData);
          return;
        }

        const data = await response.json();
        setScore(data); // assuming backend returns score
      } catch (err) {
        console.error("Network error:", err);
      }
    };


      const handleChange= (id,value)=>{
        setresult( prev => ({
          ...prev,
          [id]:value
        }))
      }
      
      

    return (
        <div>
            <div>
              <button onClick={()=>fetchQuestion(16)}>1</button>
              <button onClick={()=>fetchQuestion(17)}>2</button>
              <button onClick={()=>fetchQuestion(18)}>3</button>
              <button onClick={()=>fetchQuestion(19)}>4</button>
            </div>
            <div key={quizId}>
            <div >
            {data.map((item, index)=> (
              <div>
                <br/>
                { item.questionTitle}
                <br/>
                <label>
                  <input type="radio" name={`question-${index}`} value={item.option1} onChange={(e)=>handleChange(item.id,e.target.value)} />
                  a. {item.option1}
                </label>
                <label>
                  <input type="radio" name={`question-${index}`} value={item.option2} onChange={(e)=>handleChange(item.id,e.target.value)} />
                  b. {item.option2}
                </label>
                <label>
                  <input type="radio" name={`question-${index}`} value={item.option3} onChange={(e)=>handleChange(item.id,e.target.value)}/>
                  c. {item.option3}
                </label>
                <label>
                  <input type="radio" name={`question-${index}`} value={item.option4} onChange={(e)=>handleChange(item.id,e.target.value)} />
                  d. {item.option4}
                </label>
                </div> ))}

                {data.length>0 && (<button type="button" onClick={sendResult}>Submit</button>)}<br/>
                {score>=0 && (<div>Your Score is:{score}</div>)}
                
                </div>
                
                
            </div>
            
            </div>
    );
}

export default Student;