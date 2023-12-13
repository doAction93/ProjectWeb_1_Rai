"use client"

import React, { useState } from 'react'
import style from '../pages/login/login.module.scss';
import Headers from '../component/Header'
import Footer from '../component/Footer'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('userData')) || [];

        const newData = [{ email, password }];

        localStorage.setItem('userData', JSON.stringify(newData));

        console.log('All Data:', newData);

        setEmail('');
        setPassword('');

        console.log('All Data:', newData);
        console.log('Last Entry:', { email, password });  
    }
        
    return (
        <>
        <Headers/>
            <section className={style.login_section}>
                <article>
                    <div>
                        <h3>Welcome back!</h3>
                        <p>Please enter your details</p>

                    </div>
                </article>

                <article className={style.labels}>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <label>
                                <p>Email</p>
                                <input type='email' name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label>
                                <p>Password</p>
                                <input type='password' name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <label >
                                <div>
                                    <input type='checkbox' />
                                    <p>Remember me</p>
                                </div>
                                <a href="#">Forgot Password?</a>
                            </label>
                            <input type="submit" value="Login"></input>
                        </form>
                    </div>
                </article>

                <article className={style.seperate}>
                    <div>
                        <span></span>
                        <p>Or</p>
                        <span></span>
                    </div>
                </article>

                <article className={style.api}>
                    <div>
                        <button><img src='../../../login/google.png' />Google</button>
                        <button><img src='../../../login/microsoft.png' />Microsoft</button>
                    </div>
                </article>

                <article className={style.sign_up}>
                    <div>
                        <p>Don’t have an account ?</p>
                        <a href='./signup'> Sign up</a>
                    </div>
                </article>
            </section>
            <Footer/>
        </>
    )
}

export default Login
