import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { backgroundImg } from '../utils/constants'


const GptSearch = () => {
  return (
    <div>
      <div className='fixed sm:absolute -z-10'>
            <img 
                className='h-screen w-screen object-cover bg-gradient-to-b from-black'
                src={backgroundImg}
                alt='background-img'
            />
        </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  )
}

export default GptSearch