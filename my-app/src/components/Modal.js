import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
function Modal (closeModal){
 return(
  <div className='background'>
    <div className='container'>
      <button>X</button>
      <div className='title'>
        <h1>U want to continue ?</h1>
      </div>
      <div className='body'>
        <p>ronaldo</p> 
      </div>
      <div className='footer'>
        <button>Cancel</button>
      </div>
    </div>
  </div>
 );
}
export default Modal;
