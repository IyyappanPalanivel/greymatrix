import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/banner1.png'

const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel
                    className='w-full mx-auto'
                    onSlideChange={(index) => console.log('onSlideChange()', index)}>
                    <div className="my-28 md:my-8 py-12 flex flex:col md:flex-row-reverse justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" className='md:w-96 md:h-96'/>
                        </div>
                        {/* Hero Text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 leading-snug'>Welcome to <span className='text-brandPrimary leading-snug'>Grey Matter</span></h1>
                            <p className='font-normal text-neutralDGrey text-base mb-8'>Make Your Business Online</p>
                            <button className='btn-primary'>Get Started</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;