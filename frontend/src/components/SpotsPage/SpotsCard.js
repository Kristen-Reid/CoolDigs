import React from 'react';
import { useHistory } from 'react-router-dom';


const SpotsCard = ({id, title, locationName, city, state, price, image}) => {
    const history = useHistory();

    return (
        <div className='spotsBox' onClick={() => history.push(`/spots/${id}`)}>
                    <div className='imageBox'>
                    <img className='spotsImage' src={image} alt='image'/>
                    </div>
                    <div className='spotsInfoContainer'>
                    <div className='spotsTitle'>
                        <p>{title}</p>
                    </div>
                    <div className='spotsBoxInfo'>
                        <p>{`${locationName} -- ${city}, ${state}`}</p>
                    </div>
                    <div className='spotsPrice'>
                        <p><span>From </span>{`$${price}`}<span>/ night</span></p>
                    </div>
                </div>
        </div>
    )
}

export default SpotsCard;
