import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../..";
import "./index.scss"
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Login=()=>{

    const firebaseConfig = {
        apiKey: "AIzaSyB68gCe94AIXTn6HyC97n42tAUXEnzJp1E",
        authDomain: "auth-3afb9.firebaseapp.com",
        projectId: "auth-3afb9",
        storageBucket: "auth-3afb9.appspot.com",
        messagingSenderId: "792092191381",
        appId: "1:792092191381:web:b3c3b6f805524a4a8d899c"
      };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const provider = new GoogleAuthProvider();
    
    const token = useSelector((state)=>state.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onEmailChange =(e)=>{
        setEmail(e.target.value);
    }

    const onPasswordChange =(e)=>{
        setPassword(e.target.value);
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        setEmail("")
        setPassword("")
    }

    const onGoogleLoginWidgetClick=async()=>{
        await signInWithPopup(auth,provider)
            .then((result)=>{
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            
            //localStorage.setItem("name",name);
            //localStorage.setItem("email",email);
            //localStorage.setItem("profilePic",profilePic);
            dispatch(setToken({token:{name,email,profilePic}}));
        })
        .catch((error)=>{
            console.log(error)
        })
        
        navigate("/home")
    }
    
    return(
        <div className="login-page">
            <div className="header-section">
                <h1 className="header-section__text">Board.</h1>
            </div>
            <div className="login-section">
                <div>
                    <div style={{textAlign:"left"}}>
                        <span className="login-section__title">Sign In</span>
                        <br/>
                        <span className="login-section__description">Sign in to your account</span>
                    </div>
                    <div className="login-widgets-wrapper">
                        <button className="login-widget-button" onClick={onGoogleLoginWidgetClick}>
                            <FcGoogle className="login-widget-button__icon"/>
                            <span className="login-widget-button__text">Sign in with Google</span>
                        </button>
                        <button className="login-widget-button">
                            <FaApple className="login-widget-button__icon" style={{color : "#858585"}}/>
                            <span className="login-widget-button__text">Sign in with Apple</span>
                        </button>
                    </div>
                    <form className="login-form" onSubmit={onFormSubmit}>
                        <div className="login-form__fieldcontainer">
                            <label htmlFor="email" className="login-form__label">Email address</label>
                            <br/>
                            <input type="email" id="email" placeholder="Email" className="login-form__inputfield" value={email} onChange={onEmailChange}/>
                        </div>
                        <div className="login-form__fieldcontainer">
                            <label htmlFor="password" className="login-form__label">Password</label>
                            <br/>
                            <input type="password" id="password" placeholder="Password" className="login-form__inputfield" value={password} onChange={onPasswordChange}/>
                        </div>
                        <a href=" " className="login-form__forgot-text">Forgot password?</a>
                        <div>
                            <button className="login-form__button" type="submit">Sign In</button>
                        </div>
                    </form>
                    <p className="regester-account-text">Don't have an account? <a href=" " className="regester-account-text__link">Register here</a></p>
                </div>
                
            </div>
        </div>
    )
}
export default Login