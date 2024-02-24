import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang)

  return (
    <div className="flex justify-center pt-[10%] ">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input placeholder={lang[langKey].gptSearchPlaceholder} className='font-bold text-black p-2 m-2 col-span-9' type='text'/>
        <button className='bg-red-600 text-white font-bold col-span-3 py-2 m-2 rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar