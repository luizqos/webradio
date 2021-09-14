/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from "react-router-dom";
import Data from '../../../utils/data';

import "../../../css/global.css";
import "../../../css/materialize.css"
import "../../../css/style.css";

import player from "../../../utils/player.js"

function Radio(props) {
    const radioName = Data.map(value => value.radioName);
    const radio = radioName.indexOf(props.match.params.radio)
    
    const dados = Data.filter(value => value.radioName == props.match.params.radio)

    window.addEventListener("load", () => {
        player.start(radio);
    });

    return (
        <div className="App">
          <Link to="/">
          <button className="btn-floating btn-large black">
            <i className="large material-icons">apps</i>
          </button>
          </Link>
          <header className="App-header">
            <div id="player-controls">
              <h4>
                <i className="material-icons">equalizer</i>WebRadio
              </h4>
              <div className="card">
                <img src={dados[0].logo} className="App-logo" alt="logo" />
                <div className="card-image">
                  <button
                    onclick="togglePlayPause()" 
                    className="btn-floating btn-large halfway-fab"
                  >
                    <i className="material-icons" id="play-pause">
                      play_arrow
                    </i>
                  </button>
                </div>
                <div className="card-content">
                  <h5 className="Title">Ouvindo</h5> 
                  <p className="station">{dados[0].station}</p>
                  <div className="row valign-wrapper" id="player-controls">
                    <div>
                      <a onclick="toggleMute()">
                        <i className="material-icons" id="volume-icon">
                          volume_up
                        </i>
                      </a>
                    </div>
                    <div className="col s12 range-field valign-wrapper" id="volume">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        id="volume-control"
                        step="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    
}

export default Radio;