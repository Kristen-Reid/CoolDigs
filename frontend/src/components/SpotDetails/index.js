import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getASpot } from '../../store/spots';
import PostReviews from '../PostReviews';
import DeletePostModal from '../DeleteSpotModal';
import DeleteReviewModal from '../DeleteReviewModal';
import EditReviewsModal from '../EditReviews';
import '../SpotDetails/SpotDetails.css';


const SpotDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [hasDeleted, setHasDeleted] = useState(false);


    useEffect(() => {
        dispatch(getASpot(id))
    }, [hasDeleted, id, dispatch])

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);
    const reviews = spot?.Reviews;

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
                <div><p className='spotsDescrip'>{`${spot?.description}`}</p></div>
                </div>
                {user?.id === spot?.userId && (
                <div className='spotsBtnContainer'>
                    <a className='spotsEditBtn spotsBtnTxt' href={`/spots/${spot?.id}/edit`}>Edit Spot</a>
                    <DeletePostModal spotId={id} />
                </div>
                )}

            <PostReviews spot={spot} />

            {reviews?.length === 1 ? (
                <div className='rvwCount'>
                    {reviews?.length} Review
                </div>
                    ) : (
                <div className='rvwCount'>
                    {reviews?.length} Reviews
                </div>
                        )}
            <div className='reviewContainer'>
                {spot?.Reviews?.map(review => (
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
                                    <DeleteReviewModal review={review} hasDeleted={hasDeleted} setHasDeleted={setHasDeleted} />
                            </div>
                        </div>
                        )}
                    </div>
                )).reverse()}
            </div>
        </div>
    )
}

export default SpotDetail;
