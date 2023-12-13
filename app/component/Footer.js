"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import footerSt from "../pages/footer/footer.module.scss";

function Footer() {
    const [activeFooter, setActiveFooter] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const button = document.getElementById('topButton');
            if (button) {
                if (scrollY > 200) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleFooterClick = (index) => {
        setActiveFooter(activeFooter === index ? null : index);
      };
    const footerItems = [
        {
            title: 'Company',
            text: (
                <span>
                    <Link href="../../pages/aboutus"> About us </Link>
                    <Link href="../../pages/customer"> Customers </Link>
                </span>
            )
        },
        {
            title1: 'Account',
            text1: (
                <span>
                    <Link href="../../pages/login"> Log in </Link>
                    <Link href="../../pages/signup"> Sign up </Link>
                    <Link href="../../pages/support"> Support </Link>
                </span>
            )
        },
        {
            title2: 'Legal',
            text2: (
                <span>
                    <Link href={'/'}> Privacy Policy </Link>
                </span>
            )
        },
        {
            title3: 'Other',
            text3: (
                <span>
                    <Link href="../../pages/blogs"> Blogs </Link>
                    <Link href="../../pages/Contact"> Contact Us </Link>
                    <Link href="../../pages/products"> Products </Link>
                </span>
            )
        },
    ];
    return (
        <div className={footerSt.footer}>
            <div className={footerSt.logogroup}>
                <div className={footerSt.topbtngroup}>
                    <a href='#' onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                        <b className={footerSt.footermediaup}>Go to top</b>
                    </a>
                <div className={footerSt.logo}>
                    <img src='/img/logo.png'></img>
                    <div className={footerSt.sns}>
                        <Link href={'/'}>
                            <img src='/img/Facebook.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/Twitter.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/Instagram.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/LinkedIn.png'></img>
                        </Link>
                    </div>
                </div>
                </div>
                <div className={footerSt.footermenugroup}>
                    <div className={footerSt.footermenu}>
                        <b>Company</b>
                        <Link href="../../pages/aboutus"> About us </Link>
                        <Link href="../../pages/customer"> Customers </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Account</b>
                        <Link href="../../pages/login"> Log in </Link>
                        <Link href="../../pages/signup"> Sign up </Link>
                        <Link href="../../pages/support"> Support </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Legal</b>
                        <Link href={'/'}> Privacy Policy </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Other</b>
                        <Link href="../../pages/blogs"> Blogs </Link>
                        <Link href="../../pages/Contact"> Contact Us </Link>
                        <Link href="../../pages/products"> Products </Link>
                    </div>
                    <Link href={'/'} className={footerSt.footertopLink} onClick={scrollToTop}>
                        <div className={footerSt.footertop}>
                            <img src='/img/straight.png' className={footerSt.footerstraight}></img>
                        </div>
                        <b className={footerSt.footerup}>UP</b>

                    </Link>
                </div>

                {/* media */}
                <div className={footerSt.footerfooteraccodian}>
                    <ul className={footerSt.footeraccodiangroup}>
                        {footerItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${footerSt.footeraccodianlist} ${activeFooter === index ? footerSt.active : ''}`}
                                onClick={() => handleFooterClick(index)}
                            >
                                <p className={footerSt.footeraccodiantitle}>{item.title}</p>
                                <div className={footerSt.lined}></div>
                                {activeFooter === index && (
                                    <>
                                        <p className={footerSt.footeraccodiantxt}>{item.text}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        <div className={footerSt.line}></div>
                        {footerItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${footerSt.footeraccodianlist} ${activeFooter === index ? footerSt.active : ''}`}
                                onClick={() => handleFooterClick(index)}
                            >
                                <p className={footerSt.footeraccodiantitle}>{item.title1}</p>
                                {activeFooter === index && (
                                    <>
                                        <p className={footerSt.footeraccodiantxt}>{item.text1}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        {footerItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${footerSt.footeraccodianlist} ${activeFooter === index ? footerSt.active : ''}`}
                                onClick={() => handleFooterClick(index)}
                            >
                                <p className={footerSt.footeraccodiantitle}>{item.title2}</p>
                                {activeFooter === index && (
                                    <>
                                        <p className={footerSt.footeraccodiantxt}>{item.text2}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        {footerItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${footerSt.footeraccodianlist} ${activeFooter === index ? footerSt.active : ''}`}
                                onClick={() => handleFooterClick(index)}
                            >
                                <p className={footerSt.footeraccodiantitle}>{item.title3}</p>
                                {activeFooter === index && (
                                    <>
                                        <p className={footerSt.footeraccodiantxt}>{item.text3}</p>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer