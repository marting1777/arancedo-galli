import React from 'react';
import './Banner.scss';

const banner = props => (
    <div className="Banner" style={{backgroundImage: `url(${props.backgroundUrl})`}}>
        {props.children}
    </div>
);

export default banner;