import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import useMyHook from '../Hook/useMyHook';

const Login = () => {
    const { logIn,user } = useContext(AuthContext);
    // Cullected user enter value;
    const location = useLocation()
    const navgate = useNavigate()
    // console.log(location);
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and Success message state code here;
    const [success, setSuccess] = useState('');
    const [error, setError] = useState(null);
    //  submite handler code here;
    const handlerSubmit = (e) => {
        e.preventDefault();
        // Reset code here;
        setSuccess('');
        setError(null);
        // console.log(nameValue, photoValue, emailValue, passwordValue);
        logIn(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user)
                navgate(location.state ||'/')
            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlerSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" value={emailValue} onChange={handleEmailChange} placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" value={passwordValue} onChange={handlePasswordChange} placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                                <div>
                                    New to our website ? please <Link className='text-blue-700 underline text-xl font-bold' to={'/auth/registation'}>Registation</Link>
                                </div>
                                {/* Error and Success messagae showing code here */}
                                <div>
                                    {success && <p className='text-green-500 font-bold text-xl'>Successfully account create!</p>}
                                    {error && <p className='text-green-500 font-bold text-xl'>{error}</p>}
                                </div>
                            </form>
                            <div>
                                {user&&<div>
                                    <img src={user.photoURL} alt="" />
                                    <h1>{user.displayName}</h1>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;