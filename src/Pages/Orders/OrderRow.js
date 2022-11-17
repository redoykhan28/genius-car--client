import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, deleteHandler }) => {
    console.log(order)
    const { _id, serviceId, product, email, phone, cost } = order

    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://genious-car-server-liart.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (

        <tr>
            <th>
                <button onClick={() => deleteHandler(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                service.img &&
                                <img src={service?.img} alt=" Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product}</div>
                    </div>
                </div>
            </td>
            <td>
                <p> {email}</p>
            </td>
            <td>{phone}</td>
            <th>
                ${cost}
            </th>
        </tr>

    );
};

export default OrderRow;