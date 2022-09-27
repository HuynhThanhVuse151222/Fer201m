import React from "react";
import { Films } from "./shared/ListOfFilms";
import { useState } from "react";

export default function Films1() {
    const [film, setFilm] = useState([false]);
    const [isShow, setIsShow] = useState(false);
    // const show  = document.querySelector('#2s');
    // const div = document.querySelector('div');
  
    // const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal()
    const handleShowDetails = (film) => {
      setFilm(film);
      setIsShow(true);
    };
    return (
      <div className="container" id="1">
        {Films.map((film) => (
          <div className="column" key={film.id}>
            <div className="card">
              <img src={film.img} alt="pic" />
              <h3>{film.name}</h3>
              <h4>{film.titles}</h4>
              <p className="year">{film.year}</p>
              <p className='nation'>{film.nation}</p>
              <p>
                <button onClick={() => handleShowDetails(film)}>
                  <a href="#popup1" id="openPopUp">
                    Details
                  </a>
                </button>
              </p>
            </div>
          </div>
        ))}
  {isShow ? (
        <div id="popup1" className="overlay" >
          <div className="popup" id="2s">
            <img src={film.img} alt="pic" />
            <h2>{film.name}</h2>
            <p onClick={() => setIsShow(false)} className="close" href="popup1">
              &times;
            </p>
            <div className="content">Main content: {film.info}</div>
  
          </div>
  
        </div>
  ) 
  : ''}
  
        
      </div>
    );
  }