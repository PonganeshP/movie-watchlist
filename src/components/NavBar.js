import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function NavBar(props) {
  const { movies } = useContext(MovieContext);
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 mx-auto">
          Grab some Pop-Corn !
        </span>
      </div>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 mx-auto">
          You have {movies.length} movies in watchlist.
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
