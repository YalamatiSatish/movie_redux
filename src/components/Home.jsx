import React , {useEffect} from 'react';
import MovieListing from './MovieListing';
import movieAPI from '../common/movieAPI';
import {APIkey} from '../common/MovieAPIKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/movies/MovieSlice';


const Home = () => {
  const Searchterm = 'movie'
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async ()=> {
      const response = await movieAPI
      .get(`?apikey=${APIkey}&s=${Searchterm}&type= movie`)
      .catch((err)=>{console.log('Error from APi', err)})
      dispatch(addMovies(response.data) )
    } 
    fetchMovies()
  }, [])
  
  return (
    <div className='bg-blue-400'>   
      <MovieListing/>
    </div>
  )
}

export default Home