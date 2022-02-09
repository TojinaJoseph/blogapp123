
function adminvalidation(loginvalues){
    const errors={};
    
    if(!loginvalues.email){
       errors.email="email required";
   }
   else if(loginvalues.email !="admin"){
       errors.email="admin invalid";
   }
   if(!loginvalues.pass){
      errors.pass="password is required";
   }
   else if(loginvalues.pass != "admin123"){
       errors.pass="password is invalid";
   }

   return errors;

}
export default adminvalidation