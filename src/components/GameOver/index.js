import React from 'react';
import './style.css'

function GameOver({ nickname, steps, difficulty }) {
    return (
        <div className='game-over'>
            <h1>Game Over</h1>
            <p>Well played, {nickname}</p>
            <p>difficulty: {difficulty}</p>
            <p>steps: {steps}</p>
            <button>Restart</button>
            <button>Menu</button>
        </div>

    )
}

export default GameOver;