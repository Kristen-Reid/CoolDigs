import React from 'react';
// import '../SpotsPage/SpotsPage.css';

const SpotsCard = ({title, locationName, city, state, price}) => {

    return (
        <div className='spotsContainer2'>
            <div className='spotsBox'>
                <img />
            <div className='spotsInfoContainer'>
                <div className='spotsTitle'>
                    <p>{title}</p>
                </div>
                <div className='spotsBoxInfo'>
                    <p>{`${locationName} -- ${city}, ${state}`}</p>
                </div>
                <div className='spotsPrice'>
                    <p>{price}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SpotsCard;
