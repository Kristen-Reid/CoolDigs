import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteSpot, getASpot } from '../../store/spots';
import { deleteReview } from '../../store/reviews';
import PostReviews from '../PostReviews';
import EditReviewsModal from '../EditReviews';
import '../SpotDetails/SpotDetails.css'
import has from 'prop-types/lib/has';

const SpotDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [hasDeleted, setHasDeleted] = useState(false);

    useEffect(() => {
        dispatch(getASpot(id))
    }, [hasDeleted])

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);


    return (
        <div className='spotPageContainer'>
            <div className='imageContainer'>
                <div>
                    {spot?.Images?.map(image => (
                        <img className='spotImg' key={image?.id} src={image?.image} alt={spot?.name}/>
                    ))}
                </div>
            </div>
            <div className='spotPageInfo'>
                <h2>{spot?.title}</h2>
                <p>{`$${spot?.price}`}</p>
                <p>{`${spot?.city}, ${spot?.state}`}</p>
                <p>{`${spot?.description}`}</p>
                </div>
                {user?.id === spot?.userId && (
                <div className='spotsBtnContainer'>
                    <a className='spotsEditBtn spotsBtnTxt' href={`/spots/${spot?.id}/edit`}>Edit Spot</a>
                    <a className='spotsDeleteBtn spotsBtnTxt' href={`/spots/`} onClick={() => dispatch(deleteSpot(id)) }>Delete Spot</a>
                </div>
                )}

            <PostReviews spot={spot} />

            <div className='reviewContainer'>
                {spot?.Reviews?.map(review => (
                    <div key={review?.id} className='reviewCard'>
                        <p>{review?.title}</p>
                        <p>{review?.User?.username}</p>
                        <p>{review?.content}</p>
                        <div className='editModalBtn'>
                            <EditReviewsModal review={review} />
                            <a className='rvwDeleteBtn rvwBtnTxt' onClick={async () => { await dispatch(deleteReview(review?.id)); setHasDeleted(!hasDeleted) }}>Delete Review</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpotDetail;
