import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import { getASpot } from '../../store/spots';
import '../PostReviews/PostReviews.css';

const PostReviews = ({ spot }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getASpot(spot?.id))
    }, [hasSubmitted])

    console.log(spot)

    const onSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const reviewForm = {
            title,
            content,
            userId: user.id,
            spotId: spot.id
        }

        // console.log(reviewForm)

        let create = await dispatch(createReview(reviewForm))
        if (create) {
            history.push(`/spots/${spot?.id}`)
        }

        setTitle('');
        setContent('');
        setHasSubmitted(false);
    }

    return (
        <div className='postReviewContainer'>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        className='reviewInput'
                        type='text'
                        placeholder='Review Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='reviewInput'
                        type='text'
                        placeholder='Review Content'
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
            </form>
        </div>
    )
}

export default PostReviews;
