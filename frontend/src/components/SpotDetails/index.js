import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';
import '../SpotDetails/SpotDetails.css'

const SpotDetail = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

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
        </div>
    )
}

export default SpotDetail;
