import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';
import '../HomePage/Home.css';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!showModal) return;

        const closeMenu = () => {
            setShowModal(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showModal]);

    return (
        <div className='homeContainer'>
            <div className='homeGreetContainer'>
                <div className='homePageGreet'>
                    <p className='greet'>Dig deep and find yourself outside under the stars...</p>
                </div>
                <div className='homePageGreet2'>
                    <p>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</p>
                </div>
            </div>
            <div className='homeImg'>
                <img src='https://specials-images.forbesimg.com/imageserve/591656039/960x0.jpg?fit=scale'
                    className='homePic'
                />
            </div>
            <div className='homeBoxContainer1' onClick={() => setShowModal(true)}>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
                )}
                <div className='homeBox box1'
                ><img src='https://bloximages.newyork1.vip.townnews.com/sandiegomagazine.com/content/tncms/assets/v3/editorial/e/14/e147cebe-8366-56c1-9466-a29590fdf155/5e14dbc21e599.image.jpg'
                    className='box1Img'
                    />
                    <div className='box1Content'>
                        <p className='boxText'>Longer days + warmer nights. Explore newly unlocked spots!</p><div className='fakeBtn1'>Signup Now</div>
                    </div>
                </div>
                <div className='homeBox box2'
                ><img src='https://scontent.fyip1-1.fna.fbcdn.net/v/t1.6435-9/166398312_271265571395420_2630457474936819268_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=laRxdPrY-hsAX8gWkzS&_nc_ht=scontent.fyip1-1.fna&oh=00_AT-VzHVr_1jrfbTHPbISqac4P5iy2pgQzhGQD94Kf74gQQ&oe=6270525F'
                    className='box2Img'
                />
                    <div className='box2Content'>
                        <p className='boxText'>See America's Best CoolDigs to Visit in 2022</p><div className='fakeBtn2'>Signup Now</div>
                    </div>
                    </div>
                </div>
            <div className='homeImg2'>
                <img src='https://www.outsideonline.com/wp-content/uploads/2020/11/10/couple-camping-on-beach_h.jpg?crop=16:9&width=960&enable=upscale&quality=100'
                    className='homePic2'
                />
            </div>
        </div>
    )
}


export default HomePage;
