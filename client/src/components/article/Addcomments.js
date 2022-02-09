import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';



const Addcomments = (props) => {

    const {id,setArticledata}=props
 
    const [commentvalue,setCommentvalue]=useState({username:"",comment:""})

         function handlechange(event){
            console.log(event.target);
            const {name,value}=event.target;
            setCommentvalue({...commentvalue,[name]: value})

         }


   async function fetchcomment(){
           const username=commentvalue.username;
           const text=commentvalue.comment;
         const response=await fetch(`/api/article/${id}/comments`,{
              method: "post",
              body: JSON.stringify({username,text}),
              headers: {
                  "Content-Type":"application/json"
              }})
          const body=await response.json();
          setArticledata(body);
          setCommentvalue({username:"",comment:""});
   }      

    return (
        <div>
            <h5>Leave a comment...</h5>
           <TextField id="outlined-multiline-flexible" label="name" name="username" value={commentvalue.username} multiline maxRows={4} onChange={handlechange} /><br/><br/>
           <TextField id="outlined-multiline-static" label="comments" name="comment" value={commentvalue.comment} multiline rows={4}  onChange={handlechange}/><br/><br/>
           <Button variant="contained" onClick={fetchcomment}>send</Button>
        </div>
    )
}

export default Addcomments
