import React from "react";
import "../../css/boxes.css";

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
                <div className="box">
                  <div className="box-content">
                    <a className="box-titulo">antena</a>
                  </div>
                </div>
                <div className="box">
                  <div className="box-content">
                    <a className="box-titulo">988</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Home;
