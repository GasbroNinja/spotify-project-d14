import React from 'react'
import Nextbtn from "../assets/playerbuttons/Next.png";
import Playbtn from "../assets/playerbuttons/Play.png";
import Prevbtn from "../assets/playerbuttons/Previous.png";
import Repeatbtn from "../assets/playerbuttons/Repeat.png";
import Shufflebtn from "../assets/playerbuttons/Shuffle.png";
import { useSelector } from 'react-redux';


const Player = () => {

  const isplay = useSelector((state) => state.isPlay);

  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="row">
              <div className="col-lg-2">
                <div className="d-flex align-items-center justify-content-center">
                  {isplay && (
                    <>
                      <img src={isplay.album.cover_small} alt="" />
                      <p className="ps-2 text-truncate text-white">
                        {isplay.title}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                    <div className="row row-cols-5">
                      <a>
                        <img src={Shufflebtn} alt="shuffle" />
                      </a>
                      <a>
                        <img src={Prevbtn} alt="shuffle" />
                      </a>
                      <a>
                        <img src={Playbtn} alt="shuffle" />
                      </a>
                      <a>
                        <img src={Nextbtn} alt="shuffle" />
                      </a>
                      <a>
                        <img src={Repeatbtn} alt="shuffle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center playBar py-3">
                  <div className="col-8 col-md-6">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player