import React from 'react';
import { ReactComponent as GitHub } from '../../svgImg/github.svg';
import { ReactComponent as LinkedIn } from '../../svgImg/linkedin.svg';
import { ReactComponent as Node } from '../../svgImg/node.svg';
import { ReactComponent as Express } from '../../svgImg/express.svg';
import { ReactComponent as Postgres } from '../../svgImg/postgres.svg';
import { ReactComponent as ReactIcon } from '../../svgImg/react.svg';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
                <div className='aboutMe'>
                    <p className='name'>Kristen Reid</p>
                    <a href='https://github.com/Kristen-Reid/CoolDigs' className='github'>
                            <GitHub/>
                        </a>
                    <a href='https://www.linkedin.com/in/kristen-reid-a4b499202/' className='linkedin'>
                            <LinkedIn/>
                        </a>
                </div>
            <div className='tech'>
                <Node className='node'/>
                <Express className='express'/>
                <Postgres className='postgres'/>
                <ReactIcon className='reactIcon'/>
            </div>
    </div>
    )
}

export default Footer;
