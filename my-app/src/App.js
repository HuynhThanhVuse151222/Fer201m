// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import { useState, createContext } from 'react';

const ThemeContext =  createContext (null);

function App() {
  const [theme, setTheme] = useState("dark");
    const toggleTheme = () =>{
         setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id ={theme}>
     <Navigation/> 
     <Main/>
   <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
