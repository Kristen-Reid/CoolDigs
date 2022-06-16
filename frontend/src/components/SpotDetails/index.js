import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteSpot, getASpot } from '../../store/spots';
import { deleteReview } from '../../store/reviews';
import PostReviews from '../PostReviews';
import EditReviewsModal from '../EditReviews';
import '../SpotDetails/SpotDetails.css';


const SpotDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [hasDeleted, setHasDeleted] = useState(false);


    useEffect(() => {
        dispatch(getASpot(id))
    }, [hasDeleted])

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);
    const reviews = spot?.Reviews
    console.log(typeof reviews,'@@@@@@@@@@@@@@@@@@@@@@')

    if (!user) {
        history.push('/')
    }
    
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
                <h2 className='spotTitle'>{spot?.title}</h2>
                <p className='spotPrice'>{`$${spot?.price}`}</p>
                <p className='spotStateAndCity'>{`${spot?.city}, ${spot?.state}`}</p>
                <p className='spotsDescrip'>{`${spot?.description}`}</p>
                </div>
                {user?.id === spot?.userId && (
                <div className='spotsBtnContainer'>
                    <a className='spotsEditBtn spotsBtnTxt' href={`/spots/${spot?.id}/edit`}>Edit Spot</a>
                    <a className='spotsDeleteBtn spotsBtnTxt' href={`/spots/`} onClick={() => dispatch(deleteSpot(id)) }>Delete Spot</a>
                </div>
                )}

            <PostReviews spot={spot} />

            <div className='reviewContainer'>
                {reviews?.reverse().map(review => (
                    <div key={review?.id} className='reviewCard'>
                        <p className='rvwTitle'>{review?.title}</p>
                        <p className='rvwUserName'>{review?.User?.username}</p>
                        <p className='rvwContent'>{review?.content}</p>
                        {user?.id === review?.userId && (
                        <div className='editRvwBtnContainer'>
                            <div className='rvwEditBtn'>
                                <EditReviewsModal review={review} />
                            </div>
                            <div className='rvwDeleteBtn'>
                                <a className='rvwBtnTxt' onClick={async () => { await dispatch(deleteReview(review?.id)); setHasDeleted(!hasDeleted) }}>Delete Review</a>
                            </div>
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpotDetail;
