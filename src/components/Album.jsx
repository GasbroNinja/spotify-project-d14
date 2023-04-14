import React from 'react'

import "../App.css";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';


const Album = (props) => {
  return (
    <div>
      <div className="container-fluid vw-100 vh-100">
        <div className="row">
          <Sidebar />
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="/:album" className="text-decoration-none">
                  TRENDING
                </Link>
                <Link to="/:album" className="text-decoration-none">
                  PODCAST
                </Link>
                <Link to="/:album" className="text-decoration-none">
                  MOODS AND GENRES
                </Link>
                <Link to="/:album" className="text-decoration-none">
                  NEW RELEASES
                </Link>
                <Link to="/:album" className="text-decoration-none">
                  DISCOVER
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 pt-5 text-center" id="img-container">
                
              </div>
              <div className="col-md-8 p-5">
                <div className="row">
                  <div className="col-md-10 mb-5" id="trackList">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*END MAIN*/}
      {/*NAVBAR FLEX-BOTTOM*/}
        <Player />
      {/*END NAVBAR BOTTOM*/}
    </div>
  );
}

export default Album