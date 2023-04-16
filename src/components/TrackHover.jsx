import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavouritesAction,
  isPlayAction,
  removeFromFavouritesAction,
} from "../redux/actions";

const TrackHover = ({ song }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);
  const isplay = useSelector((state) => state.isPlay);
  const isInFavourites = favourites.includes(song.id);
  return (
    <div>
      <div className="py-3 d-flex justify-content-between align-items-center text-white">
        <button
          type="button"
          className={`btn ${
            isplay && isplay.id === song.id ? "text-success" : "text-white"
          }`}
          onClick={() => {
            dispatch(isPlayAction(song));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
        <Link to="#" className="px-3">
          {song.title}
        </Link>
        <button
          type="button"
          className={`btn ${isInFavourites ? "text-warning" : "text-white"}`}
          onClick={() => {
            isInFavourites
              ? dispatch(removeFromFavouritesAction(song.id))
              : dispatch(addToFavouritesAction(song.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill lh-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        </button>
        <small className="duration">{song.duration}</small>
      </div>
    </div>
  );
};
export default TrackHover;
