import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import '../DeletePostModal/deletePost.css';



const DeletePost = ({ spotId }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='deletePostContainer'>
            <div className='deletePostBox'>
                <div className='deletePostMessage'>
                    <h2>Delete Spot?</h2>
                    <p>Are you sure you want to delete this spot?</p>
                </div>
                <div className='deletePostBt'>
                    <button className='deletePostBtn' onClick={() => { dispatch(deleteSpot(spotId)); history.push(`/spots/`) }}>Delete Spot</button>
                </div>
            </div>
        </div>
    )
}


export default DeletePost;
