import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        nowPlayingTotalPages : 1,
        popularTotalPages : 1,
        topRatedTotalPages : 1
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            const { movieData, totalPg } = action.payload;
            state.nowPlayingMovies = movieData;
            state.nowPlayingTotalPages = totalPg;
        },
        addPopularMovies : (state, action) => {
            const { movieData, totalPg } = action.payload;
            state.popularMovies = movieData;
            state.popularTotalPages = totalPg;
        },
        addTopRatedMovies : (state, action) => {
            const { movieData, totalPg } = action.payload;
            state.topRatedMovies = movieData;
            state.topRatedTotalPages = totalPg;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;