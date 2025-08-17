import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Teacher from "./teacher";
import { useNavigate } from "react-router-dom";
const AddQuestion=()=>
    {
    const navigate =useNavigate();
    const [formValue,setformValue]=useState({
        questionTitle: "",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        rightAnswer:"",
        difficultylevel:"",
        category:"",

    });
    const handleSubmit= (e)=>{

        e.preventDefault();
        fetch(`http://localhost:8080/questions/add`,
            {
                method : 'POST',
                headers : 
                {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(formValue) 
            }
        )
        .then( (response) => {
            if(!response.ok){
                throw new Error("Failed to add Question");
            }
            return response.text();
        })
        .then(()=>{
            alert("Successfully added Question ");
            
            setformValue(
                {
                    questionTitle: "",
                    option1:"",
                    option2:"",
                    option3:"",
                    option4:"",
                    rightAnswer:"",
                    difficultylevel:"",
                    category:"",
                }
            );
            navigate("/teacher/addques");
            
        })
        .catch((error) =>{
            console.error(error);
            alert("error adding question");
        });
    };
    
    const handleChange= (e)=>{
        setformValue({...formValue,[e.target.name]:e.target.value})
    };

    return (
        <>  
            <Link to="/teacher">Back</Link>
        
            <form onSubmit={handleSubmit}>
                    <input type="text" name="questionTitle" placeholder="Question Title" value={formValue.questionTitle} onChange={handleChange} required /><br/>
                    <input type="text" name="option1" placeholder="Option 1" value={formValue.option1} onChange={handleChange} required /><br/>
                    <input type="text" name="option2" placeholder="Option 2" value={formValue.option2} onChange={handleChange} required /><br/>
                    <input type="text" name="option3" placeholder="Option 3" value={formValue.option3} onChange={handleChange} required /><br/>
                    <input type="text" name="option4" placeholder="Option 4" value={formValue.option4} onChange={handleChange} required /><br/>
                    <input type="text" name="rightAnswer" placeholder="Right Answer" value={formValue.rightAnswer} onChange={handleChange} required /><br/>
                    <input type="text" name="difficultylevel" placeholder="Difficulty Level" value={formValue.difficultylevel} onChange={handleChange} required /><br/>
                    <input type="text" name="category" placeholder="Category" value={formValue.category} onChange={handleChange} required /><br/>
                    <button type="submit" >Add Question</button>
            </form>
        </>
    )

    }

export default AddQuestion;


