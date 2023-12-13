"use client"

import React, { useState } from 'react'
import style from '../pages/signup/signup.module.scss';
import Headers from '../component/Header'
import Footer from '../component/Footer'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('userData')) || [];

        const newData = [{ email, password }];


        localStorage.setItem('userData', JSON.stringify(newData));


        console.log('All Data:', newData);

        setEmail('');
        setPassword('');

        console.log('All Data:', newData);
        console.log('Last Entry:', { email, password });  // 마지막으로 입력된 데이터만 출력
    }


    return (
        <>
        <Headers/>
            <section className={style.signup_section}>
                <article>
                    <div>
                        <h3>Welcome!</h3>
                        <p>Please enter details to sign up</p>
                    </div>
                </article>

                <article className={style.labels}>
                    <div>
                    <form onSubmit={handleSubmit2} >
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
                            <input type="submit" value="Sign up"></input>
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

                <article className={style.log_in}>
                    <div>
                        <p>Already have an account ?</p>
                        <a href='./login'> Log in</a>
                    </div>
                </article>


            </section>
            <Footer/>
        </>
    )
}

export default Signup
