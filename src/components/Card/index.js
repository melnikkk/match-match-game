import React from 'react';
import './style.css'

function Card({ handleClick, id, type, flipped, solved, height, width, disabled, theme }) {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, height
            }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className='flipper'>
                <img
                    style={{
                        width,
                        height
                    }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? `img/${theme}/${type}.png` : `img/${theme}/back.jpg`}
                    alt='Card'
                />

            </div>
        </div>
    )
}

export default Card;