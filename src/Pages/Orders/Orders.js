import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import OrderRow from './OrderRow';
import toast, { Toaster } from 'react-hot-toast';


const Orders = () => {
    //use context
    const { user, logoutHandler } = useContext(authContext)

    //state for orders
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://genious-car-server-liart.vercel.app/orders?email=${user?.email}`, {

            headers: {

                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }

        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    logoutHandler()
                        .then(res => { })
                }

                return res.json()
            })
            .then(data => setOrder(data))

    }, [user?.email, logoutHandler])

    //deleteHandler
    const deleteHandler = id => {
        const agree = window.confirm('Are you sure you want to delete?')
        if (agree) {

            fetch(`https://genious-car-server-liart.vercel.app/orders/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    const remaining = order.filter(odr => odr._id !== id)
                    setOrder(remaining)
                    toast.success('Deleted Successfully')

                })
        }
    }

    return (
        <div className='w-9/12 mx-auto my-16'>
            <h3 className='text-3xl font-bold mt-4 mb-12
            '>My Orders: {order.length}</h3>
            {
                order.length === 0 ?
                    <div className='text-center my-16'>
                        <h3 className='text-2xl font-bold'>No order added into the list!</h3>
                    </div>

                    :

                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Email</th>
                                        <th>Phone No</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order?.map(odr => <OrderRow key={odr._id} order={odr} deleteHandler={deleteHandler}></OrderRow>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
            }

            <Toaster />
        </div>
    );
};

export default Orders;