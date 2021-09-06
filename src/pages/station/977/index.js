import Logo from "./img/logo/logo.png";
import Radio from "./stationInfo.js";
import "../../../css/style.css";
import "../../../css/global.css";
import player from "../../../utils/player.js"


var radio = Radio[0];
console.log('Qual radio:',radio.station);

//console.log('Qual radio:',Radio[0]);


window.addEventListener("load", () => {
  player.start();
});

const Station = () => {
  return (
    <div className="App">
      <a className="btn-floating btn-large black">
        <i className="large material-icons">apps</i>
      </a>
      <header className="App-header">
        <div id="player-controls">
          <h4>
            <i className="material-icons">equalizer</i>WebRadio
          </h4>
          <div className="card">
            <img src={Logo} className="App-logo" alt="logo" />
            <div className="card-image">
              <a
                onclick="togglePlayPause()" 
                className="btn-floating btn-large halfway-fab"
              >
                <i className="material-icons" id="play-pause">
                  play_arrow
                </i>
              </a>
            </div>
            <div className="card-content">
              <h5 className="Title">Ouvindo</h5>
              <p className="station">.977 today's Hits</p>
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
};

export default Station;
