import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../features/movies/MovieSlice';
import Moviecard from './Moviecard';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "The";

  renderMovies = 
  movies?.Response === "True" ? (
    movies.Search?.map((movie, index) =>(
      <Moviecard key = {index} data={movie} />
    )
    )
  ) :(<h3>{movies.Error}</h3>)
console.log(movies,"....movies")
  return (
    <div className='grid grid-rows-2 gap-4'>
      <div>{renderMovies}</div>
      <Moviecard />
    </div>
  )
}

export default MovieListing