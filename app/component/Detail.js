"use client"

import React from 'react'
import style from '../pages/detail/detail.module.scss'
import blogData from '../pages/blogs/blog.json';
import Headers from '../component/Header'
import Footer from '../component/Footer'

function Detail() {

    return (
        <>
         <Headers/>
            <section className={style.detail_section}>
                <article className={style.detail_top}>
                    <img src='../../../blogs/blogs_detail.png' />
                    <p className={style.for_mobile}><span>10 min read</span><span>12 Nov 23</span></p>
                    <h3>Critical tools every company needs.</h3>
                </article>

                <article className={style.writer}>
                    <figure>
                        <img src='../../../blogs/Mask.png' />
                        <span>Travis Scott</span>
                        <p><img src='../../../blogs/star.png' /></p>
                    </figure>
                    <p><span>10 min read</span><span>12 Nov 23</span></p>
                </article>

                <article className={style.text}>
                    <div>
                        <p>
                            Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether
                        </p>
                    </div>
                </article>
            </section>
            <Footer/>
        </>
    )
}


export default Detail
