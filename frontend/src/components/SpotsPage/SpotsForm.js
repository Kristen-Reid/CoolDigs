import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../SpotsForm.css'


const SpotsForm = () => {
    const user = useSelector(state => state.session.user)

    const [title, setTitle] = useState('');
    const [state, setState] = useState('');
    const [locationName, setLocationName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');


    return (
        <div>

        </div>
    )
}

export default SpotsForm;
