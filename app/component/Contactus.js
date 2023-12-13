"use client"
import React, { useState } from 'react'
import Headers from '../pages/header/page'
import Footer from '../pages/footer/page'
import contactusSt from "../pages/Contact/contactus.module.scss";
import { useParams } from 'next/navigation'


function Contactus() {

    const params = useParams();

    console.log(params.email)
    const [email, setEmail] = useState('');
    return (
        <>
            <Headers/>
            <div className={contactusSt.contact}>
                <div className={contactusSt.contactTalk}>
                    <b>Let’s Talk</b>
                    <p className={contactusSt.contactTalktxt}>
                    We're here to help! Whether you have a question about our products or services, need <br/>
                    assistance with your order, or simply want to learn more about our company,  we're <br/>
                    happy to hear from you.
                    </p>
                </div>
                <div className={contactusSt.contactTalkimg}>
                    <div className={contactusSt.imggroup}>
                        <img src='../img/Marketplace.png'></img>
                        <p className={contactusSt.imgtxt}>Curated Marketplace</p>
                    </div>
                    <div className={contactusSt.imggroup}>
                        <img src='../img/Prices.png'></img>
                        <p className={contactusSt.imgtxt}>Curated Marketplace</p>
                    </div>
                </div>
                <div className={contactusSt.contactTalkimg}>
                    <div className={contactusSt.imggroup}>
                        <img src='../img/Guidance.png'></img>
                        <p className={contactusSt.imgtxt}>Curated Marketplace</p>
                    </div>
                    <div className={contactusSt.imggroup}>
                        <img src='../img/Procurement.png'></img>
                        <p className={contactusSt.imgtxt}>Curated Marketplace</p>
                    </div>
                </div>
            </div>
                <div className={contactusSt.contactUs}>
                    <b>Contact Us</b>
                    <p className={contactusSt.contactUstxt}>
                    If you have any question or issue’s to use our product. Fill <br/>the form below. We’ll help you.
                    </p>
                    <form>
                        <div className={contactusSt.contactUsname}>
                            <b>First Name *
                                <input type='name' placeholder='Enter your name'></input>
                            </b>
                            <b>Last Name *
                                <input   input type='name' placeholder='Enter your name'></input>
                            </b>
                        </div>
                        <div className={contactusSt.contactUsinfored}>
                            <b>Email *
                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </b>
                        </div>
                        <div className={contactusSt.contactUsinfo}>
                            <b>Company Name 
                                <input type='email' placeholder='Enter your name'></input>
                            </b>
                        </div>
                        <div className={contactusSt.contactUsinfo}>
                            <b>Monthly Spending
                                <input type='email' placeholder='Enter your name'></input>
                            </b>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className={contactusSt.line}></div>
            <Footer/>
        </>
    )
}

export default Contactus