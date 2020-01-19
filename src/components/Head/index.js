import React from 'react';
import './style.css';
import StopWatch from '../StopWatch';

function Head({ steps, nickname, onNewGameClick, onMenuClick }) {
  return (
    <nav className='head'>
      <div>
        <p>Steps: <span>{steps}</span></p>
      </div>
      <p>{nickname}</p>
      <div className='btn-block'>
        <button className='btn' onClick={onNewGameClick}>New Game</button>
        <button className='btn' onClick={onMenuClick}>Menu</button>
      </div>
    </nav>
  );
}

export default Head;