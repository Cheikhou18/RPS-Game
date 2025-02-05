import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";
import "../App.css";

const ChoiceButtons = ({ choice }) => {
  return (
    <div className="choice-buttons-container">
      <div className="choice-container">
        <button className="choice-button" onClick={() => choice("rock")}>
          Rock
        </button>
        <img className="choice-image" src={rock} alt="Rock" />
      </div>
      <div className="choice-container">
        <button className="choice-button" onClick={() => choice("paper")}>
          Paper
        </button>
        <img className="choice-image" src={paper} alt="Paper" />
      </div>
      <div className="choice-container">
        <button className="choice-button" onClick={() => choice("scissors")}>
          Scissors
        </button>
        <img className="choice-image" src={scissors} alt="Scissors" />
      </div>
      <div className="choice-container">
        <button className="choice-button" onClick={() => choice("lizard")}>
          Lizard
        </button>
        <img className="choice-image" src={lizard} alt="Lizard" />
      </div>
      <div className="choice-container">
        <button className="choice-button" onClick={() => choice("spock")}>
          Spock
        </button>
        <img className="choice-image" src={spock} alt="Spock" />
      </div>
    </div>
  );
};

export default ChoiceButtons;
