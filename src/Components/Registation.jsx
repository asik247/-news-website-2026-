import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useMyHook from '../Hook/useMyHook';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';


const Registation = () => {
    const { registationUsers,user } = useContext(AuthContext);
    // console.log('current user',user);
    // Cullected user enter value;
    const [nameValue, handleNameChange] = useMyHook('');
    const [photoValue, handlePhotoChange] = useMyHook('');
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // Error and Success message state code here;
    const [success, setSuccess] = useState('');
    const [error, setError] = useState(null);
    const navgate = useNavigate()

    //  submite handler code here;
    const handlerSubmit = (e) => {
        e.preventDefault();
        // Reset code here;
        setSuccess('');
        setError(null);
        // console.log(nameValue,photoValue,emailValue,passwordValue);
        registationUsers(emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSuccess(res.user);
                navgate('/')
            const profile = {
                displayName:nameValue,
                photoURL:photoValue
            }
            updateProfile(res.user,profile)
            // ✅✅✅✅✅
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    return (

        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Registation now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlerSubmit}>
                                <fieldset className="fieldset">
                                    {/* Name inpul field */}
                                    <label className="label">Name</label>
                                    <input type="text" className="input" value={nameValue} onChange={handleNameChange} placeholder="Your Name" />
                                    {/* Photo URL input field */}
                                    <label className="label">Photo</label>
                                    <input type="text" className="input" value={photoValue} onChange={handlePhotoChange} placeholder="PhotoURL" />
                                    {/* Email input field */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" value={emailValue} onChange={handleEmailChange} placeholder="Email" />
                                    {/* Password input field */}
                                    <label className="label">Password</label>
                                    <input type="password" className="input" value={passwordValue} onChange={handlePasswordChange} placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">Registation</button>
                                </fieldset>
                                <div>
                                    Already have'n accoutn ? please <Link className='text-blue-700 underline text-xl font-bold' to={'/auth/login'}>login</Link>
                                </div>
                                {/* Error and Success messagae showing code here */}
                                <div>
                                    {success && <p className='text-green-500 font-bold text-xl'>Successfully account create!</p>}
                                    {error && <p className='text-green-500 font-bold text-xl'>{error}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Registation;