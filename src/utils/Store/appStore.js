import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GenreSlice from "./GenreSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie : movieSlice,
        genre : GenreSlice
    }
});


export default appStore;