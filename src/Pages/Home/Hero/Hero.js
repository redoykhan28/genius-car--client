import React from 'react';
import slider1 from '../../../assets/images/banner/5.jpg'
import slider2 from '../../../assets/images/banner/1.jpg'
import slider3 from '../../../assets/images/banner/4.jpg'
import slider4 from '../../../assets/images/banner/6.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className="carousel p-0 w-full mx-auto h-3/4	">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='car-img w-full '>
                    <img src={slider1} alt='' className="w-full h-3/4 rounded-3xl" />
                </div>
                <div className="absolute hidden md:block flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-start font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                    <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=' hidden lg:flex'>
                        <button className="btn btn-active bg-orange-700 text-white border-0 rounded-none">Discover More</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 top-1/2 ">
                    <a href="#slide4" className="btn btn-circle bg-orange-700 border-0 mx-8">❮</a>
                    <a href="#slide2" className="btn bg-orange-700 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='car-img w-full '>
                    <img src={slider2} alt='' className="w-full h-3/4 rounded-3xl" />
                </div>
                <div className="absolute hidden md:block flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-start font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                    <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='hidden lg:flex'>
                        <button className="btn btn-active bg-orange-700 text-white border-0 rounded-none">Discover More</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 top-1/2">
                    <a href="#slide1" className="btn bg-orange-700 border-0 btn-circle mx-8">❮</a>
                    <a href="#slide3" className="btn bg-orange-700 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='car-img w-full '>
                    <img src={slider3} alt='' className="w-full h-3/4 rounded-3xl" />
                </div>
                <div className="absolute hidden md:block flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-start font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                    <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='hidden lg:flex'>
                        <button className="btn btn-active bg-orange-700 text-white border-0 rounded-none">Discover More</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 top-1/2">
                    <a href="#slide2" className="btn bg-orange-700 border-0 btn-circle mx-8">❮</a>
                    <a href="#slide4" className="btn bg-orange-700 border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='car-img w-full '>
                    <img src={slider4} alt='' className="w-full h-3/4 rounded-3xl" />
                </div>
                <div className="absolute hidden md:block flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-start font-bold'>
                        Affordable<br />
                        Price For Car <br />
                        Servicing
                    </h1>
                    <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='hidden lg:flex'>
                        <button className="btn btn-active bg-orange-700 text-white border-0 rounded-none">Discover More</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 top-1/2">
                    <a href="#slide3" className="btn bg-orange-700 border-0 btn-circle mx-8">❮</a>
                    <a href="#slide1" className="btn bg-orange-700 border-0 btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;