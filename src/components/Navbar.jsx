import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonials', path: 'testimonials' },
        { link: 'FAQ', path: 'faq' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : ""} `}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Brand Logo */}
                    <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img className='w-20 h-20 inline-block' src={logo} />
                        <span className='text-brandSecondary'>Grey Matter</span>
                    </a>

                    {/* NavItems for Large Devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} key={path}
                                offset={-100} className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    {/* Button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href='' className='text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white text-sm px-4 py-2 transition-all duration-300 rounded-md hover:bg-neutralDGrey' >Sign up</button>
                    </div>

                    {/* Button for only mobile devices */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                        >
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                {/* NavItems for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-2 left-0 right-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} key={path}
                            offset={-100} className='block cursor-pointer text-base text-white hover:text-neutralDGrey first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;