/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

function MovieDetails({movie}) {
    const {dispatch}=useContext(MovieContext);
    return (
        <div class="card sm moviecard">
            <div class="row g-0">
                <div class="col-md-8">
                    <h5 class="card-title moviename">
                        {movie.title}
                    </h5>
                    <div class="card-body">
                        {movie.description}
                    </div>
                </div>
                <div class="col-md-4">
                    <a onClick={()=>dispatch({type:"REMOVE_MOVIE",id:movie.id})} class="btn btn-danger deletebutton float-end">Watched</a>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;