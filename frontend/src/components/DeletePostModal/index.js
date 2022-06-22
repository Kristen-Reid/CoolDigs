import React, { useState } from 'react';
import DeletePost from './DeletePost';
import { Modal } from '../../context/Modal';


const DeletePostModal = ({ spotId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a  className='spotsDeleteBtn spotsBtnTxt' onClick={() => setShowModal(true)}>Delete Post</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePost spotId={spotId} />
                </Modal>
            )}
        </>
    )
}


export default DeletePostModal;
