import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'genre',
    initialState : {
        moviesWithGenre : null,
        moviesWithGenreTotalPages : 1
    },
    reducers : {
        addMoviesWithGenre : (state, action) => {
            const { GenreData, totalPg } = action.payload;
            state.moviesWithGenre = GenreData;
            state.moviesWithGenreTotalPages = totalPg;
        }
    }
});

export const { addMoviesWithGenre } = movieSlice.actions;
export default movieSlice.reducer;