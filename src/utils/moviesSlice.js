import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        thumbnailClick: false,
        clickedCardImg:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload
        },
        addThumbnailClick: (state)=>{
            state.thumbnailClick = !state.thumbnailClick
        },
        addClickedCardimg: (state, action) =>{
            state.clickedCardImg = action.payload
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addThumbnailClick, addClickedCardimg} = moviesSlice.actions

export default moviesSlice.reducer