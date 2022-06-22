import React, { useState } from 'react';
import DeleteSpot from './DeleteSpot';
import { Modal } from '../../context/Modal';


const DeleteSpotModal = ({ spotId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a  className='spotsDeleteBtn spotsBtnTxt' onClick={() => setShowModal(true)}>Delete Post</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteSpot
                        spotId={spotId}
                        onClose={() => setShowModal(false)}
                    />
                </Modal>
            )}
        </>
    )
}


export default DeleteSpotModal;
