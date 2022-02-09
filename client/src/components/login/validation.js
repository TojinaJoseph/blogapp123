
function validation(formvalues){
     const errors={};
     const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    

     if(!formvalues.uname){
         errors.uname="username required";
     }
     if(!formvalues.email){
        errors.email="email required";
    }
    else if(!regex.test(formvalues.email)){
        errors.email="email is invalid";
    }
    if(!formvalues.pass){
       errors.pass="password is required";
    }
    else if(formvalues.pass.length<5){
        errors.pass="password is too short";
    }
    if(!formvalues.cpass){
        errors.cpass="confirm password";
     }
     else if(formvalues.pass!=formvalues.cpass){
         errors.cpass="password need to be same";
     }

    return errors;

}
export default validation