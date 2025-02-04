import './App.css';
import { useState } from 'react';
import ChoiceButtons from './components/ChoiceButtons';
import Score from './components/Score';
import Result from './components/Result';

const Play = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const Computer = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const Winner = (player, computer) => {
    if (player === computer) {
      return "continuez";
    }
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) { 
      return 'player';
    } else {
      return 'computer';
    }
  };

  const PlayerChoice = (choice) => {
    const ordinateurChoice = Computer();
    const determinateWinner = Winner(choice, ordinateurChoice);

    setComputerChoice(ordinateurChoice);
    setPlayerChoice(choice);
    setResult(determinateWinner);

    if (determinateWinner === 'player') {
      setScore(score + 1);
    } else if (determinateWinner === 'computer') {
      setScore(score - 1);     
    }
  };

  return (
  
    <div>
      <h3>Rock</h3>
      <h3>Paper</h3>
      <h3>Scissors</h3>
      <Score score={score} />
      <ChoiceButtons choice={PlayerChoice} />
      <Result result={result} playerChoice={playerChoice} computerChoice={computerChoice} />
    </div>
  
  );
};

export default Play;
