import { createContext, useContext, useState} from "react"

//Crear Contexto
const ThemeContext = createContext();


// Hook para acceder al contexto
export const useTheme = () => useContext(ThemeContext);

//provider

export const ThemeProvider = ({children}) => {

    const [theme , setTheme]= useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};