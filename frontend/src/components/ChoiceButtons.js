import React from "react";
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"
import lizard from "../images/icon-lizard.svg"
import spock from "../images/icon-spock.svg"



const ChoiceButtons = ({choice}) => {

    return (
        <div className="choice-buttons-container">
            <button onClick={()=> choice('rock')}>Rock</button>
            <img src={rock}/>
            <button onClick={()=> choice('paper')}>Paper</button>
            <img src={paper}/>
            <button onClick={()=> choice('scissors')}>Scissors</button>
            <img src={scissors}/>
            <button onClick={()=> choice('lizard')}>Lizard</button>
            <img src={lizard}/>
            <button onClick={()=> choice('spock')}>Spock</button>
            <img src={spock}/>
        </div>
    )
}

export default ChoiceButtons;