import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { authContext } from '../../Context/AuthContext';
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'

    //use context
    const { loginHandler, setGoogle } = useContext(authContext)

    // state for error 
    const [error, setError] = useState(null)

    const googleHandler = () => {

        setGoogle()
            .then(res => {
                const user = res.user
                console.log(user)
                const currentUser = {

                    email: user.email
                }
                //get jwt token
                fetch('https://genious-car-server-liart.vercel.app/jwt', {

                    method: 'POST',
                    headers: {

                        'content-type': 'application/json'

                    },

                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replaced: true })

                    })

                toast.success('Congrats! Login Successful..')
            })
            .catch(err => console.log(err))

    }

    const btnHandler = (e) => {

        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value

        // console.log(email, password)

        if (password.length < 8) {

            setError('Password should be 8 lenght long')
        }

        loginHandler(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                form.reset()

                const currentUser = {

                    email: user.email
                }
                //get jwt token
                fetch('https://genious-car-server-liart.vercel.app/jwt', {

                    method: 'POST',
                    headers: {

                        'content-type': 'application/json'

                    },

                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replaced: true })

                    })

                toast.success('Congrats! Login Successful..')

            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })
    }

    return (
        <div className="hero lg:mt-20 bg-base-200">
            <div className="hero-content lg:w-full flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={img} alt="login" />
                </div>

                <div className='lg:w-1/2'>
                    <div className="card  flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100">
                        <form onSubmit={btnHandler} >
                            <div className="card-body">
                                <h4 className='text-center text-3xl my-4'>Login</h4>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover text-orange-700">Forgot password?</Link>
                                        <p className='my-2 text-red-700'><small>{error}</small></p>

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border-0 bg-orange-700">Login</button>
                                </div>
                                <p className='text-sm my-4'>Have an account? <Link to={'/register'} className='text-orange-700'>Register</Link></p>
                            </div>

                        </form>
                        <div>
                            <button onClick={googleHandler} className='btn btn-outline mb-6 w-1/4 mx-auto'><FaGoogle></FaGoogle></button>
                        </div>
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;