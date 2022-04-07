import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
 const [movies, setMovies] = useState([]);
 const [searchValue, setSearchValue] = useState("");


const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=21bfc730`;

  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

 return (
   <div className="container-fluid justify-content-start movie-app">
     <h1>Hello</h1>
     <div className="row">
       <MovieListHeading heading="Movies" />
       <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
     </div>
     <div class="container">
     <div className="row">
       <MovieList movies={movies} />
     </div>
     </div>
   </div>
 );
 
};

export default App;
