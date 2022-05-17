import { useState,useeffect } from "react";
import {link} from "react-router-dom"


export const EmployeeList =()=>{

const [Employee,setEmployee]=useState([])

useeffect(()=>{
    getData()
},[])

async function getData(){
const data=await fetch("http://localhost:8080/employee").then(d=>d.json())
setEmployee(data)
}

    return (
<div></div>
    )
}