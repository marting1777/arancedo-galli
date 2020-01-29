import React from 'react';

const gridImages = props => (
    <div className="col-md-3 ftco-animated">
        <a href="images/image_1.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(${props.backgroundUrl})`}}>
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
            </div>
        </a>
    </div>
);

export default gridImages;