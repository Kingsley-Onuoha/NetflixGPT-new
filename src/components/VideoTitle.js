import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <>
      <div className='pt-[10%] sm:pt-[17%] sm:px-16 px-8  absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-md sm:text-3xl font-bold mb-2'>{title}</h1>
        <p className='text-xs sm:text-md w-3/4 mb-2'>{overview}</p>
        <div className='flex gap-x-1 mb-2'>
        <button className=' bg-white text-black font-bold p-2 px-6 sm:px-12 text-sm rounded-lg hover:bg-gray-400 '>▶️ Play</button>
        <button className=' bg-gray-600 text-white p-2 px-5 sm:px-7 font-bold text-sm rounded-lg'>More Info</button>
      </div>
      </div>
      
    </>
  )
}

export default VideoTitle