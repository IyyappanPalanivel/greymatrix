import React, { useState } from 'react';
import BooksbearBanner from '../assets/portfolio/BooksbearBanner.jpg';
import Lewansys from '../assets/portfolio/Lewansys.jpg';
import Smartgold from '../assets/portfolio/Smartgold.jpg';

const Portfolio = (props) => {

    const { toggleEnquiry } = props;

    const portfolioList = [
        {
            id: 1, title: 'Booksbear is an E-Commerce platform where users can buy, sell, and rent books effortlessly.', src: BooksbearBanner
        },
        {
            id: 2, title: 'Lewansys is a go-to job portal, connecting talent with opportunities, seamlessly', src: Lewansys
        },
        {
            id: 3, title: 'Smartgold is a gold auction app redefining how users buy gold.', src: Smartgold
        },
    ];

    const PortfolioTitle = "Showcase of Mastery";
    const PortfolioDescription = "Explore our portfolio, where creativity meets functionality, and innovation intertwines with excellence. Witness the synergy of creativity and expertise, where each project tells a story of innovation, excellence, and success.";

    const Tagline = "Discover the power of Grey Matrix – where possibilities are limitless, and excellence is guaranteed."

    return (
        <div id='portfolio'>
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto my-12'>
                {/* Caring */}
                <div className='w-1/2 mx-auto my-8 text-center'>
                    <h2 className='font-semibold text-brandSecondary text-4xl mb-2'>{PortfolioTitle}</h2>
                    <p className='text-neutralGrey text-base mb-2'>{PortfolioDescription}</p>
                </div>

                {/* Blogs */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8 justify-between'>
                    {portfolioList.map(blog =>
                        <div id={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.src} className='w-96 h-80 hover:scale-95 transition-all duration-300 rounded bg-cover' />
                            <div className='shadow-lg px-4 py-8 text-center bg-white rounded-md mx-auto md:w-3/4 absolute left-0 right-0 -bottom-12'>
                                <h3 className='font-semibold text-neutralGrey text-sm'>{blog.title}</h3>
                                <h4 className='font-semibold text-brandPrimary text-sm hover:text-neutralGrey transition-all duration-300'>Readmore {'-->'}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Discover */}
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto py-8 items-center text-center bg-neutralSilver'>
                <h1 className='text-neutralBlack font-semibold text-3xl mb-4'>{Tagline}</h1>
                <button
                    className='bg-brandPrimary px-3 py-3 rounded text-white hover:bg-neutralDGrey duration-300 transition-all'
                    onClick={toggleEnquiry}
                >Get Free Consulting {'-->'}
                </button>
            </div>

            
        </div>
    );
};

export default Portfolio;