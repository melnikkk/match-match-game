import React from 'react';
import './style.css';

function GameOver({ nickname, steps, onMenuClick, onRestartClick }) {
  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <p>Well played, {nickname}!</p>
      <p>You do it in {steps} steps</p>
      <div className='btn-block'>
        <button className='btn' onClick={onRestartClick}>Restart</button>
        <button className='btn' onClick={onMenuClick}>Menu</button>
      </div>
    </div>

  );
}

export default GameOver;