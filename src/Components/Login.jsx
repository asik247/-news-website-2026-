import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import useMyHook from '../Hook/useMyHook';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    // Cullected user enter value;
   
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');

    //  submite handler code here;
    const handlerSubmit = (e) => {
        e.preventDefault();
        // console.log(nameValue, photoValue, emailValue, passwordValue);
        logIn(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
            }).catch(error => {
                console.log(error.message);
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;