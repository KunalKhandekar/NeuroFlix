import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        MovieName: null,
        MovieData: null
    },
    reducers: {
        addMovieData: (state, actions) => {
            const { movieNames, movieData } = actions.payload;
            state.MovieName = movieNames;
            state.MovieData = movieData;
        }
    }
});

export const { addMovieData } = suggestionSlice.actions;
export default suggestionSlice.reducer;