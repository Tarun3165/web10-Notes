import { createContext,useState } from "react";


export const ThemeContext = createContext({ theme: "", handleThemeChange: () => { } });
function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState("light")
    
    const handleThemeChange = (() => {
      setTheme(theme==="light"? "dark":"light")
        
        })
        return (
            <ThemeContext.Provider value={{ theme,handleThemeChange }}>
            {children}
        </ThemeContext.Provider>

    );
}

export default ThemeProvider;