
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GenreSlice from "./GenreSlice";
import suggestionSlice from "./suggestionSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        genre: GenreSlice,
        suggestion: suggestionSlice 
    }
});

export default appStore;
