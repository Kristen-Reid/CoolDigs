import React from 'react';

const SpotsCard = ({id, title, locationName, city, state, price, image}) => {

    return (
        <div className='spotsBox'>
            <a href={`/spots/${id}`}>
                    <div className='imageBox'>
                    <img className='spotsImage' scr={image} alt='image'/>
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
            </a>
        </div>
    )
}

export default SpotsCard;
