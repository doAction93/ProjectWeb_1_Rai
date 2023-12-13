"use client"

import React from 'react'
import style from '../detail.module.scss'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import blogData from '../../blog.json';
import Header from '../../../../component/Header';
import Footer from '../../../../component/Footer';


function page() {
    const params = useParams();
    const [blogDataById, setBlogDataById] = useState([{}]);

    useEffect(() => {

        console.log(params.id);
        // ID에 해당하는 블로그 데이터 찾기
        const foundBlog = blogData.find(blog => blog.id === Number(params.id));
        console.log(foundBlog);
        // 찾은 데이터를 state에 저장
        setBlogDataById(foundBlog);
    }, [params.query]);

    console.log(blogDataById.title);

    return (
        <>
        <Header/>
      <section className={style.detail_section}>
        <article className={style.detail_top}>
          <img src='../../../blogs/blogs_detail.png' />
          <p className={style.for_mobile}><span>{blogDataById.readTime}</span><span>{blogDataById.date}</span></p>
          <h3>{blogDataById.title}</h3>
        </article>
        <article className={style.writer}>
          <figure>
            <img src={blogDataById.profileImage} />
            <span>{blogDataById.name}</span>
            <p><img src={blogDataById.starImage} /></p>
          </figure>
          <p><span>{blogDataById.readTime}</span><span>{blogDataById.date}</span></p>
        </article>
        <article className={style.text}>
          <div>
            <p>{blogDataById.content}</p>
          </div>
        </article>
      </section>
      <Footer/>
        </>
    )
}

export default page
