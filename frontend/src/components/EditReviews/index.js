import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getSpots, getASpot } from '../../store/spots';
import EditReviewsForm from './EditReviewsForm';

const EditReviewsModal = ({ review }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getASpot(id))
    }, [showModal])

    return (
        <>
            <a className='editRvwLink' onClick={() => setShowModal(true)}>Edit Review</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReviewsForm review={review} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditReviewsModal;
