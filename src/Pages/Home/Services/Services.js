import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('https://genious-car-server-liart.vercel.app/services')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <div className='text-center'>
            <div>
                <p className='text-center font-bold text-xl my-2 text-orange-700'>Service</p>
                <h4 className='text-3xl font-bold'>Our Service Area</h4>
                <small className='my-6'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </small>

            </div>
            <div className='my-6 lg:w-9/12 mx-auto lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-4'>
                <button className="btn btn-outline rounded-none text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white hover:border-0">Load More</button>
            </div>
        </div>
    );
};

export default Services;