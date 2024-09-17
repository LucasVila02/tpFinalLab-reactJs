import { createContext, useContext, useEffect, useState} from "react"


const LoginContext = createContext();



export const useAuth = () => useContext(LoginContext);


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