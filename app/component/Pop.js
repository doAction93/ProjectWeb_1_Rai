import React from 'react';
import Link from 'next/link';
import heraderSt from '../pages/header/header.module.scss';
import { useRouter } from 'next/navigation';

const MenuOptions = ({ closeMenu }) => {
    const router = useRouter();
    const menuItems = [
        { label: 'Home', link: "/" },
        { label: 'Products', link: "../../pages/products" },
        { label: 'customer', link: "../../pages/customer" },
        { label: 'solution', link: "../../pages/solution" },
        { label: 'About Us', link: "../../pages/aboutus" },
        { label: 'Blogs', link: "../../pages/blogs" },
        { label: 'Contact Us', link: "../../pages/Contact" },
        { label: 'Log In', link: "../../pages/login" },
        { label: 'Sign Up', link: "../../pages/signup" },
    ];

    const handleMenuItemClick = (link) => {
        router.push(link);
        closeMenu();
    };

    return (
        <div className={heraderSt.menuOptionsOverlay}>
            <div className={heraderSt.menuOptions}>
                {menuItems.map((item, index) => (
                    <div key={index} onClick={() => handleMenuItemClick(item.link)}>
                        {item.label}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default MenuOptions;