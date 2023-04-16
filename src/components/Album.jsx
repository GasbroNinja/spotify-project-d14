import React, { useEffect, useState } from 'react'

import "../App.css";
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import TrackHover from './TrackHover';
const URL_ALBUM_TO_SINGLE ="https://striveschool-api.herokuapp.com/api/deezer/album/";

const Album = () => {

  const params = useParams();
  const [albumData, setAlbumData] = useState([]);


  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAlbumData(data);
          
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(`${URL_ALBUM_TO_SINGLE}${params.id}`);

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div>
      <div className="container-fluid vw-100 vh-100">
        <div className="row">
          <Sidebar />
          {/*MAIN*/}
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="/album/:id" className="text-decoration-none">
                  TRENDING
                </Link>
                <Link to="/album/:id" className="text-decoration-none">
                  PODCAST
                </Link>
                <Link to="/album/:id" className="text-decoration-none">
                  MOODS AND GENRES
                </Link>
                <Link to="/album/:id" className="text-decoration-none">
                  NEW RELEASES
                </Link>
                <Link to="/album/:id" className="text-decoration-none">
                  DISCOVER
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 pt-5 text-center" id="img-container">
                {albumData && (
                  <div className="row">
                    <div
                      className="col-md-3 pt-5 text-center"
                      id="img-container"
                    >
                      <img
                        src={albumData.cover_medium}
                        className="card-img img-fluid"
                        alt="Album"
                      />
                      <div className="mt-4 text-center">
                        <p className="album-title">{albumData.title}</p>
                      </div>
                      <div className="text-center">
                        <p className="artist-name">{albumData.name}</p>
                      </div>
                      <div className="mt-4 text-center">
                        <button
                          id="btnPlay"
                          className="btn btn-success"
                          type="button"
                        >
                          Play
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-md-8 p-5">
                  <div className="row">
                    <div className="col-md-10 mb-5" id="trackList">
                      <div className="row">
                        <div className="col-md-10 mb-5">
                          {albumData.tracks.data.map((song) => (
                            <TrackHover key={song.id} song={song} />
                          ))}
                        </div>
                      </div>
                    </div>
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