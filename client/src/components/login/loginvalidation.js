
function loginvalidation(loginvalues){
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   
    if(!loginvalues.email){
       errors.email="email required";
   }
   else if(!regex.test(loginvalues.email)){
       errors.email="email is invalid";
   }
   if(!loginvalues.pass){
      errors.pass="password is required";
   }
   else if(loginvalues.pass.length<5){
       errors.pass="password is too short";
   }

   return errors;

}
export default loginvalidation