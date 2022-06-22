import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import '../DeleteReviewModal/deleteReview.css';



const DeletePost = ({ review, hasDeleted, setHasDeleted }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='deletePostContainer'>
            <div className='deletePostBox'>
                <div className='deletePostMessage'>
                    <h2>Delete Review?</h2>
                    <p>Are you sure you want to delete this review?</p>
                </div>
                <div className='deleteReviewBtnContainer'>
                    <button className='deleteReviewBtn' onClick={async () => { await dispatch(deleteReview(review?.id)); setHasDeleted(!hasDeleted) }}>Delete Review</button>
                </div>
            </div>
        </div>
    )
}


export default DeletePost;
