import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import './deleteSpot.css';



const DeleteSpot = ({ spotId, onClose }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='deleteSpotContainer'>
            <div className='deleteSpotBox'>
                <div className='deleteSpotMessage'>
                    <h2>Delete Spot?</h2>
                    <p>Are you sure you want to delete this spot?</p>
                </div>
                <div className='deleteSpotBtnContainer'>
                    <button className='deleteSpotBtn' onClick={ async () => { await dispatch(deleteSpot(spotId)); history.push(`/spots/`) }}>Delete Spot</button>
                </div>
                <div>
                    <button type='submit' className='cancelRvwBtn' onClick={() => onClose()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default DeleteSpot;
