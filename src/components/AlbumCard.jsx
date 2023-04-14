
import React from 'react'
//import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const AlbumCard = ({ data }) => {
    //const dispatch = useDispatch();

  return (
    <>
      <div class="col text-center" id={data.id}>
        <Link to={`/${data.album.id}`}>
          <img class="img-fluid" src={data.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/${data.album.id}`}>
            Album: {data.album.title}
            <br></br>
          </Link>
          <Link to={`/${data.artist.id}`}>Artist: {data.artist.name}</Link>
        </p>
      </div>
    </>
  );
}

export default AlbumCard
