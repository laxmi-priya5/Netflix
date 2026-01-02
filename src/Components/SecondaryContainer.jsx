import React from 'react'
import MovieList from './movieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='bg-black  pl-4 -mr-5 '>
      <div className=' -mt-34  relative'> 
      <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"}  movies={movies.popularMovies}/>
      <MovieList title={"Horrer"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"}  movies={movies.poularMovies}/>
      <MovieList title={"Documentaries"}  movies={movies.nowPlayingMovies}/>

    </div>
    </div>
    // <div>
    //   secondary container
    // </div>
  )
} 

export default SecondaryContainer