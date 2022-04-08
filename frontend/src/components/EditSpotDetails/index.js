import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSpot } from '../../store/spots';
import { useHistory, useParams } from 'react-router-dom';
import { ReactComponent as Logo } from '../../svgImg/logo-white.svg';
import '../EditSpotDetails/EditSpot.css';


const EditSpotDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);


    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [locationName, setLocationName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
         const errors = [];

        const validImage = /\.(jpg|jpeg|png|gif)$/
        const validPrice = /^[^a-zA-Z][0-9]*\.?[0-9]*$/

        if (!title.length) errors.push('Please provide a title');
        if (title.length > 100) errors.push('Title must be no greater than 100 characters.');
        if (!city.length) errors.push('Please provide a city');
        if (city.length > 50) errors.push('City must be no greater than 50 characters.');
        if (!state.length) errors.push('Please provide a state');
        if (state.length > 50) errors.push('State must be no greater than 50 characters.');
        if (locationName.length > 50) errors.push('Location name must be no greater than 50 characters.');
        if (!price) errors.push('Please provide a price');
        if (!validPrice.test(price) || price.length > 6) errors.push('Please provide a valid price');
        if (!description.length) errors.push('Please provide a description');
        if (!locationName.length) errors.push('Please provide a location name');
        if (!image.length) errors.push('Please provide a URL for image');
        if (!validImage.test(image)) errors.push('Please provide a valid image URL');

        setValidationErrors(errors);
    }, [title, city, state, locationName, price, description, image])

    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const spotForm = {
            id: id,
            title,
            city,
            state,
            locationName,
            price,
            description,
            image,
            userId: user.id
        };


        let update = await dispatch(updateSpot(spotForm));
        if (update) {
            history.push(`/spots/${update?.id}`);
        }
    }

    return (
        <div className='spotsFormPageContainer'>
            <div className='spotsFormContainer'>
                <div>
                    {/* Temp fix */}
                {showError && (
                <ul className="errors">
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                )
                }
            </div>
                <img />
                <div className='logoContainer'>
                    <h2 className='logoName'>CoolDigs</h2>
                    {<Logo/> }
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='State'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='Location Name'
                            value={locationName}
                            onChange={(e) => setLocationName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='spotsInput'
                            type='text'
                            placeholder='Image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='postBtn'
                            // disabled={validationErrors.length > 0}
                        >Post New Spot</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditSpotDetails;
