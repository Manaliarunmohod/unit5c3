import { useContext } from "react"
import {Link} from "react-router-dom"

import { AuthContext } from "../Contexts/AuthContext"

//import { AuthContextProvider } from "../Contexts/AuthContext"

export const Navbar=()=>{
    const {isAuth}=useContext(AuthContext)

    return (
        <div>
<Link to="/">Home   </Link>
<Link to="/employees">Employees List   </Link>
<Link to={isAuth?"/logout":"/login"}>{isAuth?"logout   ":"login   "}</Link>


        </div>
    )
}
//<Link to={isAuth?"/logout":"/login"}>{isAuth?"logout":"login"}</Link>
//const {isAuth}=AuthContext(useContext)