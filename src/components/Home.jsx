import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/banner1.png';
import gd from '../assets/technology/gd.jpg';
import Teamwork from '../assets/technology/Teamwork.jpg';

const Home = (props) => {

    const { toggleEnquiry } = props;

    return (
        <div className='bg-neutralSilver' id='home'>
            <div className="max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel
                    className='w-full mx-auto'
                    slideInterval={5000}
                    onSlideChange={(index) => console.log('onSlideChange()', index)}>
                    {/* Slide 1 */}
                    <div className="px-4 lg:px-20 my-8 md:my-8 py-12 md:flex md:flex:col md:flex-row-reverse justify-between gap-12">
                        <div className='justify-center flex'>
                            <img src={banner1} alt="" className='max-sm:w-40 md:w-96 md:h-96' />
                        </div>
                        {/* Hero Text */}
                        <div className='md:w-1/2 flex flex-col justify-center'>
                            <h1 className='text-5xl font-semibold mb-4 leading-snug'>Welcome to <span className='text-brandPrimary leading-snug'>Grey Matrix</span>,</h1>
                            <p className='font-normal text-neutralDGrey text-base mb-8'>Where innovation meets excellence in IT solutions.</p>
                            <button className='btn-primary max-w-fit' onClick={toggleEnquiry}>Get Started</button>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="flex justify-center min-h-screen">
                        <img src={gd} className='object-cover object-right-bottom' />
                    </div>
                    {/* Slide 3 */}
                    <div className="flex justify-center min-h-screen">
                        <img src={Teamwork} className='object-cover object-center' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;