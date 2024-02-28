import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   name:"gpt",
   initialState:{
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
   },
   reducers:{
    toggleGPTSearchView: (state) =>{
        state.showGptSearch = !state.showGptSearch
    },
    addGptMovieResults : (state, action) =>{
        const {movieNames, movieResult} = action.payload
        state.movieNames = movieNames
        state.movieResult = movieResult
    }
   }
})

export const {toggleGPTSearchView, addGptMovieResults} = gptSlice.actions

export default gptSlice.reducer