import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import { getASpot } from '../../store/spots';
import '../PostReviews/PostReviews.css';

const PostReviews = ({ spot }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!content?.length) errors.push('Please provide review content.');
        if (content?.length < 5) errors.push('Content must be 5 characters or more.');

        setValidationErrors(errors);
    }, [content]);

    useEffect(() => {
        dispatch(getASpot(id))
    }, [hasSubmitted, dispatch, id]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        setShowError(true);

        const reviewForm = {
            title,
            content,
            userId: user?.id,
            spotId: spot?.id
        }


        if (validationErrors.length === 0) {
            let create = await dispatch(createReview(reviewForm));
            setTitle('');
            setContent('');
            setHasSubmitted(false);
            setValidationErrors([]);
            // if (create) {
            //     history.push(`/spots/${spot?.id}`)
            // }
        }

        // setTitle('');
        setHasSubmitted(false);
    }

    return (
        <div className='postReviewContainer'>
            <form onSubmit={onSubmit}>
            <div className='errors'>
                {showError && (
                    <ul className="errors">
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                        ))}
                </ul>
                )
            }
                <div className='reviewContent'>
                    <h2><span>Leave a review :</span></h2>
                    <input
                        className='reviewTitleInput'
                        type='text'
                        placeholder='Add Review Title (optional)...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='reviewContent'>
                    <textarea
                        className='reviewContentInput'
                        type='text'
                        placeholder='Add Review Content...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='postRvwBtn'
                    >Post Review</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default PostReviews;
