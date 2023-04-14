import React from 'react';

import "../App.css";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';


const Artist = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="/:artist" className="text-decoration-none">
                  TRENDING
                </Link>
                <Link to="/:artist" className="text-decoration-none">
                  PODCAST
                </Link>
                <Link to="/:artist" className="text-decoration-none">
                  MOODS AND GENRES
                </Link>
                <Link to="/:artist" className="text-decoration-none">
                  NEW RELEASES
                </Link>
                <Link to="/:artist" className="text-decoration-none">
                  DISCOVER
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain">{/*data.artist.title*/}</h2>
                <div id="followers"> 
                
                </div>  
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success mr-2 mainButton d-none"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton d-none"
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>
                <div className="pt-5 mb-5">
                  <div className="row" id="apiLoaded" />
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

export default Artist