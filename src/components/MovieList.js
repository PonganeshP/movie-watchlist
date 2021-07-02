import React,{useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieDetails from './MovieDetails';

const MovieList = () => {
    const {movies}=useContext(MovieContext);
    return movies.length?( 
        <div className="movielist">{movies.map((movie)=><MovieDetails movie={movie} key={movie.id}/> )}
    </div>):(<div className="empty">
      No Movies in watchlist !!
  </div>);
}
 
export default MovieList;