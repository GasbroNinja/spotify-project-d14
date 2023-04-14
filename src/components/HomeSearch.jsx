import React from 'react';


import "../App.css";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';


const HomeSearch = () => {
  return (
    <div className="">
      <div className="container-fluid vw-100 vh-100">
        <div className="row">
          <Sidebar />
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="/" className="text-decoration-none">
                  TRENDING
                </Link>
                <Link to="/" className="text-decoration-none">
                  PODCAST
                </Link>
                <Link to="/" className="text-decoration-none">
                  MOODS AND GENRES
                </Link>
                <Link to="/" className="text-decoration-none">
                  NEW RELEASES
                </Link>
                <Link to="/" className="text-decoration-none">
                  DISCOVER
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*END MAIN*/}
        <Player />
      
    </div>
  );
}

export default HomeSearch