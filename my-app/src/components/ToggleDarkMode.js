import { useState, createContext } from 'react';


const ThemeContext =  createContext (null);
   
  function App(){
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () =>{
         setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className='AppT' id={theme}>
                        <App/>
                </div>

        </ThemeContext.Provider>
    );
  }

  