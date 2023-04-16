
import "../App.css";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import Singles from './Singles';


const Artist = () => {
    const ARTIST_URL =
      "https://striveschool-api.herokuapp.com/api/deezer/artist/";
    const BASE_URL_SEARCH =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

    const params = useParams();

    const [artistData, setArtistData] = useState([]);
    const [artistSong, setArtistSong] = useState([]);

    useEffect(() => {
      const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setArtistData(data);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData(`${ARTIST_URL}${params.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const { data } = await response.json();
            setArtistSong(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      if (artistData) {
        fetchData(`${BASE_URL_SEARCH}${artistData.name}`);
      }
    }, [artistData]);




  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="" className="text-decoration-none">
                  TRENDING
                </Link>
                <Link to="" className="text-decoration-none">
                  PODCAST
                </Link>
                <Link to="" className="text-decoration-none">
                  MOODS AND GENRES
                </Link>
                <Link to="" className="text-decoration-none">
                  NEW RELEASES
                </Link>
                <Link to="" className="text-decoration-none">
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
        </div>
        {artistData && (
          <>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain">{artistData.name}</h2>
                <div id="followers">{artistData.nb_fan} followers</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success mr-2 mainButton d-inline"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton d-inline"
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
                  <div className="row row-cols-4">
                    {artistSong.map((song) => (
                      <Singles key={song.id} song={song} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
          
        {/*END MAIN*/}
        {/*NAVBAR FLEX-BOTTOM*/}
        <Player />
        {/*END NAVBAR BOTTOM*/}
      </div>
    </div>
  );
}

export default Artist;