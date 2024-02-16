import React from 'react';
import MobileLogin from '../assets/MobileLogin.png';
import tesla from '../assets/tesla.png';

const Products = () => {
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
                        <h2 className='text-4xl font-semibold text-neutralDGrey py-2'>How to design your site footer like we did</h2>
                        <p className='py-4 text-neutralGrey text-sm'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='bg-brandPrimary px-4 py-2 text-white rounded hover:bg-neutralDGrey transition-all duration-300'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* Tesla */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16' id='product'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img className='h-64 w-64' src={tesla} />
                    </div>

                    <div className='md:w-2/3 mx-auto'>
                        <p className='text-neutralGrey font-medium text-sm md:w-4/5 leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h4 className='py-2 text-brandPrimary font-semibold text-xl'>Tim Smith</h4>
                        <p className='text-neutralLGrey text-base'>British Dragon Boat Racing Association</p>

                        {/* Clients */}
                        <div className='flex py-4 gap-8 flex-wrap items-center'>
                            <img src='/src/assets/logo.png' className='cursor-pointer h-12 w-12' />
                            <img src='/src/assets/logo.png' className='cursor-pointer h-12 w-12' />
                            <img src='/src/assets/logo.png' className='cursor-pointer h-12 w-12' />
                            <img src='/src/assets/logo.png' className='cursor-pointer h-12 w-12' />
                            <img src='/src/assets/logo.png' className='cursor-pointer h-12 w-12' />
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