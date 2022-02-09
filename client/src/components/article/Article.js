import React, { useState, useEffect } from 'react'
import Mainheader from '../mainheader/Mainheader';
import articleContent from './sampledb'
import { useParams } from 'react-router';
import Error from '../error/Error';
import './Article.css'
import { Button } from '@mui/material';
import Upvotes from './Upvotes';
import Comments from './Comments';
import Addcomments from './Addcomments';
import Blogdata from '../admin/Blogdata';
import Articledatauser from './Articledatauser';

const Article = (props) => {
     const {_id}=useParams()

    
    
     const [content,setContent]=useState([])
     const [articledata,setArticledata] = useState({upvotes:0,comments:[]})

    // const article=articleContent.find(i=>i.name===name)

    // useEffect(()=>{
    //     fetchapi();
    // },[name])


//fetching article
async function fetchapi(){
      const response = await fetch(`/api/article/${_id}`)
      const body = await response.json();
      console.log(body);
      setContent(body);
      setArticledata(body);

}

useEffect(()=>{

    fetchapi()

},[_id])



    //  if(!article) return <Error/>
    return (
        <div className="articlecont">
           <Mainheader/>
           <h1 className="atitle">{content.title}</h1>
           <Upvotes id={_id} setArticledata={setArticledata} upvotes={articledata.upvotes}/>
           <div className="ades">
           <p className="articlep">{content.des}</p>
           {/* <Articledatauser/> */}
           </div>
          
           <Comments comments={articledata.comments}/>
           <Addcomments id={_id} setArticledata={setArticledata}/>
         
        </div>
    )
}

export default Article
