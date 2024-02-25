import React from 'react';
import GreyMatrixRoundedLogo from '../assets/brand/GreyMatrixRoundedLogo.png'
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <div className='max-w-screen-2xl bg-neutralBlack py-8 px-4 md:px-14 flex md:flex-row flex-col' id='faq'>
            {/* Company Details */}
            <div className='md:w-1/3 flex flex-col gap-10'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                    <img className='h-10 w-10' src={GreyMatrixRoundedLogo} />
                    <span className='text-neutralWhite '>Grey Matrix</span>
                </a>

                <div>
                    <p className='text-neutralSilver text-sm'>Copyright © 2024 Grey Matrix.</p>
                    <p className='text-neutralSilver text-sm'>All rights reserved</p>
                </div>


                {/* Social Medias */}
                <div className='flex gap-4 mb-4'>
                    <img className='h-7 w-7 bg-neutralGrey p-1 rounded-xl' src={insta} />
                    <img className='h-7 w-7 bg-neutralGrey p-1 rounded-xl' src={twitter} />
                </div>
            </div>

            {/* Sections */}
            <div className='md:w-2/3 flex gap-4 justify-between'>
                {/* Company */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Company</h4>
                    <p className='text-neutralSilver text-xs font-normal'>About us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Contact us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Pricing</p>
                    <p className='text-neutralSilver text-xs font-normal'>Portfolio</p>
                </div>

                {/* Company */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Support</h4>
                    <p className='text-neutralSilver text-xs font-normal'>Help center</p>
                    <p className='text-neutralSilver text-xs font-normal'>Terms of service</p>
                    <p className='text-neutralSilver text-xs font-normal'>Legal</p>
                    <p className='text-neutralSilver text-xs font-normal'>Privacy policy</p>
                </div>

                {/* Stay up to date */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Stay up to date</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;