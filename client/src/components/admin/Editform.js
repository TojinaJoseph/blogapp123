import React, { useEffect,useState } from 'react';
 import Adminheader from './Adminheader';
 import { TextField, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router';

const Editform = (props) => {

    let navigate=useNavigate();
    //  const { content } = props;
    const {_id}=useParams();

    
    const [contentedit,setContentedit]=useState([]);
    const [isSubmit,setIsSubmit]=useState(false);

    // const [edit,setEdit]=useState([]);


//fetch update api from server
async function fetchupdate(){
    const title= contentedit.title;
      const des= contentedit.des;
    const response= await fetch(`/api/article/${_id}/blogedit`,{
        method:"post",
        body: JSON.stringify({title,des}),
        headers: {
            "Content-Type":"application/json"
        }
    
    
    })
    console.log(response);
        const body= await response.json();
        // console.log(body);
        setContentedit(body);
          }

          const handlechange=(event)=>{
            // console.log(event.target);
            const {name,value}=event.target;
            setContentedit({...contentedit,[name]:value});
            // console.log(title);
        }

        function handleupdate(event){
            event.preventDefault();
            // setEditerror(editvalidation(contentedit));
             setIsSubmit(true);
        }

       


//prefill datas 
    async function fetchdedit(){
        //   const response=await fetch(`/api/article/${_id}/blogedit`)
        const response=await fetch(`/api/article/${_id}`)
            const body= await response.json();
            // console.log(body);
            setContentedit(body);
              }

useEffect(()=>{
    fetchdedit();

},[])


    return (
        <div>
             <Adminheader/>
            { isSubmit ? navigate(`/admin/article/${_id}`) : <p>error occured</p>}
            <h1>Edit blog</h1>

           <div className="addcont">
           <form onSubmit={handleupdate}>
           <TextField fullWidth id="outlined-multiline-flexible"label="title"  focused  name="title" value={contentedit.title}  multiline maxRows={4} onChange={handlechange}/><br/><br/>
           {/* <p>{blogerrorvalues.title}</p> */}
           <TextField fullWidth id="outlined-multiline-static" label="content" focused name="des"   value={contentedit.des} multiline rows={4}  onChange={handlechange}/><br/><br/>
           {/* <p>{blogerrorvalues.des}</p> */}
           <Button fullWidth variant="contained" type="submit" onClick={fetchupdate} >update</Button>
           </form>
          


         </div>
        </div>
    )
}

export default Editform
