import React from 'react';
import logo from '../assets/logo.png'

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Mobile App Development",
            description: "Our membership management software provides full automation of membership renewals and paymentst",
            image: "/src/assets/apple.png"
        },
        {
            id: 2,
            title: "Web App Development",
            description: "Our membership management software provides full automation of membership renewals and paymentst",
            image: "/src/assets/apple.png"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Our membership management software provides full automation of membership renewals and paymentst",
            image: "/src/assets/apple.png"
        },
    ]

    return (
        <div className='md:px-14 px-4 max-w-screen-2xl mx-auto' id='service'>

            {/* Clients Section */}
            <div className='text-center my-10'>
                <h1 className='text-2xl text-neutralDGrey font-semibold mb-2'>Our Clients</h1>
                <p className='text-neutralGrey text-base'>We have been working with some Fortune 500+ clients</p>

                {/* Clients Logo */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img className='w-20 h-20' src="./src/assets/react.svg" />
                    <img className='w-20 h-20' src="./src/assets/android.png" />
                    <img className='w-20 h-20' src="./src/assets/apple.png" />
                    <img className='w-20 h-20' src="./src/assets/figma.png" />
                </div>
            </div>

            {/* Services Services */}
            <div className='text-center'>
                <h1 className='text-2xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h1>
                <p className='text-neutralGrey text-base'>Who is Nextcent suitable for?</p>
            </div>

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto gap-12'>
                {
                    services.map(service =>
                        <div className='px-4 py-8 text-center md:w-[300px] md:h-80 mx-auto rounded-lg shadow cursor-pointer 
                            hover:-translate-y-4 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'
                            key={service.id}>
                            <div>
                                <div className='mb-4 bg-[#E8F5E9] w-14 h-14 mx-auto rounded-tl-3xl rounded-br-3xl' ><img className='w-12 h-12 mx-auto -ml-5' src={service.image} /></div>
                                <h4 className='text-neutralDGrey font-bold text-2xl mb-2 px-2'>{service.title}</h4>
                                <p className='text-neutralGrey text-sm'>{service.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;