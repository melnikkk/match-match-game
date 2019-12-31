import React from 'react';

function Form({onSubmit, onNicknameChange, nickname, onDifficultyChange, difficulty}) {
    return (
        <form action="#" onSubmit={onSubmit}>
            <div className="nickname">
                <label htmlFor="nickname">Nickname:</label>
                <input type="name" value={nickname} onChange={onNicknameChange}/>
            </div>
            <div className='difficulty'>
                <label htmlFor="easy">Easy</label>
                <input type="radio" id="easy" value='12' onChange={onDifficultyChange} checked={difficulty === '12'}/>

                <label htmlFor="medium">Medium</label>
                <input type="radio" id="medium" value='16' onChange={onDifficultyChange} checked={difficulty === '16'}/>

                <label htmlFor="hard">Hard</label>
                <input type="radio" id="hard" value='20' onChange={onDifficultyChange} checked={difficulty === '20'}/>
            </div>
            <button type='submit'>Start</button>
        </form>
    )
}

export default Form;