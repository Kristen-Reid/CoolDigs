import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { ReactComponent as Logo } from '../../svgImg/logo-white.svg';
import './SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    }

    return (
        <div className='signupContainer'>
            <form onSubmit={handleSubmit}>
                <div className='logoContainer'>
                    <h2 className='logoName'>CoolDigs</h2>
                    {<Logo/> }
                </div>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label>
                        <input
                        className='modalInput'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    </label>
                </div>
                <div>
                  <label>
                        <input
                        className='modalInput'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                        required
                    />
                </label>
                </div>
                <div>
                    <label>
                        <input
                            className='modalInput'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            className='modalInput'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Confirm Password'
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type='submit' className='signupBtn'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}


export default SignupForm;
