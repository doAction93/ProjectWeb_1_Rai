"use client"
import React, { useState } from 'react'
import Headers from '../pages/header/page'
import Footer from '../pages/footer/page'
import productsSt from "../pages/products/products.module.scss";
import { useRouter } from 'next/navigation';


function Products() {
    /*  Dashboard */
    const [activeDashboardItem, setActiveDashboardItem] = useState(0);
    const [email, setEmail] = useState(''); // 이메일 상태 추가

    
    const dashboardItems = [
        {
            mainText: 'Manage your subscription with ease',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard1.png', // 이미지 URL 추가
        },
        {
            mainText: 'Analytics for better understanding',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard2.png', // 이미지 URL 추가
        },
        {
            mainText: 'Marketplace to go through all the products',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard3.png', // 이미지 URL 추가
        },
    ];

    // 대시보드 아이템 클릭을 처리하는 함수
    const handleDashboardItemClick = (index) => {
        setActiveDashboardItem(activeDashboardItem === index ? null : index);
    };



     // router 클릭 이벤트
     const router = useRouter();

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
        <div className={productsSt.Servicesgroup}>
            
            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>

                    <div className={productsSt.Servicesimg}>
                        <img src='../img/Dashboard1.png'></img>
                    </div>
                        
                        
                    <div className={productsSt.Servicestextgroup}>
                        <h3>Manage your subscription with ease</h3>
                        <p className={productsSt.Servicestxt}>
                        Discover how much you can save by purchasing software solutions through <br/>
                        our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                        the best value for your money. Discover how much you can save by <br/>
                        purchasing software solutions through our platform. Our exclusive discounts <br/>
                        and competitive pricing ensure you get the best value for your money.
                        </p>
                    </div>

                </div>
            </div>


            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>

                    <div className={productsSt.Servicesimg}>
                        <img src='../img/Dashboard2.png'></img>
                    </div>
                    
                        <div className={productsSt.Servicestextgroup}>
                            <h3>Manage your subscription with ease</h3>
                            <p className={productsSt.Servicestxt}>
                            Discover how much you can save by purchasing software solutions through <br/>
                            our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                            the best value for your money. Discover how much you can save by <br/>
                            purchasing software solutions through our platform. Our exclusive discounts <br/>
                            and competitive pricing ensure you get the best value for your money.
                            </p>
                        </div>
                
                </div>
            </div>


            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>
                    
                    <div className={productsSt.Servicesimg}>
                        <img src='../img/Dashboard3.png'></img>
                    </div>

                        <div className={productsSt.Servicestextgroup}>
                            <h3>Manage your subscription with ease</h3>
                            <p className={productsSt.Servicestxt}>
                            Discover how much you can save by purchasing software solutions through <br/>
                            our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                            the best value for your money. Discover how much you can save by <br/>
                            purchasing software solutions through our platform. Our exclusive discounts <br/>
                            and competitive pricing ensure you get the best value for your money.
                            </p>
                        </div>
                </div>
            </div>


        </div>
        {/* Dashboard */}
        <div className={productsSt.dashboardmain}>
                

                <div className={productsSt.dashboardgroup}>  

                    <div className={productsSt.dashboardimg}>  
                        
                            {dashboardItems.map((item, index) => (      
                                <>
                                    <div className={productsSt.dashboardactive}>
                                        {activeDashboardItem === index && (
                                            <>               
                                            <img src={item.imageURL} alt={`Dashboard ${index + 1}`} />       
                                            </>       
                                        )}
                                    </div>
                                
                                </>
                            ))}
                    </div>

                    <div className={productsSt.dashboardgroupimg}>
                            {dashboardItems.map((item, index) => (    

                                <div
                                    key={index}
                                    className={`${productsSt.dashboardtxtgroup} ${activeDashboardItem === index ? productsSt.active : ''}`}
                                    onClick={() => handleDashboardItemClick(index)}>
                                    
                                    <div className={productsSt.dashboardflex}>
                                        <b className={productsSt.dashboardtxtmain}>{item.mainText}</b>
                                        <div className={productsSt.line}></div>
                                    </div>
                                    {activeDashboardItem === index && (
                                    <div className={productsSt.spantxt}>{item.additionalText}</div>
                                    )}
                                </div> 
                            ))}
                    </div>
            </div>
                
            </div>
            {/* contact */}
            <div className={productsSt.contact}>
                <div className={productsSt.contactContainer}>
                    <div className={productsSt.contacttitle}>
                        <b> Contact Us</b>
                        <p className={productsSt.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                        <form className={productsSt.contactPost} onSubmit={handleSubmit}>
                            <input type='email' placeholder="EMAIL" autoComplete="off" className={productsSt.contactMail} value={email} onChange={handleChange}></input>
                            <button type='submit' className={productsSt.contactSubmit}>
                                
                                Get Started
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Products