import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation()

    if (loader) {

        return <div className='text-xl font-bold my-10'><span>Loading...</span></div>
    }

    if (user) {

        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>

};

export default PrivetRoute;