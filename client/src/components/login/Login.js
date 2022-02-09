import React ,{ useState , useEffect } from 'react'
import { TextField , Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import Header from '../header/Header';
import loginvalidation from './loginvalidation';

 const Login = (props) => {
 let navigate=useNavigate();

    const {name}=props;

const [loginvalue,setLoginvalue]=useState({email:"",pass:""});
const [errorvalues,setErrorvalues]=useState({});
 const [issubmit,setIssubmit]=useState(false);
 const[registers,setRegisters]=useState([]);

function handlechange(event){
    //  console.log(event.target);
     const {name,value}=event.target;
    //  console.log(value);
     setLoginvalue({...loginvalue,[name]:value});
}


const handlesubmitlogin=(event)=>{
    // console.log("hello");

event.preventDefault();
 setErrorvalues(loginvalidation(loginvalue));
 fetchregisters();

}

async function fetchregisters(){
    const response=await fetch("/api/registers");
    const body=await response.json();
    console.log(body);
    setRegisters(body);
    console.log(registers);
    
    registers.map((i,key)=>{
    
    if((i.email == loginvalue.email) && (i.pass == loginvalue.pass)){
        setIssubmit(true);
    }
    
    })
    }

// useEffect(()=>{
//     if(Object.keys(errorvalues).length===0 && issubmit){

//         alert("login successfully");
//     }
   
// },[errorvalues]);
// async function fetchlogin(){
//       const email= loginvalue.email;
//       const pass= loginvalue.pass;
//       if(email && pass){
//       const response=await fetch("http://localhost:6002/api/login",{
//         method: "post",
//         body: JSON.stringify({email,pass}),
//         headers: {
//             "Content-Type":"application/json"
//         }})
//         console.log(response);
//     const body=await response.json();
//     //  console.log(body);
//     //   setIssubmit(true);

// }
// else{
//     console.log("error occured");
   
// }
// }


    return (
        <div>
            <Header/>
            {Object.keys(errorvalues).length===0 && issubmit ? navigate("/articlelist") : <p>error occured</p>}
            <h1>login</h1>

            <div className="login">
            <form onSubmit={handlesubmitlogin}>
           <TextField id="outlined-basic" label="email" variant="outlined" size="small" name="email" value={loginvalue.email} onChange={handlechange}/><br/><br/>
           <p>{errorvalues.email}</p>
            <TextField id="outlined-password-input" label="Password" type="password" size="small" name="pass" value={loginvalue.pass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.pass}</p>
            {/* <Link to="/mainhome"> */}
            {/* <Link to="/adminhome"> */}
            <Button variant="contained" type="submit" >login</Button>
            {/* </Link> */}
            </form>
        </div>



        </div>
    )
}
export default Login