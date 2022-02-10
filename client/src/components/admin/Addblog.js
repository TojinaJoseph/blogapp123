import React , {useState, useEffect} from 'react'
import Adminheader from './Adminheader';
import { TextField, Button } from '@mui/material';
import blogvalidation from "./blogvalidation"
import {  useNavigate } from 'react-router';


const Addblog = (props) => {

    // const {title}=props
    let navigate=useNavigate();

    const[blog,setBlog]=useState({title:"",des:""});
    const [blogerrorvalues,setBlogerrorvalues]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handlechange=(event)=>{
        // console.log(event.target);
        const {name,value}=event.target;
        setBlog({...blog,[name]:value});
        // console.log(title);
    }
    //fetching api to add from server
    async function fetchaddblog(){
        
        const title= blog.title;
        const des= blog.des;
       
        if(title && des ){
        const response=await fetch("/api/admin/addarticle",{
          method: "post",
          body: JSON.stringify({title,des}),
          headers: {
              "Content-Type":"application/json"
          }})
      const body=await response.json();
      console.log(body);
        }
        else{
            console.log("error");
        }
    }


    const handlesubmit=(event)=>{
        event.preventDefault();
        setBlogerrorvalues(blogvalidation(blog));
         setIsSubmit(true);
        //  setBlog({title:"",des:""})
       
      }

    useEffect(()=>{
        if(Object.keys(blogerrorvalues).length===0 && isSubmit){
            setBlog({title:"",des:""});
            alert("blog added successfully");
        }
    },[blogerrorvalues])


    return (
        <div>
            <Adminheader/>
            {Object.keys(blogerrorvalues).length===0 && isSubmit ? navigate("/adminhome") : <p>error occured</p>}
            <h1>Add blog</h1>

           <div className="addcont">
           <form onSubmit={handlesubmit}>
           <TextField fullWidth id="outlined-multiline-flexible" label="title" name="title" value={blog.title} onChange={handlechange}multiline maxRows={4}/><br/><br/>
           <p>{blogerrorvalues.title}</p>
           <TextField fullWidth id="outlined-multiline-static" label="contents...." name="des" value={blog.des} onChange={handlechange} multiline rows={4}/><br/><br/>
           <p>{blogerrorvalues.des}</p>
           <Button fullWidth variant="contained" type="submit" onClick={fetchaddblog}>Add</Button>
           </form>
          


         </div>




        </div>
    )
}

export default Addblog
