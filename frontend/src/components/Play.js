import '../App.css';
import { useState } from 'react';
import ChoiceButtons from './ChoiceButtons';
import Score from './Score';
import Result from './Result';
import imageRules from '../images/image-rules-bonus.svg';

const Play = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const Computer = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const Winner = (player, computer) => {
    if (player === computer) {
      return "continuez";
    }
    if (
      (player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
      (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
      (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
      (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
      (player === 'spock' && (computer === 'scissors' || computer === 'rock'))
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  };

  const PlayerChoice = (choice) => {
    if (gameOver) return;

    const ordinateurChoice = Computer();
    const determinateWinner = Winner(choice, ordinateurChoice);

    setComputerChoice(ordinateurChoice);
    setPlayerChoice(choice);
    setResult(determinateWinner);

    if (determinateWinner === 'player') {
      setPlayerScore((prev) => {
        if (prev + 1 === 5) {
          setGameOver(true);
        }
        return prev + 1;
      });
    } else if (determinateWinner === 'computer') {
      setComputerScore((prev) => {
        if (prev + 1 === 5) {
          setGameOver(true);
        }
        return prev + 1;
      });
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h3 className="game-title">Rock Paper Scissors Lizard Spock</h3>
      <Score playerScore={playerScore} computerScore={computerScore} />
      <ChoiceButtons choice={PlayerChoice} />
      <Result result={result} playerChoice={playerChoice} computerChoice={computerChoice} />

      {gameOver && (
        <div className="game-over">
          <h2>{playerScore === 5 ? "Vous avez gagné !" : "L'ordinateur a gagné !"}</h2>
          <button onClick={resetGame} className="reset-button">Rejouer</button>
        </div>
      )}

      <button onClick={() => setShowRules(!showRules)} className="rules-button">
        Voir les règles
      </button>

      {showRules && (
        <div className="rules-container">
          <h2>Règles du jeu :</h2>
          <img 
            src={imageRules} 
            alt="Règles du jeu" 
            className="rules-image"
          />
        </div>
      )}
    </div>
  );
};

export default Play;
