import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  console.log(movies)
  return (
    
    <div className=''>
        <h1 className=" text-white sm:py-2">{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex ' >
             {movies?.map(movie =>
             <MovieCard key={movie?.id} posterPath={movie?.poster_path} title={movie?.title} overview={movie?.overview}/>
             )}
            </div>
       </div>
    </div>
  )
}

export default MovieList