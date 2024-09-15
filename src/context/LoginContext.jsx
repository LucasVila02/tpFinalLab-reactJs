import { createContext, useContext, useEffect, useState} from "react"

//Crear Contexto
const LoginContext = createContext();


// Hook para acceder al contexto
export const useAuth = () => useContext(LoginContext);

//provider
export const LoginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if(token){
        setIsLogged(true)
        }else{
        setIsLogged(false)
        }

        setLoading(false)
    }, [])
  


    const onLogin = async() => {
        setLoading(true)
        let token = "12345"
        await sleep(2000)
        localStorage.setItem("token", token)
        setIsLogged(true);
        setLoading(false)
    } 

    //revisar este codigo si es necesario
    const sleep = (ms) => new Promise( (resolve) =>setTimeout(resolve, ms))

    const onLogout = () => {
        localStorage.removeItem("token")
        setIsLogged(false);
    } 

  

    return(
        <LoginContext.Provider value={{isLogged, 
                onLogin, 
                onLogout, 
                loading}}>
            {children}
        </LoginContext.Provider>
    )
};