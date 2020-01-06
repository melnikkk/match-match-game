import React from 'react';

function Form({ onSubmit, onNicknameChange, nickname, onDifficultyChange, difficulty, onThemeChange, theme }) {
    return (
        <form action="#" onSubmit={onSubmit}>
            <div className="nickname">
                <label htmlFor="nickname">Nickname:</label>
                <input type="name" value={nickname} onChange={onNicknameChange} />
            </div>
            <div className='difficulty'>
                <div>
                    <label htmlFor="easy">Easy</label>
                    <input type="radio" id="easy" value='12' onChange={onDifficultyChange} checked={difficulty === '12'} />

                    <label htmlFor="medium">Medium</label>
                    <input type="radio" id="medium" value='16' onChange={onDifficultyChange} checked={difficulty === '16'} />

                    <label htmlFor="hard">Hard</label>
                    <input type="radio" id="hard" value='20' onChange={onDifficultyChange} checked={difficulty === '20'} />
                </div>
                <div>
                    <label htmlFor="gf">Gravity Falls</label>
                    <input type="radio" id="gf" value='gf' onChange={onThemeChange} checked={theme === 'gf'} />

                    <label htmlFor="simpsons">The Simpsons</label>
                    <input type="radio" id="simpsons" value='simpsons' onChange={onThemeChange} checked={theme === 'simpsons'} />

                    <label htmlFor="duck">Duck Tales</label>
                    <input type="radio" id="duck" value='duck' onChange={onThemeChange} checked={theme === 'duck'} />
                </div>
            </div>
            <button type='submit'>Start</button>
        </form>
    )
}

export default Form;