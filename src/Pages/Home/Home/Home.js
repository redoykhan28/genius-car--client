import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section className='p-0 mt-6'>
                <Hero></Hero>
            </section>
            <section className='mb-16'>
                <About></About>
            </section>
            <section className='my-16'>
                <Services></Services>
            </section>
            <section className='my-16'>
                <Team></Team>
            </section>
        </div>
    );
};

export default Home;