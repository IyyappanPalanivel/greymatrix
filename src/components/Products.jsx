import React from 'react';
import MobileLogin from '../assets/MobileLogin.png';
import gd from '../assets/technology/gd.jpg';

import booksbear from '../assets/clients/booksbear.jpg';
import abinyt from '../assets/clients/abinyt.jpg';
import yahve from '../assets/clients/yahve.png';
import MagicMaze from '../assets/clients/MagicMaze.png';
import jesta from '../assets/clients/jesta.png';

const Products = () => {

    const WhyWe = "Why Businesses Need Digitalization?";
    const WhyWeAnswer = "In today's hyper-connected world, digitalization isn't just a choice; it's a necessity for businesses to thrive. Embracing digital transformation empowers companies to streamline operations, enhance customer experiences, and stay competitive in rapidly evolving markets. Those who resist risk falling behind in an increasingly digital landscape";
    const WhyWeAnswer2 = "Digitalization offers a myriad of benefits, including increased efficiency, improved agility, and enhanced innovation capabilities. By leveraging digital tools and technologies, businesses can optimize processes, gain valuable insights from data, and deliver personalized experiences to customers, leading to sustainable growth and long-term success.";
    const WhatIf = "The Risks of Ignoring the Digital Revolution";
    const WhatIfAnswer = "Picture your business as a ship in a fast-moving river. Without embracing digitalization, it's like trying to navigate upstream without a paddle. You risk falling behind as the currents of technology propel others forward. In today's digital-first landscape, businesses that resist change find themselves adrift, unable to keep pace with evolving customer expectations and market trends. Don't let your business get left behind in the wake of the digital revolution.";

    const Unlocking = "We Unlocking Potential";
    const WhyUsAnswer = "Experience the difference with our freelance team, where creativity knows no bounds, deadlines are met with precision, and every project is treated as a unique opportunity for innovation. With a diverse pool of talent, seamless communication, and a passion for excellence, we're committed to delivering exceptional results that exceed your expectations. Say goodbye to rigid structures and hello to flexibility, efficiency, and unparalleled expertise with our freelance team.";
    const Collaboration = "Collaborations That Drive Success";

    return (
        <div>
            {/* How to design */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                {/*  */}
                <div className='flex md:flex-row flex-col items-center gap-12'>
                    <div className='md:w-1/3'>
                        <img className='h-96 w-96' src={MobileLogin} />
                    </div>

                    {/*  */}
                    <div className='md:w-2/3'>
                        <h2 className='text-4xl font-semibold text-brandSecondary py-2'>{WhyWe}</h2>
                        <p className='py-4 text-neutralGrey text-sm'>{WhyWeAnswer}</p>
                        <p className='py-2 text-neutralGrey text-sm'>{WhyWeAnswer2}</p>
                        <h2 className='text-4xl font-semibold text-brandSecondary py-2'>{WhatIf}</h2>
                        <p className='py-4 text-neutralGrey text-sm'>{WhatIfAnswer}</p>
                        <button className='bg-brandPrimary px-4 py-2 text-white rounded hover:bg-neutralDGrey transition-all duration-300'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Tesla */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16' id='product'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img className='h-64 w-auto rounded-md shadow-2xl' src={gd} />
                    </div>

                    <div className='md:w-2/3 mx-auto'>
                    <h4 className='py-2 text-brandPrimary font-semibold text-xl'>{Unlocking}</h4>
                        <p className='text-neutralGrey font-medium text-sm md:w-4/5 leading-6'>{WhyUsAnswer}</p>
                        <p className='text-neutralLGrey text-base mt-2'>{Collaboration}</p>

                        {/* Clients */}
                        <div className='flex py-4 gap-8 flex-wrap items-center'>
                            <img src={abinyt} className='cursor-pointer h-12 w-12 rounded'/>
                            <img src={booksbear} className='cursor-pointer h-12 w-12 rounded' />
                            <img src={jesta} className='cursor-pointer h-12 w-12 rounded' />
                            <img src={yahve} className='cursor-pointer h-12 w-12 rounded'/>
                            <img src={MagicMaze} className='cursor-pointer h-12 w-12 rounded' />
                            <div>
                                <a className='font-semibold text-brandPrimary hover:text-neutralGrey'>Meet all customers {'-->'}</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;