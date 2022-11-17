import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'

    //use context
    const { regHandler } = useContext(authContext)

    // state for error 
    const [error, setError] = useState(null)

    const btnHandler = (e) => {

        e.preventDefault()
        let form = e.target
        let name = form.name.value
        let email = form.email.value
        let password = form.password.value

        // console.log(name, email, password)
        if (password.length < 8) {

            setError('Password should be 8 lenght long')
        }

        regHandler(email, password)
            .then(res => {

                const user = res.user
                console.log(user)
                form.reset()
                toast.success('Congrats! Registration Successful..')
                navigate(from, { replaced: true })


            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })
    }
    return (
        <div className="hero lg:mt-14 bg-base-200">
            <div className="hero-content lg:w-full flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={img} alt="register" />
                </div>

                <div className='lg:w-1/2'>
                    <form onSubmit={btnHandler} className="card  flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h4 className='text-center text-3xl my-4'>Register</h4>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name='name' placeholder="Username" className="input input-bordered" required />
                            </div>

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
                            </div>
                            <p className='my-2 text-red-700'><small>{error}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn border-0 bg-orange-700">Register</button>
                            </div>
                            <p className='text-sm my-4'>Already have an account? <Link to={'/login'} className='text-orange-700'>login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;