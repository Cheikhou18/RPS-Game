import React from "react";

const Score = ({ playerScore, computerScore }) => {
    return (
        <div className="score-container">
            <p>Votre score : {playerScore}</p>
            <p>Score de l'ordinateur : {computerScore}</p>
        </div>
    );
}

export default Score;
