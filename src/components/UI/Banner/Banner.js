import React from 'react';
import './Banner.css';

const banner = props => (
    <div className="Banner">
        <div className="BannerText" style={props.bannerInlineStyle}>
            <h1>{props.bannerTitle}</h1>
            <p>{props.bannerSubtitle}</p>
        </div>
    </div>
);

export default banner;