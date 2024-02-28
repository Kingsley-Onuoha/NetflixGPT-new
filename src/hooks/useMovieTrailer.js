import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()

    const trailerVideo = useSelector((store)=> store.movies.trailerVideo)

    // fetching trailer video and updating store with trailer video data

    const getMovieTrailer = async ()=>{
        const data = await fetch ('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter (video => video.type === "Trailer")

        const trailer = filterData[0]


        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() =>{
        !trailerVideo && getMovieTrailer()
    }, []) 



}

export default useMovieTrailer