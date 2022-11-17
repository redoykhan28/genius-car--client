import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (

        <div>

            <div>
                <p className='text-center font-bold text-xl my-2 text-orange-700'>Team</p>
                <h4 className='text-3xl font-bold'>Meet Our Team</h4>
                <small className='my-6'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </small>
            </div>

            <div className='grid lg:w-9/12 lg:gap-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div className="card md:w-96 bg-base-100E">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="team" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">Car Engine Plug</h2>
                        <p className='text-center my-2'>Engine Expert</p>
                        <div className="card-actions">
                            <button className="btn border-0 bg-orange-700">Contact</button>                        </div>
                    </div>
                </div>

                <div className="card md:w-96 bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="team" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">Car Engine Plug</h2>
                        <p className='my-2 text-center'>Break Expert</p>
                        <div className="card-actions">
                            <button className="btn border-0 bg-orange-700">Contact</button>                        </div>
                    </div>
                </div>

                <div className="card md:w-96 bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">Car Engine Plug</h2>
                        <p className='text-center my-2'>Manufacturing Expert</p>
                        <div className="card-actions">
                            <button className="btn border-0 bg-orange-700">Contact</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Team;