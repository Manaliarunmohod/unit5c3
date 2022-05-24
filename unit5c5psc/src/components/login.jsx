 import { useContext, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { AuthContext } from "../Contexts/AuthContext";
// //we can take both variable and function from is auth function


 export const Login=()=>{

 const {handleAuth}=useContext(AuthContext)
 const navigate=useNavigate();
return(
    <form onSubmit={()=>{
        handleAuth(true)
//setting handleAuth to true as we are logeed in


navigate("/",{replace:true})

        
    }}>
        <input type="text" name="username" placeholder="Enter username"/>
        <input type="text" name="password" placeholder="Enter password"/>
        <input type="submit" value="SIGN IN"/>
    </form>
)

 }