import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSpot } from '../../store/spots';
import { useHistory, useParams } from 'react-router-dom';
import { ReactComponent as Logo } from '../../svgImg/logo-white.svg';
import '../EditSpotDetails/EditSpot.css';


const EditSpotDetails = ({spots}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log(useParams())
    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);
    console.log()

    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [locationName, setLocationName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();

        const spotForm = {
            ...spots,
            // spotId: spot?.id,
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
        console.log(update)
        if (update) {
            history.push(`/spots/${update?.id}`);
        }
    }

    return (
        <div className='spotsFormPageContainer'>
            <div className='spotsFormContainer'>
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
                        <button type='submit' className='postBtn'>Post New Spot</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditSpotDetails;
