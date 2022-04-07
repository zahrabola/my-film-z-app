import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';

const App = () => {
 const [movies, setMovies] = useState([]);
 const [searchValue, setSearchValue] = useState("");
 const [favourites, setFavourites] = useState([]);


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



  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  

  
	const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

 return (
   <div className="container-fluid movie-app">
     <h1>Hello</h1>
     <div className="row">
       <MovieListHeading heading="Movies" />
       <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
     </div>
     <div className="row">
       <MovieList
         movies={movies}
         handleFavouritesClick={addFavouriteMovie}
         favouriteComponent={AddFavourite}
       />
     </div>
     <div className="row d-flex align-items-center mt-4 mb-4">
       <MovieListHeading heading="Favourites" />
     </div>
     <div className="row">
       <MovieList
         movies={favourites}
         handleFavouritesClick={addFavouriteMovie}
         favouriteComponent={AddFavourite}
       />
     </div>
   </div>
 );
 
};

export default App;
