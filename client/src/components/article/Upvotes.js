import React from 'react'
import { Button } from '@mui/material'
import './Article.css'

const Upvotes = (props) => {
    const {id,setArticledata,upvotes} =props;

    

    async function fetchupvotes(){
       const response=await fetch(`/api/article/${id}/upvotes`,{ method: "post" })
       const body= await response.json();
       setArticledata(body);
        }

    return (
        <div className="up">
             <p>You like it?</p>
            <Button className="upbutton" onClick={fetchupvotes}>👍</Button>
            <h4 className="like">This article has {upvotes} upvotes</h4>
            
        </div>
    )
}

export default Upvotes
