import React, { useState } from 'react';
import Card from './Card'

function Game({ gameParam }) {
    const shuffleCards = () => {
        const pairsOfCardsVal = Array(+gameParam.difficulty / 2).fill(0).map((e, i) => e = i).reduce((acc, cur) => acc.concat(cur, cur), [])

        function shuffle(arr) {
            let j, temp;
            for (let i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }

        return shuffle(pairsOfCardsVal);
    }

    const [cards, setCards] = useState({
        flippedCards: Array(+gameParam.difficulty).fill(false),
        clicksCounter: 1,
        stepsCounter: 0,
        cardsArr: shuffleCards(),
        prevCard: null,
        prevCardId: null,
    });

    const cardMatch = (cardVal1, cardVal2, cardId1, cardId2) => {
        if (cardVal1 === cardVal2) {
            const newCardsArr = cards.cardsArr.slice();

            newCardsArr[cardId1] = -1;
            newCardsArr[cardId2] = -1;

            setTimeout(() => {
                setCards({
                    ...cards,
                    cardsArr: newCardsArr,
                })
            }, 1500);

            console.log('right');

        } else {
            const flipBack = cards.flippedCards.slice();

            flipBack[cardId1] = false;
            flipBack[cardId2] = false;

            setTimeout(() => {
                setCards({
                    ...cards,
                    flippedCards: flipBack,
                })
            }, 1500);

            console.log('error');
        }
    }

    const onCardClick = (e) => {
        const cardId = e.target.id;
        const cardVal = cards.cardsArr[cardId];
        const newFlippedCards = cards.flippedCards.slice();
        console.log(cardId, cardVal, newFlippedCards)

        setCards({
            ...cards,
            prevCardId: cardId,
            prevCard: cardVal,
        });

        if (!newFlippedCards[cardId]) {
            newFlippedCards[cardId] = true;

            setCards({
                ...cards,
                flippedCards: newFlippedCards,
                clicksCounter: cards.clicksCounter + 1,
            });
        }

        if (cards.clicksCounter === 2) {
            const prevCardId = cards.prevCardId;
            const newCard = cards.cardsArr[cardId];
            const prevCard = cards.prevCard;

            setCards({
                ...cards,
                clicksCounter: 1,
                stepsCounter: cards.stepsCounter + 1,
            });

            cardMatch(prevCard, newCard, prevCardId, cardId); 
        }
        console.log(cards.flippedCards)
    }

    return (
        <div>
            <h1>{gameParam.difficulty}</h1>
            <div className="cards-container">
                {cards.cardsArr.map((elem, index) =>
                    <Card
                        key={index}
                        id={index}
                        cardVal={elem}
                        onClick={onCardClick}
                        isFlipped={cards.flippedCards[index]}
                    />
                )}
            </div>
        </div>
    )
}

export default Game;