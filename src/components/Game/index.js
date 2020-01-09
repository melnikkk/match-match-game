import React, { useState, useEffect } from 'react';
import Board from '../Board'
import Head from '../Head'
import GameOver from '../GameOver'
import initializeDeck from '../../deck/deck'

function Game({ gameParam, backToMenu }) {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [steps, setSteps] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
    const isGameOver = () => {
        if (solved.length === gameParam.difficulty - 2) return true
        else return false
    }

    const onNewGameClick= () =>{
        setSteps(0);
        setDisabled(false);
        setSolved([]);
        setFlipped([]);
    }

    const handleClick = (id) => {
        setDisabled(true);

        if (flipped.length === 0) {
            setFlipped([id]);
            setDisabled(false);

        } else {
            if (sameCardClicked(id)) return

            setFlipped([flipped[0], id]);
            setSteps(steps + 1);

            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                setFlipped([]);
                setDisabled(false);
                resetCards();

            } else {
                setTimeout(resetCards, 1500);
            }

            if (isGameOver()) {
                setGameOver(true);
            }
        }
    }

    const resetCards = () => {
        setFlipped([]);
        setDisabled(false);
    }

    const isMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id);
        const flippedCard = cards.find((card) => flipped[0] === card.id);

        return flippedCard.type === clickedCard.type;
    }

    const sameCardClicked = (id) => flipped.includes(id);

    useEffect(() => {
        resizeBoard();
        setCards(initializeDeck(+gameParam.difficulty))
    }, []);

    //   useEffect(() => {
    //     preloadImages();
    //   }, cards)

    //   const preloadImages = () => {
    //     cards.map((card) => {
    //       const src = `/img/${card.type}.png`
    //       new Image().src = src; 
    //     })
    //   }

    const resizeBoard = () => {
        setDimension(
            Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            )
        )
    }

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard);

        return () => window.removeEventListener('resize', resizeListener);
    })

    const onMenuClick = () => {
        backToMenu()
        onNewGameClick()
    }

    const onRestartClick = () => {
        onNewGameClick();
        setGameOver(false);
    }

    return (
        <div className="game">
            <Head nickname={gameParam.nickname} steps={steps} onNewGameClick={onNewGameClick} onMenuClick={onMenuClick}/>

            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
                theme={gameParam.theme}
                difficulty={gameParam.difficulty}
            />

            {gameOver ? <GameOver nickname={gameParam.nickname} steps={steps} difficulty={gameParam.difficulty} onMenuClick={onMenuClick} onRestartClick={onRestartClick} /> : ''}
        </div>
    );
}

export default Game;
