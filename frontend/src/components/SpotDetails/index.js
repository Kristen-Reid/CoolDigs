import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../SpotDetails/SpotDetails.css'

const SpotDetail = () => {
    const { id } = useParams();

    const spot = useSelector(state => state.spots[id]);

    return (
        <div className='spotPageContainer'>
            <div className='imageContainer'>
                <img className='spotImg' src='https://www.planetware.com/wpimages/2021/04/camping-for-beginners-complete-guide-how-to-camp-tips-light-up-the-night.jpg'/>
            </div>
            <h2>{spot?.title}</h2>
            <p>{`$${spot?.price}`}</p>
            <p>{`${spot?.city}, ${spot?.state}`}</p>
        </div>
    )
}

export default SpotDetail;
