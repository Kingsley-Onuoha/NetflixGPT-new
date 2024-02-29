import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null
  return (
    <div className='pr-4 w-24 sm:pr-4 sm:w-32 object-contain'>
        <img 
           src={IMG_CDN + posterPath}
           alt="movie-card"
        />
    </div>
  )
}

export default MovieCard