import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addClickedCardimg, addThumbnailClick } from '../utils/moviesSlice'



const MovieCard = ({posterPath, overview}) => {

  const click = useSelector(store=>store.movies.thumbnailClick)

  const clickCardImg = useSelector(store=>store.movies.clickedCardImg)

  const dispatch = useDispatch()

  const handleClick = (e) => {

    dispatch(addThumbnailClick())

    dispatch(addClickedCardimg(e.target.currentSrc))

    console.log(e.target.innerHTML)

  }

  if(!posterPath) return null
  return (
    <div 
    className='pr-4 w-24 sm:pr-4 sm:w-32 object-contain cursor-pointer'
    onClick={handleClick}
    >
        <img 
           src={IMG_CDN + posterPath}
           alt="movie-card"
        />
    </div>
  )
}

export default MovieCard