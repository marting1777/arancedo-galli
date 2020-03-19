import React from 'react';
import './Service.scss';

const service = props => (
    <div className="col-xs-12 col-md-12 col-lg-6 text-center">
        <div className="practice-area-int bg-white ftco-animated p-4">
            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-4 col-lg-3">
                    <h3 className="mb-3"><a>{props.serviceTitle}</a></h3>
                </div>
                <div className="col-xs-12 col-md-8 col-lg-9">
                    {props.textService}
                </div>
            </div>
        </div>
    </div>
);

export default service;