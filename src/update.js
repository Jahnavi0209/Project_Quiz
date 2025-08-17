import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UpdateQues= ()=>{

    const Navigate=useNavigate();
    const [formData,setformData] =useState(
        {
            id:"",
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

    const handleSubmit =(e)=>{

    e.preventDefault();
    fetch("http://localhost:8080/questions/update",
        {
            method: "PUT",
            headers:
            {
            'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)

        } )
        .then((response)=>{
            if(!response.ok){
                throw new Error("failed to update");
            }
            return response.text;
        })
        .then(()=>{
            alert("updated successfully");
            Navigate("/teacher/getallques");
        })
        .catch((error)=>{
            alert("error updating ques");
        });
    }

        const handleChange= (e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    };



        return(
            <>
            <Link to="/teacher">Back</Link>
            <form onSubmit={handleSubmit}>
                    <input type="number" name="id" placeholder="Question id" value={formData.id} onChange={handleChange} required /><br/>
                    <input type="text" name="questionTitle" placeholder="Question Title" value={formData.questionTitle} onChange={handleChange} required /><br/>
                    <input type="text" name="option1" placeholder="Option 1" value={formData.option1} onChange={handleChange} required /><br/>
                    <input type="text" name="option2" placeholder="Option 2" value={formData.option2} onChange={handleChange} required /><br/>
                    <input type="text" name="option3" placeholder="Option 3" value={formData.option3} onChange={handleChange} required /><br/>
                    <input type="text" name="option4" placeholder="Option 4" value={formData.option4} onChange={handleChange} required /><br/>
                    <input type="text" name="rightAnswer" placeholder="Right Answer" value={formData.rightAnswer} onChange={handleChange} required /><br/>
                    <input type="text" name="difficultylevel" placeholder="Difficulty Level" value={formData.difficultylevel} onChange={handleChange} required /><br/>
                    <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required /><br/>
                    <button type="submit" >update Question</button>
            </form>
            </>

        )
}

export default UpdateQues;