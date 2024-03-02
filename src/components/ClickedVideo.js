import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addThumbnailClick } from '../utils/moviesSlice'


const ClickedVideo = () => {

  const click = useSelector(store=>store.movies.thumbnailClick)

  const clickCardImg = useSelector(store=>store.movies.clickedCardImg)

  const dispatch = useDispatch()

  const handleClick = () => {

    dispatch(addThumbnailClick())

  }

  return (
    <div>
        <div className='absolute '><img className='w-screen h-screen object-fit' src={clickCardImg} alt=''/></div>
        <div className=' absolute px-5 p-2 bg-white text-black font-bold bg-opacity-80 w-20 sm:w-20 my-12 mx-auto right-0 left-0 rounded-lg'onClick={handleClick}><button>CLOSE</button></div>
    </div>
  )
}

export default ClickedVideo