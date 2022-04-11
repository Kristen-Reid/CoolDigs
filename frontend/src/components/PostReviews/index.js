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
        dispatch(getASpot(id))
    }, [hasSubmitted]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const reviewForm = {
            title,
            content,
            userId: user.id,
            spotId: spot.id
        }


        let create = await dispatch(createReview(reviewForm));
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
                <div className='reviewContent'>
                    <input
                        className='reviewTitleInput'
                        type='text'
                        placeholder='Add Review Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='reviewContent'>
                    <textarea
                        className='reviewContentInput'
                        type='text'
                        placeholder='Add Review Content'
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
