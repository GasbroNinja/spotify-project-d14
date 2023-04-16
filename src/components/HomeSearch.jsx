import React, {  useState } from 'react';
import logoSpot from "../assets/logo/Spotify_Logo.png";

import "../App.css";
import { Link } from 'react-router-dom';
//import Sidebar from './Sidebar';
import Player from './Player';
import AlbumCard from './AlbumCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsAction } from '../redux/actions';


const HomeSearch = () => {
    const album = useSelector((state) => state.album.content);
    const dispatch = useDispatch();
    
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
    setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(getAlbumsAction(query));
    };


    





  return (
    <div className="">
      <div className="container-fluid vw-100 vh-100">
        <div className="row">
          <div className="col-2">
            <nav
              className="navbar navbar-expand-md navbar-dark bg-navbar fixed-left justify-content-between p-3"
              id="sidebar"
            >
              <div className="nav-container">
                <Link
                  className="navbar-brand d-flex justify-content-center p-0 me-0 mb-3"
                  to="/"
                >
                  <img
                    className=""
                    src={logoSpot}
                    alt="Spotify_Logo"
                    width={131}
                    height={40}
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <a className="nav-item nav-link" href="/">
                          <i className="fas fa-home fa-lg" />
                          &nbsp; Home
                        </a>
                      </li>
                      <li>
                        <Link className="nav-item nav-link" to="/">
                          <i className="fas fa-book-open fa-lg" />
                          &nbsp; Your Library
                        </Link>
                      </li>
                      <li>
                        <div className="input-group mt-3">
                          <input
                            onChange={handleChange}
                            value={query}
                            type="text"
                            className="form-control mb-2"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div
                            className="input-group-append"
                            style={{ marginBottom: "4%" }}
                          >
                            <button
                              className="btn btn-outline-secondary btn"
                              type="button"
                              id="button-addon1"
                              onClick={handleSubmit}
                            >
                              GO
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-btn">
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
                <Link to="/">
                  <br />
                  Cookie Policy
                </Link>
                |<Link to="/"> Privacy</Link>
              </div>
            </nav>
          </div>

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
                <div id="searchResults">
                  <h2>Search Results:</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                    {album.map((albumData) => (
                      <AlbumCard key={albumData.id} data={albumData} />
                    ))}
                  </div>
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