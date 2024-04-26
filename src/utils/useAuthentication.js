import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Store/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const useAuthentication = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({ uid, email, displayName, photoURL })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [])
}

export default useAuthentication;
