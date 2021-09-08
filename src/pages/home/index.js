import React from "react";
import "../../css/boxes.css";
import "../../css/custom.css";

import { Link } from "react-router-dom";

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
                  <a href="/radio/jpbh" className="box-titulo">
                    <img src="./logo/jpbh.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/jpsp" className="box-titulo">
                    <img src="./logo/jpsp.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/98live" className="box-titulo">
                    <img src="./logo/98live.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/977" className="box-titulo">
                    <img src="./logo/977.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/antena1" className="box-titulo">
                    <img src="./logo/antena1.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/alvorada" className="box-titulo">
                    <img src="./logo/alvorada.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/cdl" className="box-titulo">
                    <img src="./logo/cdl.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/clube" className="box-titulo">
                    <img src="./logo/clube.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/mix" className="box-titulo">
                    <img src="./logo/mix.png" />
                  </a>
                </div>
                <div className="box">
                  <a href="/radio/89" className="box-titulo">
                    <img src="./logo/89.png" />
                  </a>
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
