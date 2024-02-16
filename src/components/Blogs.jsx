import React from 'react';

const Blogs = () => {

    const blogs = [
        {
            id: 1, title: 'Creating Streamlined Safeguarding Processes with OneRen', src: '/src/assets/mac1.png'
        },
        {
            id: 2, title: 'What are your safeguarding responsibilities and how can you manage them?', src: '/src/assets/mac2.png'
        },
        {
            id: 3, title: 'Revamping the Membership Model with Triathlon Australia', src: '/src/assets/mac1.png'
        },
    ];

    return (
        <div id='testimonials'>
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto my-12'>
                {/* Caring */}
                <div className='w-1/2 mx-auto my-8 text-center'>
                    <h2 className='font-semibold text-neutralDGrey text-4xl mb-2'>Caring is the new marketing</h2>
                    <p className='text-neutralGrey text-base mb-2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>

                {/* Blogs */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8 justify-between'>
                    {blogs.map(blog =>
                        <div id={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.src} className='w-96 h-72 hover:scale-95 transition-all duration-300' />
                            <div className='shadow-lg px-4 py-8 text-center bg-white rounded-md mx-auto md:w-3/4 absolute left-0 right-0 -bottom-12'>
                                <h3 className='font-semibold text-neutralGrey'>{blog.title}</h3>
                                <h4 className='font-semibold text-brandPrimary hover:text-neutralGrey transition-all duration-300'>Readmore {'-->'}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/*  */}
            <div className='px-4 md:px-14 max-w-screen-2xl mx-auto py-8 items-center text-center bg-neutralSilver'>
                <h1 className='text-neutralBlack font-semibold text-5xl mb-4'>Pellentesque suscipit fringilla libero eu.</h1>
                <button className='bg-brandPrimary px-3 py-3 rounded text-white hover:bg-neutralDGrey duration-300 transition-all'>Get Free Consulting {'-->'}</button>
            </div>
        </div>
    );
};

export default Blogs;