import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addTopRatedMovies } from "../utils/moviesSlice"


const useTopRatedMovies = () => {

  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)
   // Fetching data from TMDB API and updating store

   const dispatch = useDispatch()

   const getTopRatedMovies = async ()=>{
   const data = await fetch ('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
   const json = await data.json()
 
   dispatch(addTopRatedMovies(json.results))
 }
 
 useEffect(() => {
 
    !topRatedMovies && getTopRatedMovies()
 
 }, [])
}

export default useTopRatedMovies