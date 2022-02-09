import React , { useState, useEffect}from 'react'
import Adminheader from './Adminheader';
import articleContent from '../article/sampledb';
import { useParams, useNavigate } from 'react-router';
import Error from '../error/Error';
import './Admin.css'
import { TextField, Button } from '@mui/material';
import Comments from '../article/Comments';
import Editform from './Editform';

const Blogdata = (props) => {
    // const {content}=props;
    // console.log(props);
// let navigate=useNavigate();

    const {_id}=useParams();


    const [content,setContent]=useState([])
    // const [isSubmit,setIsSubmit]=useState(false);
    // const [isSubmitedit,setIsSubmitedit]=useState(false);


 async function fetchblog(){
     const response=await fetch(`/api/article/${_id}`)
    const body= await response.json();
    console.log(body);
    setContent(body);
 }
  useEffect(()=>{

    fetchblog()

  },[])

//   async function fetchdelete(){
// await fetch(`/api/article/${_id}/blogdelete`,{
//     method: "post"
// })

//   }

//    function handlesubmit(event){
//     event.preventDefault();
//     // setBlogerrorvalues(blogvalidation(blog));
//      setIsSubmit(true);
     

//   }
//edit fetch
 
// 
    //   function handleedit(event){
    //     event.preventDefault();
    //     // setBlogerrorvalues(blogvalidation(blog));
    //      setIsSubmitedit(true);
         
    
    //   }


    // const article=articleContent.find(i=>i.name===name)
     if(!content) return <Error/>
    return (
        <div className="blogcont">
         {/* {isSubmit ? navigate("/adminhome"): <p></p>}
         {isSubmitedit ? navigate(`/${_id}/editform`) : <p></p>}} */}
            <Adminheader/>
           
            <div className="bloghead">
            <h1 className="adminblog">{content.title}</h1>
          
           <p className="addes">{content.des}</p>
            </div>
           
           {/* <TextField className="text" id="outlined-multiline-flexible" label="name" multiline maxRows={4} /><br/><br/>
           <TextField  className="text" id="outlined-multiline-static" label="comments" multiline rows={4}/><br/><br/> */}
             
             {/* <div className="buttons">
             <form onSubmit={handlesubmit}>
             <Button variant="contained" color="error" className="but" onClick={fetchdelete} type="submit">Delete</Button>
             </form>
            <form onSubmit={handleedit}>
            <Button variant="contained" color="success" className="but1" type="submit" >Edit</Button>
            </form>
            
             </div> */}


        </div>
    )
}

export default Blogdata
