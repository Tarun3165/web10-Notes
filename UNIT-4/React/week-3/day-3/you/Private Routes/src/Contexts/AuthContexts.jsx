import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "", handletokenChange: () => { }
});



function AuthProvider({ children }) {
    
    const [token, setToken] = useState("")

    const handletokenChange = ((token) => {
        setToken(token)
    })
    return (
        <AuthContext.Provider value={{token,handletokenChange}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;