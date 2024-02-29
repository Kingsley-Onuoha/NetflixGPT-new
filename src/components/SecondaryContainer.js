import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store?.movies)

  return movies && (<div className='bg-black'>
      <div className='relative z-20 sm:pl-12 sm:-mt-52 pl-4'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>

        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>

        <MovieList title={"Popular"} movies={movies?.popularMovies}/>

      </div>
    </div>
  )
}

export default SecondaryContainer