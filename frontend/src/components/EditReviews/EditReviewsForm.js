import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getASpot } from '../../store/spots';
import { updateReview } from '../../store/reviews';
import '../EditReviews/EditReviews.css';

const EditReviewsForm = ({review}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState(review?.title);
    const [content, setContent] = useState(review?.content);
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getASpot(review?.spotId))
    }, [hasSubmitted]);

    useEffect(() => {

        setTitle(review?.id.title)
        setContent(review?.id.content)
    }, [review])

    useEffect(() => {
        const errors = [];

        if (!title?.length) errors.push('Please provide a title');
        if (title?.length < 5 || title?.length > 50) errors.push('Title must be no between 5 and 50 characters.');
        if (!content?.length) errors.push('Please provide review content.');
        if (content?.length < 5) errors.push('Content must 5 characters or more.');

        setValidationErrors(errors);
    }, [title, content]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        setShowError(true);

        const reviewForm = {
            id: review?.id,
            title,
            content
        }

        let update = await dispatch(updateReview(reviewForm));
        if (update) {
            history.push(`/spots/${review?.spotId}`)
        }


        setHasSubmitted(false);
    }
    console.log(review)

    return (
        <div className='EditReviewContainer'>
            <div>
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
                        className='editReviewInput'
                        type='text'
                        placeholder='Review Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='editReviewInput'
                        type='text'
                        placeholder='Review Content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='editRvwBtn'
                    >Post Review</button>
                </div>
            </form>
        </div>
    )
}


export default EditReviewsForm;
