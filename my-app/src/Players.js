import React from "react";
import { Players } from "./shared/ListOfPlayers";
import { useState } from "react";



export default function Players1() {
  const [player, setPlayer] = useState([false]);
  const [isShow, setIsShow] = useState(false);
  // const show  = document.querySelector('#2s');
  // const div = document.querySelector('div');

  // const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal()
  const handleShowDetails = (player) => {
    setPlayer(player);
    setIsShow(true);
  };
  return (
    <div className="container" id="1">
      {Players.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} alt="pic" />
            <h3>{player.name}</h3>
            <p className="title"></p>
            <p>
              <button onClick={() => handleShowDetails(player)}>
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
          <img src={player.img} alt="pic" />
          <h2>{player.name}</h2>
          <p onClick={() => setIsShow(false)} className="close" href="popup1">
            &times;
          </p>
          <div className="content">Main content:{player.info}</div>

        </div>

      </div>
) 
: ''}

      
    </div>
  );
}
