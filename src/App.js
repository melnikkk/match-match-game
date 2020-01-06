import React, { useState, useEffect } from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game'

function App() {
  const defaultParam = {
    nickname: null,
    difficulty: null,
    theme: 'gf',
  }

  const [nickname, setNickname] = useState('player');
  const [difficulty, setDifficulty] = useState('12');
  const [theme, setTheme] = useState('gf');

  const onDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  }

  const onNicknameChange = (e) => {
    setNickname(e.target.value);
  }

  const onThemeChange = (e) => {
    setTheme(e.target.value);
  }

  const [gameParam, setGameParam] = useState(defaultParam);
  const [gameStart, setGameStart] = useState(false);

  const onStartClick = (e) => {
    e.preventDefault();

    setGameParam({
      nickname: nickname,
      difficulty: difficulty,
      theme: theme,
    });

    setGameStart(true);
  }
  
  return (
    <div 
    className="the-game"
    style={{
      backgroundImage: `url(/img/${theme}/main-bg.JPG)`
    }}
    >
      {gameStart ? <Game gameParam={gameParam} /> : <StartPage onSubmit={onStartClick} onNicknameChange={onNicknameChange} nickname={nickname} onDifficultyChange={onDifficultyChange} difficulty={difficulty} onThemeChange={onThemeChange} theme={theme}/>}
    </div>
  );
}

export default App;
