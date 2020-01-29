import React from 'react';

const serviceCard = props => (
    <div className="col-md-4 text-center services align-self-stretch ftco-animated p-4">
        <div className="icon"><span className={props.serviceIcon}></span></div>
        <div className="media-body">
            <h3 className="heading mb-3"><a href="#">{props.title}</a></h3>
            <p>{props.description}</p>
        </div>
    </div>
);

export default serviceCard;