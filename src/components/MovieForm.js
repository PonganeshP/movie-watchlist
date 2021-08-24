import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieForm() {
  const { dispatch } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MOVIE", movie: { title, description } });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleAdd}>
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          id="floatingMovie"
          placeholder="Movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="floatingMovie">Movie</label>
      </div>
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          id="floatingDescription"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="floatingDescription">Description</label>
      </div>
      <button type="submit" className="btn btn-secondary float-end">
        Add
      </button>
    </form>
  );
}

export default MovieForm;
