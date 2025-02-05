import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageRules from '../images/image-rules-bonus.svg'
const Home = () => {
  const [showRules, setShowRules] = useState(false); 

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div>
      <h1>Bienvenue sur RPS Game !</h1>
      <p>Cliquez ci-dessous pour commencer à jouer.</p>
      <button className='choice-button'>
        <Link to="/play">Jouer</Link>
      </button>

     
      <button onClick={toggleRules} className='choice-button'>Voir les règles</button>

      
      {showRules && (
        <div>
          <h2>Règles du jeu :</h2>
          <img 
            src={imageRules} 
            alt="Règles du jeu" 
            style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }} 
          />
        </div>
      )}
    </div>
  );
};

export default Home;
