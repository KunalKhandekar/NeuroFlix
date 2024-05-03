import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GenreSlice from "./GenreSlice";
import suggetionSlice from "./suggetionSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie : movieSlice,
        genre : GenreSlice,
        suggestion : suggetionSlice
    }
});


export default appStore;