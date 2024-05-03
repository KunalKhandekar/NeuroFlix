import { addUser, removeUser } from "./Store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./Firebase";

const useAuthentication = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse"); // Navigate to the browse page if user is signed in
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/"); // Navigate to the home page if user is signed out
            }
        });

        // Unsubscribe from the authentication state changes when the component unmounts
        return () => unsubscribe();
    }, [dispatch, navigate]); // Dependency array to prevent unnecessary re-renders
}

export default useAuthentication;
