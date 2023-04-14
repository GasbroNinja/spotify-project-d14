import React, { useState } from 'react'
import logoSpot from "../assets/logo/Spotify_Logo.png";
import "../App.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsAction } from '../redux/actions';


const Sidebar = () => {

  return (
    <>
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link" href="index.html">
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
    </>
  );
}

export default Sidebar