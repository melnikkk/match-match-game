import React from 'react';

import ReactCardFlip from "react-card-flip";

let images = []; 

function importAll(r) {
  r.keys().forEach((s, i,) => images[i] = r(s));
}

// importAll(require.context('../assets/GF', true, /\.png$/));

function Card({ id, cardVal, isFlipped, onClick }) {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
            <div className={`card card-front ${cardVal === -1 ? '' : 'hide'}`} id={id} onClick={onClick} key='front'>

            </div>

            <div className='card card-back' id={id} onClick={onClick} key='front'>
                {cardVal}
                <img src={images[cardVal - 1]} alt=""/>
            </div>
        </ReactCardFlip>
    )
}

export default Card;