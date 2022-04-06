import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { ReactComponent as ProfilePic } from '../../svgImg/profileImg.svg'
import '../Navigation/Dropdown.css'


const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <div className='profileContainer'>
            <div className='profileBtn'>
                <a onClick={openMenu} className='openMenu'>
                    <ProfilePic/>
                </a>
            </div>
            {showMenu && (
                <div className='dropdownContainer'>
                    <div className='dropdownContent'>
                        <div className='dropdownInfoContainer'>
                            <li className='dropdownInfo'>{user.username}</li>
                            <li className='dropdownInfo'>{user.email}</li>
                        </div>
                        <div className='dropdownBtnContainer'>
                            <a className='dropdownList' onClick={logout}>Log Out</a>
                            <NavLink className='dropdownList' to='/spots'>Camping Spots</NavLink>
                            <NavLink className='dropdownList' to='/spots/new'>Add A New Spot</NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default ProfileButton;
