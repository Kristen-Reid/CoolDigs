import React from 'react';
import '../HomePage/Home.css';

const HomePage = () => {
    return (
        <div className='homeContainer'>
            <div className='homeImg'>
                <img src='https://specials-images.forbesimg.com/imageserve/591656039/960x0.jpg?fit=scale'
                    className='homePic'
                />
            </div>
            <div className='homeBoxContainer1'>
                <div className='homeBox purple'><img src='https://bloximages.newyork1.vip.townnews.com/sandiegomagazine.com/content/tncms/assets/v3/editorial/e/14/e147cebe-8366-56c1-9466-a29590fdf155/5e14dbc21e599.image.jpg'
                    className='purpleImg'
                />
                </div>
                <div className='homeBox green'><img src='https://scontent.fyip1-1.fna.fbcdn.net/v/t1.6435-9/166398312_271265571395420_2630457474936819268_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=laRxdPrY-hsAX8gWkzS&_nc_ht=scontent.fyip1-1.fna&oh=00_AT-VzHVr_1jrfbTHPbISqac4P5iy2pgQzhGQD94Kf74gQQ&oe=6270525F'
                    className='greenImg'
                /></div>
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
