import React from 'react';
import './LawyerCard.scss';

const lawyerCard = props => (
    <div className="col-lg-3 col-sm-6">
        <div className="block-2 ftco-animated">
            <div className="flipper">
                <div className="front" style={{backgroundImage: `URL(${props.imageLawyer})`}}>
                    <div className="box">
                        <h2>{props.lawyerName}</h2>
                    </div>
                </div>
            </div>
            <div className="back">
                <blockquote>
                    <p>&ldquo;{props.lawyerDescription}&rdquo;</p>
                </blockquote>
                <div className="author d-flex">
                    <div className="image mr-3 align-self-center">
                        <img src={props.imageLawyer} alt={props.lawyerName} />
                    </div>
                    <div className="name align-self-center">{props.lawyerName} <span className="position">Insurance Lawyer</span></div>
                </div>
            </div>
        </div>
    </div>
);

export default lawyerCard;