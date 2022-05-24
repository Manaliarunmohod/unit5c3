import { createContext, useState } from "react"
// //to acess variable and function any where in app
 export const AuthContext =createContext()



 export const AuthContextProvider=({children})=>{
    const [isAuth,setAuth]=useState(false)

    const handleAuth=(state)=>{
        setAuth(state)
    }
return(
             <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
         )
         }
        


//isAuth will be true or false state,it will tell your app whether u are logged in or not handleAuth is function to toggle between true or false