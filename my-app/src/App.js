// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Main2 from './components/Main2';
import Navigation from './components/Navigation';
import { useState, createContext } from 'react';



function App() {


  return (
    
    <div className="App" id='dark'>
     <Navigation/> 
     <Main2 />
   <Footer/>
    </div>
  );
}

export default App;
