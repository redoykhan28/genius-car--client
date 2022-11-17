import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const details = useLoaderData()
    console.log(details)
    const { _id, img, title, description, facility, price } = details
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className="card mx-auto w-full h-60 bg-base-100 shadow-xl image-full">
                <figure><img src={img} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-center">{title}</h2>
                </div>
            </div>
            <div className='my-10'>
                <h3 className='text-3xl text-start font-bold my-4'>{facility[3].name}</h3>
                <p className='text-start'>
                    {description}
                </p>
            </div>
            <div className='my-4 text-start'>
                <h3 className='text-3xl my-4 font-bold'>Price: ${price}</h3>
                <Link to={`/checkout/${_id}`}><button className="btn btn-active bg-orange-700 text-white border-0 rounded-3">Purchase</button></Link>
            </div>
        </div>

    );
};

export default ServiceDetails;