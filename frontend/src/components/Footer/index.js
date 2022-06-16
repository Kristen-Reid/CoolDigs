import React from 'react';
import { ReactComponent as GitHub } from '../../svgImg/github.svg';
import { ReactComponent as LinkedIn } from '../../svgImg/linkedin.svg';
import { ReactComponent as Node } from '../../svgImg/node.svg';
import { ReactComponent as Express } from '../../svgImg/express.svg';
import { ReactComponent as Postgres } from '../../svgImg/postgres.svg';
import { ReactComponent as ReactIcon } from '../../svgImg/react.svg';
import { ReactComponent as ReduxIcon } from '../../svgImg/redux.svg';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
                <div className='aboutMe'>
                <a href='https://kristenreid.dev' className='name'>
                    <span>
                        Kristen Reid
                    </span>
                    </a>
                    <a href='https://github.com/Kristen-Reid/CoolDigs' className='github'>
                            <GitHub/>
                        </a>
                    <a href='https://www.linkedin.com/in/kristen-reid-a4b499202/' className='linkedIn'>
                            <LinkedIn/>
                        </a>
                </div>
            <div className='tech'>
                <ReactIcon className='react' />
                <ReduxIcon className='redux'/>
                <Express className='express'/>
                <Node className='node'/>
                <Postgres className='postgres'/>
            </div>
    </div>
    )
}

export default Footer;
