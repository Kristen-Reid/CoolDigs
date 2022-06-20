import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { ReactComponent as ProfilePic } from '../../svgImg/profileImg2.svg'
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
                            <div>
                                <li className='dropdownInfo'>Welcome</li>
                            </div>
                            <div>
                                <li className='dropdownInfo2'>{user.username}</li>
                            </div>
                            {/* <li className='dropdownInfo'>{user.email}</li> */}
                        </div>
                        <div className='dropdownBtnContainer'>
                            <NavLink className='dropdownList' to='/spots'>Camping Spots</NavLink>
                            <NavLink className='dropdownList' to='/spots/new'>Add A New Spot</NavLink>
                            <a className='dropdownList' onClick={logout}>Log Out</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default ProfileButton;
