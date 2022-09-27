import React from 'react';
import { Players } from './shared/ListOfPlayers';
import { useState } from 'react';
const  PlayerDetails = (playerD) => {
    return(
        <div>
        {Players.map((player)=>(
            <div id='popup1' className='overlay'>
            <div class="popup">
            <img src = {player.img} alt='pic'/>
            <h2>{player.name}</h2>
            <a className='close' href='#openPopUp'>&times;</a>
            <div className='content'>
              {player.info}
            </div>
          </div>
          </div>
              ))}
          </div>
    )
        }
        export default PlayerDetails;
          
            
        
