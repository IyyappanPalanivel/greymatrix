import React from 'react';
import banner2 from '../assets/banner2.png';
import groups from '../assets/groups.png';

const About = () => {
    return (
        <div>
            {/* About Text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='py-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                    <img src={banner2} />

                    <div className='md:w-3/5 mx-auto'>
                        <h1 className='text-neutralDGrey font-semibold text-3xl'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='py-4 text-neutralGrey text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='bg-brandPrimary py-2 px-4 rounded text-white hover:bg-neutralDGrey transition-all duration-300'>Learn More</button>
                    </div>

                </div>
            </div>

            {/* Company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='font-semibold text-4xl text-neutralDGrey'>Helping a local<br />
                            <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p className='text-base my-4'>We reached here with our hard work and dedication</p>
                    </div>

                    {/* Stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col justify-around gap-12'>
                        {/* Row 1 */}
                        <div className='space-y-8'>
                            {/* Members */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-6 w-8' src={groups} />
                                <div>
                                    <h3 className='text-neutralDGrey font-bold text-2xl'>2,245,341</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Members</p>
                                </div>
                            </div>
                            {/* Members */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-6 w-8' src={groups} />
                                <div>
                                    <h3 className='text-neutralDGrey font-bold text-2xl'>2,245,341</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Members</p>
                                </div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className='space-y-8'>
                            {/* Members */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-6 w-8' src={groups} />
                                <div>
                                    <h3 className='text-neutralDGrey font-bold text-2xl'>2,245,341</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Members</p>
                                </div>
                            </div>
                            {/* Members */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-6 w-8' src={groups} />
                                <div>
                                    <h3 className='text-neutralDGrey font-bold text-2xl'>2,245,341</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;