import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from "react-router-dom"
import Logo from '../../images/Group.jpg'
import Img from '../../images/image.svg'
import { useRecoilState } from 'recoil';
import { userState } from '../../components/atom/UserAtom'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);


    const [user, setuser] = useRecoilState(userState)


    const navigate = useNavigate();

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // const { email, password } = user;
        if (email && password) {
            setuser({ email, password })
            navigate("../users", { replace: true })

        } else {
            console.log(error);
        }

    }

    return (
        <div className='login-page'>
            <div className="login-logo">
                <img src={Logo} alt="lendsgr logo" />
            </div>

            <div className="login-section">

                <div className='login-image'>
                    <img src={Img} alt="login image" />
                </div>

                <div className="login-container">

                    <div className="login-text">
                        <h2>Welcome!</h2>
                        <p>Enter details to login.</p>
                    </div>
                    <form className='login-form' onSubmit={handleLogin}>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type={passwordShown ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span onClick={togglePassword}>{passwordShown ? 'hide' : 'show'} </span>

                        <p>forgot password?</p>

                        <button className='login-btn'>Log in</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login