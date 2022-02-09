import React ,{useState}from 'react'
import Header from '../header/Header';
import "./Login.css";
import { TextField , Button} from '@mui/material';
import { useNavigate } from 'react-router';
import adminvalidation from "./adminvalidation";




const Adminlogin = (props) => {

    let navigate=useNavigate();

const [loginvalue,setLoginvalue]=useState({email:"",pass:""});
const [errorvalues,setErrorvalues]=useState({});
const [issubmit,setIssubmit]=useState(false);




function handlechange(event){
    //  console.log(event.target);
     const {name,value}=event.target;
    //  console.log(value);
     setLoginvalue({...loginvalue,[name]:value});
}

const handlesubmitlogin=(event)=>{

    event.preventDefault();
     setErrorvalues(adminvalidation(loginvalue));
    //  fetchregisters();
    setIssubmit(true);
    
    }

   
    



    return (
        <div>
            <Header/>
            {Object.keys(errorvalues).length===0 && issubmit ? navigate("/adminhome") : <p>error occured</p>}
            <h1>Admin login</h1>

<div className="login">
<form onSubmit={handlesubmitlogin}>
<TextField id="outlined-basic" label="admin" variant="outlined" size="small" name="email" value={loginvalue.email} onChange={handlechange}/><br/><br/>
<p>{errorvalues.email}</p>
<TextField id="outlined-password-input" label="admin123" type="password" size="small" name="pass" value={loginvalue.pass} onChange={handlechange}/><br/><br/>
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

export default Adminlogin
