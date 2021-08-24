/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieDetails({ movie }) {
  const { dispatch } = useContext(MovieContext);
  return (
    <div className="card sm moviecard">
      <div className="row g-0">
        <div className="col-md-8 cardTile">
          <h5 className="card-title moviename">{movie.title}</h5>
          <div className="card-body">{movie.description}</div>
        </div>
        <div className="col-md-4">
          <a
            onClick={() => dispatch({ type: "REMOVE_MOVIE", id: movie.id })}
            className="btn btn-danger deletebutton float-end"
          >
            Watched
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
