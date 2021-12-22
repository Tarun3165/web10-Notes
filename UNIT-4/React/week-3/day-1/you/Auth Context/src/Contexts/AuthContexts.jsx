import { createContext,useState } from "react";
export const AuthContext = createContext({token:"", handletokenChange: ()=> { } });



function AuthContextProvider({ children }) {
    
    const [token, setToken] = useState("")

    const handletokenChange = (() => {
        setToken(token === "" ?  "234ghj3f4gh":"")
    })
    return (
        <AuthContext.Provider value={{token,handletokenChange}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;