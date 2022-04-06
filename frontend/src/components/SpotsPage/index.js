import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotsCard from './SpotsCard';
import { getSpots } from '../../store/spots';
import '../SpotsPage/SpotsPage.css';

const SpotsPage = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots);
    const spotsArr = Object.values(spots);
    console.log(spots)

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div className='spotsPageContainer'>
            <h2>Spots Page</h2>
            <div className='spotsContainer'>
                {spotsArr.map((spot) => (
                    <SpotsCard key={spot.id}
                        id={spot.id}
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
