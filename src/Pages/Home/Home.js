import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ValidationLogin, ValidationSignUp } from '../../utils/validate';
import useAuthentication from "../../utils/useAuthentication";
import { addUser } from '../../utils/Store/userSlice';
import { toast } from "react-toastify";
import svg1 from '../../images/svg-image-10.png';
import svg2 from '../../images/svg-image-11.png';
import svg3 from '../../images/svg-image-12.png';
import svg4 from '../../images/svg-image-13.png';
import React, { useRef, useState } from 'react';
import avatar from '../../images/avatar.png';
import { auth } from '../../utils/Firebase';
import { useDispatch } from 'react-redux';
import Logo from '../../images/Logo.png';
import './Home.css';

const Home = () => {

    // Authentication
    useAuthentication();

    // useState Constant
    const dispatch = useDispatch();
    const [UserLoggedIN, setUserLoggedIN] = useState(false);
    const [LoginErrorMessage, setLoginErrorMessage] = useState(null);
    const [SignUpErrorMessage, setSignUpErrorMessage] = useState(null);

    // Login Constants
    const Loginemail = useRef(null);
    const Loginpassword = useRef(null);

    // Signup Constants
    const SignUpEmail = useRef(null);
    const SignUpPassword = useRef(null);
    const userName = useRef(null);

    // Toggling SignIN && SignUP
    const handleClick = () => {
        setUserLoggedIN(!UserLoggedIN);
        if (Loginemail.current) Loginemail.current.value = "";
        if (Loginpassword.current) Loginpassword.current.value = "";
        if (SignUpEmail.current) SignUpEmail.current.value = "";
        if (userName.current) userName.current.value = "";
        if (SignUpPassword.current) SignUpPassword.current.value = "";
    }

    // Handling Login
    const handleLogin = () => {
        const message = ValidationLogin(Loginemail.current.value, Loginpassword.current.value);
        setLoginErrorMessage(message);

        if (message) return;

        signInWithEmailAndPassword(auth, Loginemail.current.value, Loginpassword.current.value)
        .then((userCredential) => {
                toast.success("Login Successful");
                const user = userCredential.user;
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ uid, displayName, email, photoURL }));
                
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/invalid-credential') {
                    setLoginErrorMessage('User Not Found !!');
                }


            });
    }

    // Handling Sign UP
    const handleSignUP = () => {
        const message = ValidationSignUp(userName.current.value, SignUpEmail.current.value, SignUpPassword.current.value);
        setSignUpErrorMessage(message);

        if (message) return;
        createUserWithEmailAndPassword(auth, SignUpEmail.current.value, SignUpPassword.current.value)
        .then((userCredential) => {
                toast.success("Sign Up Successful");
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: userName.current.value, photoURL: avatar
                }).then(() => {
                    // Profile updated!
                    const { uid, displayName, email, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid, displayName, email, photoURL }));

                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSignUpErrorMessage(errorCode);
            });
    }

    // Rendering the Component
    return (
        <>
            <div className="bg-vignity">
                <div className="max-w">
                    <header>
                        <nav>
                            <div className="logo">
                                <img src={Logo} alt="Netflix" />
                            </div>
                            <div className="lang-signin flex items-center">
                                <button onClick={handleClick}>
                                    {UserLoggedIN ? 'Sign Up' : 'Sign In'}
                                </button>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="max-w">
                    <div className="get-started">
                        {UserLoggedIN ?

                            <>
                                <div className='signIN_box'>
                                    <h1>Sign IN</h1>
                                    <div className="form">
                                        <input ref={Loginemail} className='inputBox' type="email" required placeholder="Email address" />
                                        <input ref={Loginpassword} className='inputBox' type="password" required placeholder="Password" />
                                        <p className='error_message'>{LoginErrorMessage}</p>
                                        <button onClick={handleLogin}>
                                            Sign IN
                                        </button>
                                    </div>
                                    <p>New User ? <span onClick={handleClick}>Sign UP</span> </p>
                                </div>
                            </>

                            :

                            <><div className='signUP_box'>

                                <h1 className="text-xl">SIGN UP</h1>

                                <div className="form">
                                    <input className='inputBox' ref={SignUpEmail} type="email" required="true" placeholder="Email address" />
                                    <input className='inputBox' ref={userName} type="text" required="true" placeholder="Username" />
                                    <input className='inputBox' ref={SignUpPassword} type='password' required="true" placeholder="Password" />
                                    <p className='error_message'>{SignUpErrorMessage}</p>
                                    <button onClick={handleSignUP}>
                                        Get Started <span>&gt;</span>
                                    </button>
                                </div>
                                <p>Existing User ? <span onClick={handleClick}>Sign IN</span> </p>
                            </div></>}
                    </div>
                </div>
            </div>
            <div className="curve-line">
                <div className="box" />
            </div>
            <div className="black-container">
                {/* Plans */}
                <div className="max-w">
                    <div className="plans-container">
                        <h2 className="capitalize font-semibold">A plan to suit your needs</h2>
                        <div className="plan-box">
                            <div className="pack">
                                <h2 className="font-bold">PREMIUM</h2>
                                <p className="context">
                                    A cinematic experience with the best picture and audio quality.
                                </p>
                                <p>₹649/month</p>
                            </div>
                            <div className="pack">
                                <h2 className="font-bold">STANDARD</h2>
                                <p className="context">
                                    All the entertainment you love, in Full HD video quality.
                                </p>
                                <p>₹449/month</p>
                            </div>
                            <div className="pack">
                                <h2 className="font-bold">BASIC</h2>
                                <p className="context">
                                    A great way to enjoy all your favourite shows and movies on a
                                    budget.
                                </p>
                                <p>₹199/month</p>
                            </div>
                            <div className="pack">
                                <h2 className="font-bold">MOBILE</h2>
                                <p className="context">
                                    A travel-friendly option for your mobile devices.
                                </p>
                                <p>₹149/month</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Memebership */}
                <div className="max-w">
                    <div className="memebership">
                        <h2>Get More From Your Membership</h2>
                        <div className="game-box">
                            <div className="content">
                                <h1>Mobile games now included in every plan</h1>
                                <p>
                                    No ads, extra fees, or in-app purchases. Enjoy unlimited access to
                                    a growing catalogue of popular and exclusive games.
                                </p>
                            </div>
                            <div className="game-image">
                                <img
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/nmhp/games-sm.png"
                                    alt="games"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reasons */}
                <div className="max-w">
                    <div className="reasons">
                        <h2>More reasons to join</h2>
                        <div className="reason-box">
                            <div className="rbox">
                                <h1>Stories tailored to your taste</h1>
                                <div className="r-img">
                                    <img src={svg1} />
                                </div>
                            </div>
                            <div className="rbox">
                                <h1>Cancel or switch plans anytime</h1>
                                <div className="r-img">
                                    <img src={svg2} />
                                </div>
                            </div>
                            <div className="rbox">
                                <h1>A place just for kids</h1>
                                <div className="r-img">
                                    <img src={svg3} />
                                </div>
                            </div>
                            <div className="rbox">
                                <h1>For your phone, tablet, laptop and TV</h1>
                                <div className="r-img">
                                    <img src={svg4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* footer */}
                <div className="max-w">
                    <footer>
                        <p>Questions? Call 000-800-919-1694</p>
                        <div className="main-footer-menu">
                            <div className="first">
                                <p>FAQ</p>
                                <p>Help Centre</p>
                                <p>Account</p>
                                <p>Media Centre</p>
                            </div>
                            <div className="second">
                                <p>Investor Relations</p>
                                <p>Jobs</p>
                                <p>Ways to Watch</p>
                                <p>Terms of Use</p>
                            </div>
                            <div className="third">
                                <p>Privacy</p>
                                <p>Cookie Preferences</p>
                                <p>Corporate Information</p>
                                <p>Contact Us</p>
                            </div>
                            <div className="fourth">
                                <p>Speed Test</p>
                                <p>Legal Notices</p>
                                <p>Only on Netflix</p>
                            </div>
                        </div>
                        <p>NeuroFlix India</p>
                    </footer>
                </div>
            </div>
        </>


    )
}

export default Home
