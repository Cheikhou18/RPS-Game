import React from "react";

const Result = ({playerChoice, computerChoice, result}) => {

    return (
        <div className="result-container">
            <h3>Result {result === 'continuez' ? 'Continuez'
            : result === 'player' ? 'You Win'
            : 'You Lose'} </h3> 
            <p>You choose : {playerChoice}</p>
            <p>Computer choose : {computerChoice}</p>
        </div>
    )
}

export default Result;