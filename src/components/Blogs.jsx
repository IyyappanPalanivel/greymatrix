import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* Caring */}
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto my-8 items-center text-center'>
                <h2 className='font-semibold text-neutralDGrey text-4xl mb-2'>Caring is the new marketing</h2>
                <p className='text-neutralGrey text-base mb-2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>

            {/* Blogs */}

            {/*  */}
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto py-8 items-center text-center bg-neutralSilver'>
                <h1 className='text-neutralBlack font-semibold text-5xl mb-4'>Pellentesque suscipit fringilla libero eu.</h1>
                <button className='bg-brandPrimary px-3 py-3 rounded text-white hover:bg-neutralDGrey duration-300 transition-all'>Get Free Consulting {'-->'}</button>
            </div>
        </div>
    );
};

export default Blogs;