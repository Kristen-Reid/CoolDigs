import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/reviews';
import '../EditReviews/EditReviews.css';

const EditReviewsForm = ({review, setShowModal}) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(review?.title);
    const [content, setContent] = useState(review?.content);
    const [validationErrors, setValidationErrors] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!content?.length) errors.push('Please provide review content.');
        if (content?.length < 5) errors.push('Content must 5 characters or more.');

        setValidationErrors(errors);
    }, [content]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const reviewForm = {
            id: review?.id,
            title,
            content
        }

        if (validationErrors.length === 0) {
            await dispatch(updateReview(reviewForm));
            setShowModal(false)
        }
    }

    return (
        <div className='editReviewContainer'>
            <div className='errors'>
                {showError && (
                <ul className="errors">
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                )
                }
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        className='editTitleInput'
                        type='text'
                        placeholder='Review Title (optional)...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className='editContentInput'
                        type='text'
                        placeholder='Review Content...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className='editRvwBtnContainer'>
                    <button
                        type='submit'
                        className='editRvwBtn'
                    >Edit Review</button>
                </div>
            </form>
        </div>
    )
}


export default EditReviewsForm;
