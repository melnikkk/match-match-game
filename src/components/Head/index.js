import React, { useState } from 'react';
import './style.css'

function Head({ steps, nickname, onNewGameClick }) {
    return (
        <nav className='head'>
            <p>Steps: <span>{steps}</span></p>
            <p>{nickname}</p>
            <div>
                <button onClick={onNewGameClick}>New Game</button>
                <button onClick={onNewGameClick}>Menu</button>
            </div>
        </nav>
    )
}

export default Head