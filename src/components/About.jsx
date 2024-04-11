import React from 'react';
import Lottie from "lottie-react";
import Innovation from "../assets/animations/Innovation.json";
import Banner2 from '../assets/Banner2.svg';
import customers from '../assets/milestones/customers.png';
import leadership from '../assets/milestones/leadership.png';
import projects from '../assets/milestones/projects.png';
import raise from '../assets/milestones/raise.png';

const About = () => {

    const AboutTitle = "Innovating Excellence in IT Solutions";
    const AboutUsContent = "Welcome to Grey Matrix, where innovation meets excellence in IT solutions. At Grey Matrix, we understand the dynamic landscape of technology and the crucial role it plays in shaping businesses for success. Our team of skilled professionals is dedicated to delivering cutting-edge solutions that drive your business forward. Whether you're a startup looking to establish a digital presence, an enterprise seeking to streamline operations, or an entrepreneur with a game-changing app idea, Grey Matrix is here to bring your vision to life. Our tailor-made solutions are designed to meet your unique requirements, ensuring maximum efficiency and impact.";
    const Discover = "Milestones that define our"
    const Journey = "Journey at Grey Matrix"
    const Milestones = "From the projects we've handled to the clients we've served, our team's expertise, and our collective years of experience, here's a glimpse into our impactful journey."

    const impactNumbers = {
        projectsCompleted: '20+',
        satisfiedClients: '10+',
        teamMembers: '10+',
        yearsOfExperience: '3+'
    };    

    return (
        <div>
            {/* About Text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='py-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                    {/* <img className='h-96 w-96' src={Banner2} /> */}
                    <Lottie className='h-96 w-96' animationData={Innovation} loop={true} />

                    <div className='md:w-3/5 mx-auto'>
                        <h1 className='text-brandSecondary font-semibold text-3xl'>{AboutTitle}</h1>
                        <p className='py-4 text-neutralGrey text-sm'>{AboutUsContent}</p>
                        <button className='bg-brandPrimary py-2 px-4 rounded text-white hover:bg-neutralDGrey transition-all duration-300'>Explore Our Solutions</button>
                    </div>

                </div>
            </div>

            {/* Company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='font-semibold text-4xl text-brandSecondary'>{Discover}<br />
                            <span className='text-brandPrimary'>{Journey}</span></h2>
                        <p className='text-base my-4'>{Milestones}</p>
                    </div>

                    {/* Stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col justify-around gap-12'>
                        {/* Row 1 */}
                        <div className='space-y-8'>
                            {/* Projects */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-10 w-10' src={projects} />
                                <div>
                                    <h3 className='text-brandSecondary font-bold text-2xl'>{impactNumbers.projectsCompleted}</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Projects</p>
                                </div>
                            </div>
                            {/* Clients */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-10 w-10' src={customers} />
                                <div>
                                    <h3 className='text-brandSecondary font-bold text-2xl'>{impactNumbers.satisfiedClients}</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Clients</p>
                                </div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className='space-y-8'>
                            {/* Team Members */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-10 w-10' src={leadership} />
                                <div>
                                    <h3 className='text-brandSecondary font-bold text-2xl'>{impactNumbers.teamMembers}</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Team Members</p>
                                </div>
                            </div>
                            {/* Years Of Experience */}
                            <div className='flex gap-4 items-center'>
                                <img className='h-10 w-10' src={raise} />
                                <div>
                                    <h3 className='text-brandSecondary font-bold text-2xl'>{impactNumbers.yearsOfExperience}</h3>
                                    <p className='text-neutralGrey font-normal text-base'>Years Of Experience</p>
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