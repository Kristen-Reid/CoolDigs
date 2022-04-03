import React, { useState, useEffect } from 'react';
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
                    <ul className='profile-dropdown'>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <a onClick={logout} className='logoutBtn'>Log Out</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}


export default ProfileButton;
