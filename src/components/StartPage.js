import React, {useState} from 'react';
import Form from './Form'

function StartPage({onSubmit, onNicknameChange, nickname, onDifficultyChange, difficulty}) {

    return (
        <div>
            <h1>Memory match game</h1>
            <Form onSubmit={onSubmit} onNicknameChange={onNicknameChange} nickname={nickname} onDifficultyChange={onDifficultyChange} difficulty={difficulty}/>
        </div>
    )
}

export default StartPage;