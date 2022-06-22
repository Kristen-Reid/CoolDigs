import React, { useState } from 'react';
import DeleteReview from './DeleteReview';
import { Modal } from '../../context/Modal';


const DeleteReviewModal = ({ review, hasDeleted, setHasDeleted }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a  className='rvwBtnTxt  spotsBtnTxt' onClick={() => setShowModal(true)}>Delete Review</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteReview
                        review={review}
                        hasDeleted={hasDeleted}
                        setHasDeleted={setHasDeleted}
                        onClose={() => setShowModal(false)}
                    />
                </Modal>
            )}
        </>
    )
}


export default DeleteReviewModal;
