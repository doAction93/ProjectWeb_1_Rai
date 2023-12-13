"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import style from '../pages/blogs/blogs.module.scss';
import blogData from '../pages/blogs/blog.json';
import Headers from '../component/Header'
import Footer from '../component/Footer'

function Blogs() {
    const [search,setSearch] = useState('');
    const [id,setId] = useState(0);
    
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [checked,setChecked] = useState([]);
    const filterCategory = (category) => {
      setSelectedCategory(category.toLowerCase());
    };


    const filtersBologs = (blogs)=>{
      const lower = search.toLowerCase();
      return(
        blogs.title.toLowerCase().includes(lower) ||
        blogs.content.toLowerCase().includes(lower)
        );
    };
    const filteredBlogs = blogData.filter(filtersBologs);
  
    const router = useRouter();

    const detail = (clickedId) => {
      setId(clickedId)
      const selectedBlog = blogData.find(blog => blog.id === clickedId);
      router.push(`../pages/blogs/detail/${clickedId}`);
    };


    const [email, setEmail] = useState(''); // 이메일 상태 추가
    // router
    

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any necessary validation here before navigating
        sendEmail(email);
    };

    const sendEmail = (email) => {
        router.push(`/Contactus/${email}`);
    };


  return (
    <>
     <Headers/>
      <section className={style.blogs_section}>
        <article className={style.blogs_top}>
          <h3>Our Blogs</h3>
          <p>A center for all our resources and insights</p>
          <label>
            <img src='../../../blogs/view.png' />
            <input 
            name='keyword'
            placeholder='Search our blogs by topic or key word...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </article>

        <article className={style.featured}>
          <div className={style.featured_flex1}>
            <div className={style.first_div}>
              <h1>Featured</h1>
            </div>

            <div className={style.second_div}>
              <div className={style.img_div}>
                <img src='../../../blogs/blogs_featured.png' />
              </div>
              <div className={style.contets_div}>
                <div>
                  <p className={style.state}>10 min read <span>12 Nov 23</span> </p>
                  <h3>Critical tools every company needs.</h3>
                  <p>Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether </p>
                </div>
                <div className={style.writer}>
                  <figure>
                    <img src='../../../blogs/Mask.png' /> <span>Travis Scott</span>
                  </figure>
                  <p><img src='../../../blogs/star.png'/></p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className={style.menu}>
          <nav>
            <a className={selectedCategory === 'all' ? style.active : ''} onClick={() => filterCategory('All')}>All</a>
            <a className={selectedCategory === 'cyber security' ? style.active : ''} onClick={() => filterCategory('Popular')} >Popular</a>
            <a className={selectedCategory === 'cyber security' ? style.active : ''} onClick={() => filterCategory('Trending')}>Trending</a>
          </nav>
          <div className={style.show_nav}>
          <ul className={style.nav_all}>
          { 
          filteredBlogs.map((blogs) => (
            <li key={blogs.id}  onClick={() => detail(blogs.id)}>
              <img src={blogs.image} />
              <p className={style.state}>{blogs.readTime}<span>{blogs.date}</span></p>
              <h3 className={style.title}>{blogs.title}</h3>
              <p>{blogs.content}</p>
              <div className={style.writer}>
                  <figure>
                    <img src={blogs.profileImage} /> <span>{blogs.name}</span>
                  </figure>
                  <p><img src={blogs.starImage}/></p>
              </div>
            </li>
          )  
            )}
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

export default Blogs
