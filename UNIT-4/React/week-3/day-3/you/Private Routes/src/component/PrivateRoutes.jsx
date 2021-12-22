import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContexts"
import { Redirect,Route} from "react-router-dom"


export default function PrivateRoute({ children, exact, path, to ,push}) {
    
    const { token } = useContext(AuthContext)
    if (!token)
        return <Redirect push={push} to={to||"/login"} />

    return (
        <div>
            <Route exact={exact} path={path}>{ children}</Route>
        </div>
    )
}