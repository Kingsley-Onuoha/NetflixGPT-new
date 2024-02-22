import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <>
      <div className='pt-[17%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-2xl font-bold mb-2'>{title}</h1>
        <p className='text-md w-3/4 mb-2'>{overview}</p>
        <div className='flex gap-x-1 mb-3'>
        <button className=' bg-white text-black font-bold p-2 px-12 text-sm rounded-lg hover:bg-gray-400 '>▶️ Play</button>
        <button className=' bg-gray-400 text-white p-2 px-7 font-bold text-sm rounded-lg'>More Info</button>
      </div>
      </div>
      
    </>
  )
}

export default VideoTitle