import { useState } from 'react'
import {Navbar} from "./components/Navbar"
import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {EmployeeList} from"./components/EmployeeList"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/employees" element={<EmployeeList/>}></Route>

     </Routes>
    </div>
  )
}

export default App
