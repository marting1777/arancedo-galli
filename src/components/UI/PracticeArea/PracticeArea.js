import React from 'react';
import { NavLink } from 'react-router-dom';

const practiceArea = props => (
    <div className="col-md-3 col-lg-4 text-center">
        <div className="practice-area ftco-animated">
            <div className="icon d-flex justify-content-center align-items-center">
                <span className={props.icon}></span>
            </div>
            <h3><NavLink to="/servicios">{props.practiceArea}</NavLink></h3>
        </div>
    </div>
);

export default practiceArea;