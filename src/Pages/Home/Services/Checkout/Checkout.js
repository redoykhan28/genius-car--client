import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const Checkout = () => {

    //use context
    const { user } = useContext(authContext)

    const details = useLoaderData()
    // console.log(details)
    const { img, title, price, _id } = details

    //function for post
    const btnHandler = (e) => {

        e.preventDefault();

        const form = e.target;
        const serviceId = _id;
        const product = title;
        const cost = price
        const name = `${form.first.value} ${form.last.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const textarea = form.textarea.value

        // console.log(name, phone, email, textarea)

        const orders = {

            serviceId,
            product,
            cost,
            name,
            phone,
            email,
            textarea
        }

        //post methode

        fetch('https://genious-car-server-liart.vercel.app/orders', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {

                    toast.success('Your order confirmed successfully')
                    form.reset();

                }
            })

    }

    return (
        < div className='w-11/12 mx-auto my-16' >

            <div className="card mx-auto w-full h-60 bg-base-100 shadow-xl image-full">
                <figure><img src={img} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-4xl mt-4 font-bold">{title}</h2>
                    <h3 className='text-3xl my-4 '>Price: ${price}</h3>
                </div>
            </div>

            <div>

                <form onSubmit={btnHandler} className='bg-slate-300 my-16 rounded-md p-12 gap-10'>
                    <h3 className='text-center text-3xl font-bold mt-6 mb-10'>CheckOut</h3>
                    <div className='grid lg:grid-cols-2'>
                        <input type="text" name='first' placeholder="First Name" className="input input-bordered shadow-md w-11/12 my-4 mx-auto" required />
                        <input type="text" name='last' placeholder="Last Name" className="input input-bordered w-11/12 my-4 shadow-md mx-auto" />
                        <input type="text" name='phone' placeholder="Phone No" className="input input-bordered w-11/12 my-4 shadow-md mx-auto" required />
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered w-11/12 my-4 shadow-md mx-auto" required />
                    </div>
                    <textarea name='textarea' className="textarea mb-6 w-9/12 mx-auto textarea-bordered shadow-md" placeholder="Write a details..." required></textarea>
                    <button className="btn w-full btn-active bg-orange-700 text-white border-0 rounded-3">Order Confirm</button>
                </form>
            </div>
            <Toaster />
        </div >
    );
};

export default Checkout;