/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../css/boxes.css";
import "../../css/custom.css";
import Radios from  "../../utils/data.js";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          <i className="material-icons">equalizer</i>WebRadio
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="boxes">
                  {Radios.map(function(radio){
                    return <div className="box">
                      <a href={radio.page} className="box-titulo">
                    <img src= {radio.logo}/>
                  </a>
                  </div>
                  })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Home;
