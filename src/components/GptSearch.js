import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { backgroundImg } from '../utils/constants'


const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
            <img 
                className='bg-gradient-to-b from-black'
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