"use client"

import React, { useState } from 'react'
import style from '../pages/aboutus/aboutus.module.scss';
import Headers from './Header'
import Footer from './Footer'

function Aboutus() {
  const [isShowingList, setIsShowingList] = useState([false, false, false, false]);

  const question = [
    {
      "question": "Can I customize the software packages to fit my specific needs?",
      "answer": "Yes, we can work with you to customize software packages to meet your unique requirements. We offer flexible pricing tiers and can tailor solutions to fit your budget and business goals.",
    },
    {
      "question": "How do you protect my company's data when it is stored on your platform?",
      "answer": "Data security is our top priority. We employ industry-leading security measures, including encryption, access controls, and regular security audits, to safeguard your data. We also adhere to strict data privacy regulations and ensure compliance with relevant standards.",
    },
    {
      "question": "Can I customize the software packages to fit my specific needs?",
      "answer": "Yes, we can work with you to customize software packages to meet your unique requirements. We offer flexible pricing tiers and can tailor solutions to fit your budget and business goals.",
    },
    {
      "question": "Can I control who has access to my company's data within your platform?",
      "answer": "Yes, our platform provides granular access control features, allowing you to specify who can access and manage your data. You can create user roles with different permission levels to ensure data security and privacy.",
    }
  ]

  const toggleItem = (index) => {
    setIsShowingList((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary validation here before navigating
    sendEmail(email);
};

const [email, setEmail] = useState(''); // 이메일 상태 추가
    // router
    

    const handleChange = (event) => {
        setEmail(event.target.value);
    };


    const sendEmail = (email) => {
        router.push(`/Contactus/${email}`);
    };


  return (
    <>
    <Headers/>
      <section className={style.about_section}>
        <article className={style.about_start}>
          <h3>About Us</h3>
          <div className={style.about1}>
            <img src='../../../aboutus/about1.png' />
            <div className={style.text}>
              <p>We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or simply want to learn more about our company,
                we're happy to hear from you. We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or
                <br />
                <br /> simply want to learn more about our company,
                we're happy to hear from you.We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or simply want to learn more about our company,  we're happy to hear from you.</p>
              <ul>
                <li>
                  8.5x
                  <p>Average ROI</p>
                </li>
                <li>
                  $ 1M+
                  <p>Customers savings</p>
                </li>
                <li>
                  35%
                  <p>Savings Upto</p>
                </li>
              </ul>
              <div>
                <button>Get In Touch</button>
              </div>
            </div>
          </div>
        </article>

        <article className={style.about_second}>
          <h3>Why Choose Us</h3>
          <div>
            <div>
              <img src='../../../aboutus/icon_1.png' />
              <span className={style.p}>Unrivaled Softwares</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_2.png' />
              <span className={style.p}>Unparalleled Expertise</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_3.png' />
              <span className={style.p}>Unmatched Savings</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_4.png' />
              <p className={style.p}>Unwavering Support</p>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
          </div>
        </article>

        <article className={style.about_third}>
          <h3>Meet our team</h3>
          <p>We're here to help! Whether you have a question about our products or services, We're here to help! Whether you have a question about our products or services,</p>
          

          <div className={style.about_third_introduce}>
              
              <div className={style.about_box}>
              
                <ul className={style.social}>
                  <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/LinkedIn.png' /></a></li>
                </ul>

                <div className={style.for_mobile}></div>


                <div className={style.show}>
                  <img src='../../../aboutus/lakhendra.png' />
                  <p>Lakhendra Kushwah</p>
                  <span>CEO</span>

                  
                </div>
              </div>

              <div className={style.about_box}>
              
                <ul className={style.social}>
                  <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/LinkedIn.png' /></a></li>
                </ul>
                <div className={style.for_mobile}></div>
                <div className={style.show}>
                  <img src='../../../aboutus/kaustubh.png' />
                  <p>Kaustubh Rai</p>
                  <span>CTO</span>
                </div>
              </div>

              <div className={style.about_box}>
                <ul className={style.social}>
                  <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                  <li><a href='#'><img src='../../../aboutus/LinkedIn.png' /></a></li>
                </ul>
                <div className={style.for_mobile}></div>
                <div className={style.show}>
                  <img src='../../../aboutus/mahendra.png' />
                  <p>Mahendra Kushwah</p>
                  <span>COO</span>
                </div>

              </div>
          </div>
        </article>

        <article className={style.about_fourth}>
          <div>
            <div>
              <h3>Our Values</h3>
              <p>We're here to help! Whether you have a question about our products or services, We're here to help! Whether you have a question about our products or services,</p>
            </div>
            <ul>
              {question.map((data, index) => (
                <li key={index} onClick={() => toggleItem(index)}>
                  <p>
                    <span>{data.question}</span>
                    <span>{isShowingList[index] ? '-' : '+'}</span>
                  </p>
                  <p style={{ display: isShowingList[index] ? 'block' : 'none', padding_top: '10px' }}>
                    {data.answer}
                  </p>
                </li>
              ))}

            </ul>

          </div>
        </article>

       {/* contact */}
            <div className={style.contact}>
                <div className={style.contactContainer}>
                    <div className={style.contacttitle}>
                        <b> Contact Us</b>
                        <p className={style.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                        <form className={style.contactPost} onSubmit={handleSubmit}>
                        <input type='email' placeholder="EMAIL" autoComplete="off" className={style.contactMail}></input>
                        <button type='submit' className={style.contactSubmit}>
                            <a href="../../pages/Contact"> 
                            Get Started
                            </a>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
      
      </section>
      <Footer/>
    </>
  )
}

export default Aboutus
