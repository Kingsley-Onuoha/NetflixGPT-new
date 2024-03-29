import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchSuggestions = () => {
  const {movieResult, movieNames} = useSelector((store)=> store.gpt )

  if(!movieNames) return null

  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {movieNames.map((movieName, index) =>(
          <MovieList 
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
      
    </div>
  )
}

export default GptSearchSuggestions