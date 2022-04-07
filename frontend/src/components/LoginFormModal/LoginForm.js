import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { ReactComponent as Logo } from '../../svgImg/logo-white.svg';
import './LoginForm.css'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        }

        const demo = async () => {
            return await dispatch(sessionActions.login({ 'credential': 'Demo-lition', 'password': 'password' }))
        }

    return (
        <div className='loginContainer'>
            <div className='logoContainer'>
                <h2 className='logoName'>CoolDigs</h2>
                {<Logo/> }
            </div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='credInput input'>
                    <label>
                        <input
                        id='credential'
                        className='modalInput'
                        type='text'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        placeholder='Username or Email'
                        required
                    />
                    </label>
                </div>
                <div className='passwordInput input'>
                    <label>
                        <input
                        id='password'
                        className='modalInput'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    </label>
                </div>
                <div className='submitBtnContainer'>
                    <button type='submit' className='loginBtn'>Log In</button>
                </div>
                <div>
                    <button type='submit' className='demoBtn'
                        onClick={ async ()=> demo()}
                    >Demo Login</button>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;
