import { useState,useEffect } from "react";
//import {link} from "react-router-dom"


export const EmployeeList =()=>{

const [Employee,setEmployee]=useState([])

useEffect(()=>{
getData()
},[])

async function getData(){
const data=await fetch("http://localhost:8080/employee").then(d=>d.json())
setEmployee(data)
//console.log(data);
}

    return (
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",marginTop:"30px"}}>
    
    {Employee.map((e)=>{
        return(
            <div key={e.id}>
           <div> {e.employee_name}</div>    
           <div><img src={e.image}/></div>
           <div>{e.title}</div>
                </div>
        )

    })}

</div>
    )
}