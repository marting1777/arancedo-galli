import React from 'react';

const practiceArea = props => (
    <div className="col-md-3 col-lg-4 text-center">
        <div className="practice-area ftco-animated">
            <div className="icon d-flex justify-content-center align-items-center">
                <span className={props.icon}></span>
            </div>
            <h3><a href="#">{props.practiceArea}</a></h3>
        </div>
    </div>
);

export default practiceArea;