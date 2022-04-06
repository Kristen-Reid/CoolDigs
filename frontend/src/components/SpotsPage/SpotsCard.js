import React from 'react';

const SpotsCard = ({title, locationName, city, state, price}) => {

    return (
            <div className='spotsBox'>
                <div className='imageBox'>
                    <img className='spotsImage'/>
                </div>
            <div className='spotsInfoContainer'>
                <div className='spotsTitle'>
                    <p>{title}</p>
                </div>
                <div className='spotsBoxInfo'>
                    <p>{`${locationName} -- ${city}, ${state}`}</p>
                </div>
                <div className='spotsPrice'>
                    <p>{`$${price}`}</p>
                </div>
            </div>
            </div>
    )
}

export default SpotsCard;
