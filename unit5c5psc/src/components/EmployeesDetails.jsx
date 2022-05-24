import { useContext ,useState,useEffect} from "react";
import { useParams} from "react-router-dom";
//it takes the data from the link
//http:localhost:8080/employee/5
//useparam take 5 from the link and give you to use it.

import {Navigate} from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext";


export const EmployeeDetails=()=>{
    const {isAuth}=useContext(AuthContext)
  const [employee,setEmployee]=useState({})  
const {id}=useParams()

useEffect(()=>{
    getData()
    },[])
    

async function getData(){
    const data=await fetch(`http://localhost:8080/employee/${id}`).then((d)=>d.json())
    setEmployee(data);
    console.log(data)
}
if(!isAuth)
{
    return <Navigate to={"./login.jsx"}></Navigate>
}

    return(
        <div>data</div>
    )
}