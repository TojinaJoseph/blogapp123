import React from 'react'

const Comments = (props) => {
    const {comments}=props;

    return (
        <div>
           <h4>💬comments*</h4>
           {comments.map((i,key)=>(
            <div key={key} className="comments">
              <h5>{i.username}</h5>
              <h6>{i.text}</h6>
             </div>
              ))}
          </div>
    )
}

export default Comments
