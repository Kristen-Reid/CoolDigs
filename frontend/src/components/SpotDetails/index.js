import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';
import '../SpotDetails/SpotDetails.css'

const SpotDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const user = useSelector(state => state.session.user);
    console.log(user)
    const spot = useSelector(state => state.spots[id]);

    return (
        <div className='spotPageContainer'>
            <div className='imageContainer'>
                <img className='spotImg' src='https://www.planetware.com/wpimages/2021/04/camping-for-beginners-complete-guide-how-to-camp-tips-light-up-the-night.jpg'/>
            </div>
            <div className='spotPageInfo'>
                <h2>{spot?.title}</h2>
                <p>{`$${spot?.price}`}</p>
                <p>{`${spot?.city}, ${spot?.state}`}</p>
                <p>{`${spot?.description}`}</p>
                <div>
                    {spot?.Images?.map(image => (
                        <img key={image?.id} src={image?.image} alt={spot?.name}/>
                    ))}
                </div>
                </div>
                {user?.id === spot?.userId && (
                <div className='spotsBtnContainer'>
                    <button className='spotsEditBtn'><a className='spotsBtnTxt' href={`/spots/${spot?.id}/edit`}>Edit Spot</a></button>
                    <button className='spotsDeleteBtn' onClick={() => dispatch(deleteSpot(id)) }><a className='spotsBtnTxt' href={`/spots/`}>Delete Spot</a></button>
                </div>
                )}
        </div>
    )
}

export default SpotDetail;
