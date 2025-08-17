import { useEffect, useState } from "react";
import Teacher from "./teacher";
import { Link } from "react-router-dom";

const GetQuestion=()=>{
    const[data,setdata] = useState([])
    const fetchQuestion = ()=> {
    fetch(`http://localhost:8080/questions/allquestions`)
        .then( (response) => response.json()) 
        .then((ques) => setdata(ques))
    };

    useEffect(() => {
    fetchQuestion(); 
    }, []);

    const deleteQuestion =(id)=>{
        fetch(`http://localhost:8080/questions/delete/${id}`, { method: 'Delete' })
        .then(response=>{
            alert(`deleted ${id}`);
            fetchQuestion();
        })
    }

    return(
        <div>
            <Link to="/teacher">Back</Link>
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
    );
}
export default GetQuestion;