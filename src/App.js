import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 App rounded  ">
          <MovieContextProvider>
            <NavBar />
            <MovieList />
            <MovieForm />
          </MovieContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
