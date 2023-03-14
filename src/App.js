// import logo from "./logo.svg";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
// eslint-disable-next-line
//  6eda9b26

const api_url = "http://www.omdbapi.com/?apikey=6eda9b26";
// const movie1 = {
//   Title: "The Avengers",
//   Year: "2012",
//   imdbID: "tt0848228",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
// };
const App = () => {
  const [movies, SetMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    const dataSearch = data.Search;
    SetMovies(dataSearch);
    console.log(dataSearch.length);
    // const name_movie = data.Search
  };

  useEffect(() => {
    searchMovie("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>NontonLAHH</h1>
      <div className="search">
        <input
          placeholder="Insert Title/Actor/Country"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() =>searchMovie(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movies={movies[0]} /> */}
          {movies.map((movie)=>(
            <MovieCard movies={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
