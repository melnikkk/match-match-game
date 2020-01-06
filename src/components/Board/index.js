import React from 'react';
import './style.css'
import Card from '../Card'

function Board({ dimension, cards, flipped, handleClick, disabled, solved, theme, difficulty }) {
    return (
        <div className='board'
            style={
                {gridTemplateRows: `repeat(${difficulty / 5}, 1fr)`}
            }
        >
            {cards.map(card => (
                <Card
                    key={card.id}
                    type={card.type}
                    id={card.id}
                    width={dimension / 6.5}
                    height={dimension / 4.5}
                    flipped={flipped.includes(card.id)}
                    solved={solved.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                    theme={theme}
                />
            ))}
        </div>
    )
}

export default Board