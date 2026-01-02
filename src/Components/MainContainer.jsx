import React from 'react'
// import VideoBackground from './VideoBackground.jsx'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)

    if(!movies) return ;

    const mainMovie = movies[0];
   
    const {original_title , overview , id} = mainMovie;
  return (
    <div className='relative h-screen w-screen'>
       <VideoBackground id={id} />
       <div className="absolute inset-0 bg-black/80"></div>
       <VideoTitle title={original_title} overview={overview}/>
       
    </div>
    // <div>
    //   main container
    // </div>
  )
}

export default MainContainer