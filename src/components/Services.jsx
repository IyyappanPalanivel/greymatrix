import React from 'react';
import mobile from '../assets/services/mobile.png';
import webapp from '../assets/services/webapp.png';
import website from '../assets/services/website.png';
import uiux from '../assets/services/uiux.png';
import qa from '../assets/services/qa.png';
import consult from '../assets/services/consult.png';
import Lottie from "lottie-react";
import react from "../assets/animations/react.json";
import android from "../assets/animations/android.json";
import apple from "../assets/animations/apple.json";
import figma from "../assets/animations/figma.json";

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Mobile App Development",
            description: "Crafting innovative and user-friendly mobile applications tailored to your unique business needs.",
            image: mobile
        },
        {
            id: 2,
            title: "Web App Development",
            description: "Delivering dynamic and scalable web solutions that drive engagement and enhance user experience.",
            image: webapp
        },
        {
            id: 3,
            title: "Website Development",
            description: "Creating responsive, visually stunning websites that leave a lasting impression on your visitors.",
            image: website
        },
        {
            id: 4,
            title: "UI/UX Design",
            description: "Crafting intuitive, visually appealing interfaces that resonate with your target audience.",
            image: uiux
        },
        {
            id: 5,
            title: "QA & Testing Services",
            description: "Ensuring your software meets the highest standards of quality and reliability through rigorous testing methodologies.",
            image: qa
        },
        {
            id: 6,
            title: "Consultations for Business Startups",
            description: "Providing free consultations for aspiring entrepreneurs who need technical assistance or guidance on growing their business digitally.",
            image: consult
        }
    ];


    return (
        <div className='md:px-14 px-4 max-w-screen-2xl mx-auto' id='service'>

            {/* Clients Section */}
            <div className='text-center my-10'>
                <h1 className='text-2xl text-brandSecondary font-semibold mb-2'>Our Expertise</h1>
                <p className='text-neutralGrey text-base'>We expertise across various cutting-edge technologies like below</p>

                {/* Clients GreyMatterLogo */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <Lottie className='w-28 h-28' animationData={react} loop={true} />
                    <Lottie className='w-32 h-32' animationData={android} loop={true} />
                    <Lottie className='w-32 h-32' animationData={apple} loop={true} />
                    <Lottie className='w-32 h-32' animationData={figma} loop={true} />
                </div>


            </div>

            {/* Services Services */}
            <div className='text-center'>
                <h1 className='text-2xl text-brandSecondary font-semibold mb-2'>Digital services we provide</h1>
                <p className='text-neutralGrey text-base'>Providing Your Business With A Quality IT Service is Our Passion</p>
            </div>

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 grid-cols-1 mx-auto gap-12'>
                {
                    services.map(service =>
                        <div className='px-4 py-8 text-center md:w-[300px] md:h-80 mx-auto rounded-lg shadow cursor-pointer 
                            hover:-translate-y-4 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'
                            key={service.id}>
                            <div>
                                <div className='mb-4 bg-[#E8F5E9] w-14 h-14 mx-auto rounded-tl-3xl rounded-br-3xl' ><img className='w-14 h-14 mx-auto -ml-5' src={service.image} /></div>
                                <h4 className='text-brandSecondary font-bold text-2xl mb-2 px-2'>{service.title}</h4>
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