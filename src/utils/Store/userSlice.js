import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        uid : null,
        displayName : null,
        email : null,
        photoURL : null,
    },
    reducers : {
        addUser : (state, action)=> {
            const {uid, displayName, email, photoURL } = action.payload
            state.uid = uid;
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
        },
        removeUser : () => {
            return {
                uid : null,
                displayName : null,
                email : null,
                photoURL : null,
            };
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;