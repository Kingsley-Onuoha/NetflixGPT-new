import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import ClickedVideo from './ClickedVideo'



const Browse = () => {
  const click = useSelector(store=>store.movies.thumbnailClick)

  const showGptSearch = useSelector(store =>store.gpt.showGptSearch)

  useNowPlayingMovies()

  useTopRatedMovies()

  usePopularMovies()
  
  return (
    <div>
      <Header />
      {showGptSearch ? 
      <GptSearch /> :
      (click? <ClickedVideo /> :<><MainContainer /><SecondaryContainer /></>)
      }
    </div>
  )
}

export default Browse