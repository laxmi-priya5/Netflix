import React from 'react'
import { useEffect } from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {

    //here just create a custom hooks and fetch all movies and update the redux store
    useNowPlayingMovies();
    usePopularMovies();
  return (
    <div className='relative '>
        {/* 
         
         -header
         -MainContainer
           - background video
           - title
         -secondary container
           - n row of cards
           - n col of cards
        
        
        */}
        {/* <GptSearch/> */}
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse