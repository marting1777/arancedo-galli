import React from 'react';

const newsletter = props => (
    <section className="ftco-section-parallax bg-secondary">
        <div className="parallax-img d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animated">
                        <h2>{props.titleNewsletter}</h2>
                        <p>{props.subtitleNewsletter}</p>
                        <div className="row d-flex justify-content-center mt-4 mb-4">
                            <div className="col-md-8">
                                <form action="#" className="subscribe-form">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control" placeholder={props.placeholderNewsletter} />
                                        <input type="submit" value={props.valueNewsletter} className="submit px-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default newsletter;