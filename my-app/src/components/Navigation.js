
import React from 'react'
// import WebFilms from '/my-app/src/WebFilms'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {DarkModeToggle ,toggleThemeChange } from './ToggleDarkMode';
import { useState , useEffect } from 'react';
export default function  Navigation() {
 

    
    return (
        
        // <Router>
        <div id='header'> 
        
            <ul id='nav'> 

                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#news'>New</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
                {/* <Route path="my-app\src\components\PlayersPresentation.js" />
                <Link to="my-app\src\components\PlayersPresentation.js">Films</Link> */}
                <li><a href='/my-app/src/FilmPresentations.js'>Films</a></li>
                <li><a href='' className='theme'>Change Dark Mode</a></li>
            

            </ul>
        </div>
        // </Router>
    )
  }


