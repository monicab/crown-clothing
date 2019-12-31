import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

    var onClickHandler = e => {
        history.push(`${match.url}${linkUrl}`);
    }
    return(
        <div 
            onClick={ onClickHandler }           
            className={`${size} menu-item`}>
                <div 
                    className='background-image' 
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                </div>
                <div className='content'>
                    <h1 className='title'>{ title }</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
    )
}

export default withRouter(MenuItem)