import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='navLink' onClick={() => setShowModal(true)}>Sign Up</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default SignupFormModal;
