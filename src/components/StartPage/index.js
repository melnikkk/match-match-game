import React from 'react';
import Form from '../Form';
import './style.css';

function StartPage({ onSubmit, onNicknameChange, nickname, onDifficultyChange, difficulty, onThemeChange, theme }) {

  return (
    <div className='start-page'>
      <h1 className='title'>Memory match game</h1>
      <Form
        onSubmit={onSubmit}
        onNicknameChange={onNicknameChange}
        nickname={nickname}
        onDifficultyChange={onDifficultyChange}
        difficulty={difficulty}
        onThemeChange={onThemeChange}
        theme={theme}
      />
    </div>
  );
}

export default StartPage;