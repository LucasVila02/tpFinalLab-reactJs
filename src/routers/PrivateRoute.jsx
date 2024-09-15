import { Navigate } from "react-router-dom"
import { useAuth } from "../context/LoginContext"



const PrivateRoute = ({children}) =>{

    const  {isLogged, loading} = useAuth()
    // const {isLogged, loading} = useAuth();

    if(loading) return <div>Loading...</div>

    if(!isLogged) return <Navigate to={'/'}/>

    return children;
}


export default PrivateRoute;