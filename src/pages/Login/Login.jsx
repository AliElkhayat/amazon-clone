import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/login-logo.png"
import "./Login.css"
import { auth } from '../../firebase/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            if (userCredential) {
                navigate("/");
            }
        });
    };
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate("/");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <>
            <div className='login'>
                <Link to="/">
                    <img className="login-logo" src={Logo} alt="logo-img" />
                </Link>
                <div className="login-container">
                    <h1>Sign in</h1>
                    <form>
                        <label htmlFor="email"><h5>Email</h5></label>
                        <input type="email" id='email' name='email' autoComplete='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label htmlFor="password"> <h5>Password</h5></label>
                        <input type="password" id='password' name='password' autoComplete='new-password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className="login-signInBtn" type="submit" onClick={signIn} >
                            Sign in
                        </button>
                        <p>
                            By continuing, you agree to Amazon's Fake Clone Conditions of Use
                            and Privacy Notice.
                        </p>
                        <button className="login-registerBtn" onClick={register} >
                            Create your Amazon Account
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
