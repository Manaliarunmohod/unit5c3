import { useState } from 'react'
import {Navbar} from "./components/Navbar"
import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {EmployeeList} from"./components/EmployeeList"
 import {Login} from "./components/login"
 import {Logout} from "./components/Logout";
 import {EmployeeDetails} from "./components/EmployeesDetails"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/employees" element={<EmployeeList/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/logout" element={<Logout/>}></Route>
<Route path="/employees/:id" element={<EmployeeDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App
//<Route path="/login" element={<Login/>}></Route>
//<Route path="/logout" element={<Logout/>}></Route>
