import React from 'react';
import { useSelector } from 'react-redux';
import SpotsCard from './SpotsCard';
import '../SpotsPage/SpotsPage.css';

const SpotsPage = () => {
    const spots = useSelector(state => state.spots);
    const spotsArr = Object.values(spots);


    return (
        <div className='spotsPageContainer'>
            <h2 className='spotsPageTitle'>Camping Spots</h2>
            <div className='spotsContainer'>
                {spotsArr.map((spot) => (
                    <SpotsCard key={spot.id}
                        id={spot.id}
                        image={spot?.Images[0]?.image}
                        title={spot.title}
                        locationName={spot.locationName}
                        city={spot.city}
                        state={spot.state}
                        price={spot.price}
                    />
                         ))}
            </div>
        </div>
    )
}

export default SpotsPage;
