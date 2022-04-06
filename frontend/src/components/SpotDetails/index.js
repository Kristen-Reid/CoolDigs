import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpots } from '../../store/spots';
import '../SpotDetails/SpotDetails.css'

const SpotDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const spots = useSelector(state => state.spots[id]);
    const spot = Object.values(spots)

      useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div className='spotPageContainer'>
            <h2>Post</h2>
            <div className='imageContainer'>
                <img className='spotImg' src='https://www.planetware.com/wpimages/2021/04/camping-for-beginners-complete-guide-how-to-camp-tips-light-up-the-night.jpg'/>
            </div>
        </div>
    )
}

export default SpotDetail;
