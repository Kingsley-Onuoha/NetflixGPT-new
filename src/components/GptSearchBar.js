import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {

  const searchText = useRef(null)

  const dispatch = useDispatch()

  const langKey = useSelector((store)=>store.config.lang)

  const searchMovieTMDB = async(movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query= " + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json()

    return json.results
  }

  const handleGptSearch = async() =>{

    const gptQuery ="Act as a movie recommendation system and subject some movies for the query: "+ searchText.current.value +".only give me names of five movies, comma separated like the example result given ahead. Example result: lion's heart, Isakaba, Happy ending, love affair, Happy ever after "

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });


    //handling error
    if (!gptResults.choices){
      
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)


    dispatch(addGptMovieResults({movieResult :tmdbResults, movieNames : gptMovies}))

  }

  return (
    <div className="flex justify-center pt-[10%] ">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg" onSubmit={(e) =>{
        e.preventDefault()
      }}>
        <input ref={searchText} placeholder={lang[langKey].gptSearchPlaceholder} className='font-bold text-black p-2 m-2 col-span-9' type='text'/>
        <button className='bg-red-600 text-white font-bold col-span-3 py-2 m-2 rounded-lg' onClick={handleGptSearch}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar