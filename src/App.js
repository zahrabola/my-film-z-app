import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
 const [movies, setMovies] = useState([]);


const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=avengers&apikey=21bfc730`;

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
    setMovies(responseJson.Search);

};

  useEffect(() => {
    getMovieRequest();
  }, []);
 return (
   <div className="container-fluid movie-app">
     <h1>Hello</h1>
     <div className="row d-flex align-items-center mt-4 mb-4">
       <MovieList movies={movies} />
     </div>
   </div>
 );
 
};

export default App;
