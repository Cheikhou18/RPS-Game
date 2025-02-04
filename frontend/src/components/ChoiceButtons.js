import React from "react";
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"


const ChoiceButtons = ({choice}) => {

    return (
        <div className="choice-buttons-container">
            <button onClick={()=> choice('rock')}>Rock</button>
            <img src={rock}/>
            <button onClick={()=> choice('paper')}>Paper</button>
            <img src={paper}/>
            <button onClick={()=> choice('scissors')}>Scissors</button>
            <img src={scissors}/>
        </div>
    )
}

export default ChoiceButtons;