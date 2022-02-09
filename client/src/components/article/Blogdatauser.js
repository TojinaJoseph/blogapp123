import React , {useState, useEffect} from 'react'
// import Adminheader from './Adminheader';
// import articleContent from '../article/sampledb';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
// import './Admin.css'

const Blogdatauser = (props) => {

        // const { _id }=props;

    const [articledata,setArticledata] = useState([])

    async function fetchapi(){
        const response = await fetch("/api/article")
        const body = await response.json();
        console.log(body);
        setArticledata(body);
  }
    

//   fetchapi();

  useEffect(()=>{
    fetchapi();
  },[])


    return (
        <div className="blogs">
            {/* <h1 className="ahome">adminhome</h1> */}
            {articledata.map((i,key)=>(
                <div className="articlelink">
                 <Link className="adtitle" key={key} to={`/user/article/${i._id}`}>
                 <h2 className="adtile">{i.title}</h2>
                 </Link> 
                
                </div>
          
       
      
       ) )}
   
           


        </div>
    )
}

export default Blogdatauser


