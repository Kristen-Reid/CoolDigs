import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewsForm from './EditReviewsForm';

const EditReviewsModal = ({review}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='editRvwLink' onClick={() => setShowModal(true)}>Edit Review</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReviewsForm review={review}/>
                </Modal>
            )}
        </>
    )
}

export default EditReviewsModal;
