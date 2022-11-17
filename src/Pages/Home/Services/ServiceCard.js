import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div className="card my-4 grid card-compact md:w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="service" /></figure>

            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <p className=' text-orange-700 font-bold  text-start'> Price: ${price}</p>
                    <Link to={`/details/${_id}`} className=" text-orange-700"><FaArrowRight /></Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;