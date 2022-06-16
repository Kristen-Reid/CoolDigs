import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { ReactComponent as Logo } from '../../svgImg/logo-white.svg'
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (<ProfileButton user={sessionUser} />);
    } else {
        sessionLinks = (
            <div>
                <LoginFormModal />
                <SignupFormModal />
            </div>
        );
    };

    return (
        <div id='navContainer'>
            <div className='logoContainer'>
                <NavLink exact to='/' className='homeBtn'>CoolDigs</NavLink>
                <NavLink exact to='/' className='logo'>{<Logo />}</NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    )
}

export default Navigation;
