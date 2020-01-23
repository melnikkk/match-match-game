/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.css';

function Form({ onSubmit, onNicknameChange, nickname, onDifficultyChange, difficulty, onThemeChange, theme }) {
  return (
    <form action="#" onSubmit={onSubmit}>
      <div className="nickname">
        <div className='input-block'>
          <label htmlFor="nickname" className='nickname-label'>What's your name?</label>
          <input type="name" value={nickname} onChange={onNicknameChange} />
        </div>
      </div>
      <div className='difficulty'>
        <div className='inputs'>
          <div className='input-block'>
            <label htmlFor="easy">Easy</label>
            <input type="radio" id="easy" value='12' onChange={onDifficultyChange} checked={difficulty === '12'} />
          </div>
          <div className='input-block'>
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="medium" value='16' onChange={onDifficultyChange} checked={difficulty === '16'} />
          </div>
          <div className='input-block'>
            <label htmlFor="hard">Hard</label>
            <input type="radio" id="hard" value='20' onChange={onDifficultyChange} checked={difficulty === '20'} />
          </div>
        </div>
        <div className='inputs'>
          <div className='input-block'>
            <label htmlFor="gf">Gravity Falls</label>
            <input type="radio" id="gf" value='gf' onChange={onThemeChange} checked={theme === 'gf'} />
          </div>
          <div className='input-block'>
            <label htmlFor="simpsons">The Simpsons</label>
            <input type="radio" id="simpsons" value='simpsons' onChange={onThemeChange} checked={theme === 'simpsons'} />
          </div>
          <div className='input-block'>
            <label htmlFor="duck">Duck Tales</label>
            <input type="radio" id="duck" value='duck' onChange={onThemeChange} checked={theme === 'duck'} />
          </div>
        </div>
      </div>
      <button type='submit' className='btn start-btn'>Start</button>
    </form>
  );
}

export default Form;