import React from 'react';
import image from '../../../assets/images/about_us/person.jpg'
import image2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mx-auto  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={image} alt='img' className="w-9/12 rounded-lg shadow-2xl" />
                    <img src={image2} alt="" className="w-2/4 absolute border-8 border-orange-600 right-1 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 text-start ml-10'>
                    <p className='text-xl font-bold text-orange-700'>About Us</p>
                    <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='pb-6'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-active bg-orange-700 text-white border-0 rounded-none">Get More Info</button>

                </div>
            </div>
        </div>
    );
};

export default About;