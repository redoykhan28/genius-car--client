import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { authContext } from '../../../Context/AuthContext';

const Header = () => {
    //use context
    const { user, logoutHandler } = useContext(authContext)

    //signout
    const handleSignout = () => {

        logoutHandler()
            .then(res => { })
            .catch(err => console.log(err))

    }

    return (
        <div className="navbar py-4 w-11/12 mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink className='font-semibold' to={'/home'}>Home</NavLink>
                        {
                            user ?
                                <NavLink className='font-semibold' to={'/orders'}>Orders</NavLink>
                                :
                                <NavLink className='font-semibold' to={'/login'}>Login</NavLink>
                        }
                        {
                            user ?
                                <button onClick={handleSignout} className="btn border-0 my-4 rounded-none text-white mx-2">Signout</button>
                                :
                                undefined
                        }
                        <button className="btn btn-outline  rounded-none text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white hover:border-0">Appoinment</button>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-4/6' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <NavLink className={({ isActive }) => isActive ? 'font-semibold text-orange-700' : 'font-semibold'} to={'/home'}>Home</NavLink>
                    {
                        user ?
                            <NavLink className={({ isActive }) => isActive ? 'font-semibold mx-4 text-orange-700' : 'font-semibold mx-4'} to={'/orders'}>Orders</NavLink>
                            :
                            <NavLink className={({ isActive }) => isActive ? 'font-semibold mx-4 text-orange-700' : 'font-semibold mx-4'} to={'/login'}>Login</NavLink>
                    }

                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ?
                        <button onClick={handleSignout} className="btn border-0 rounded-none text-white mx-2">Signout</button>
                        :
                        undefined
                }
                <button className="btn btn-outline rounded-none text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white hover:border-0">Appoinment</button>
            </div>
        </div>
    );
};

export default Header;