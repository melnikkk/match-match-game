import React, {useState} from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game';
import './assets/styles/style.less'

function App() {
  const state = {
    nickname: null,
    gameStart: false,
    difficulty: null,
  }
  const [nickname, setNickname] = useState('player');

  const [difficulty, setDifficulty] = useState('12');

  const onDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  }

  const onNicknameChange = (e) => {
    setNickname(e.target.value);
  }

  const [gameParam, setGameParam] = useState(state)

  const onStartClick = (e) => {
    e.preventDefault()
    setGameParam({
      nickname: nickname,
      gameStart: true,
      difficulty: difficulty,
    })
  }
  
  return (
    <div className="the-game">
      {gameParam.gameStart ? <Game gameParam={gameParam}/> : <StartPage onSubmit={onStartClick} onNicknameChange={onNicknameChange} nickname={nickname} onDifficultyChange={onDifficultyChange} difficulty={difficulty} />}
    </div>
  );
}

export default App;
