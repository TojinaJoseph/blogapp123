import React from 'react'
import Mainheader from '../mainheader/Mainheader';
// import articleContent from './sampledb'
// import { Link } from 'react-router-dom';
import './Article.css'
// import Articledata from '../admin/Articledata';
// import Blogdata from '../admin/Blogdata';
import Blogdatauser from './Blogdatauser';

const Articlelist = () => {
    return (
        <div>
            <Mainheader/>
            <h1 className="listtitle">Articlelist</h1>
            {/* {articleContent.map((i,key)=>(
                <div className="bloglink">
                 <Link className="title" key={key} to={`/article/${i.name}`}>
           <h2 className="tile">{i.title}</h2>
      
           </Link>
                </div>
          


            )
            )} */}

        <Blogdatauser/>

        </div>
    )
}

export default Articlelist
