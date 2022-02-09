import React, { useState, useEffect } from 'react'
import { TextField , Button } from '@mui/material';
import { Link ,useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import validation from './validation';
import Login from './Login';
import Home from '../home/Home';

const Signup = (props) => {
   let navigate=useNavigate();
   
    const {name}=props; 
   // uname:"",email:"",pass:"",cpass:""
  const [formvalues,setFormvalues]=useState({});
  const [errorvalues,setErrorvalues]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handlechange=(event)=>{
    //   console.log(event.target);
      const {name,value}=event.target;
      setFormvalues({...formvalues,[name]:value});
  }


  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrorvalues(validation(formvalues));
     setIsSubmit(true);
     
  }

  useEffect(()=>{
    if(Object.keys(errorvalues).length===0  && isSubmit){
     alert("signup successfully");
    
    }

  },[errorvalues]);








  //fetching register to server
  async function fetchregister(){
      const user= formvalues.uname;
      const em= formvalues.email;
      const pwd= formvalues.pass;
      const cpwd= formvalues.cpass;
     if(user && em && pwd && cpwd){
        console.log("not having values");
        const response=await fetch("http://localhost:6002/api/register",{
            method: "post",
            body: JSON.stringify({user,em,pwd,cpwd}),
            headers: {
                "Content-Type":"application/json"
            }})
        const body=await response.json();
        console.log(body);
    }
    else{
        console.log("error occured");
       
    }
      
  }

  
     
{/* <pre className="pretext">{JSON.stringify(formvalues,undefined,2)}</pre> */}
    return (
       
        <div>
            
            <Header/>
                {Object.keys(errorvalues).length===0  && isSubmit ? navigate("/login") : <p> </p>  }
            <h1>signup</h1>
           
            <div className="login">
        <form onSubmit = {handleSubmit}>
            <TextField  label="username" variant="outlined" size="small" name="uname" value={formvalues.uname} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.uname}</p>
            <TextField id="outlined-basic" label="email" variant="outlined" size="small" name="email" value={formvalues.email} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.email}</p>
            <TextField id="outlined-password-input" label="Password" type="password" size="small" name="pass" value={formvalues.pass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.pass}</p>
            <TextField  label="confirm Password" type="password" size="small" name="cpass" value={formvalues.cpass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.cpass}</p>
            {/* <Link to="/login"> */}
            <Button variant="contained" type="submit" onClick={fetchregister}>signup</Button>
            {/* </Link> */}
            </form>
        </div>
        </div>
    )
}

export default Signup
