import React from 'react';
import './CopyText.scss';

import Extract from './Extract/Extract';



const copyText = props => {

    const listOfParagraphs = props.paragraphs.map(p => (
        <Extract 
            key={p.id}
            text={p.copy}/>
    ));

    return (
        <div className="container">
            <div class="col-md-12 px-5 py-5">
                <div class="row justify-content-start pt-3 pb-3">
                    <div class="col-md-12 heading-section ftco-animated">
                        <span class="subheading">{props.subtitle}</span>
                        <h2 class="mb-4">{props.title}</h2>
                        {listOfParagraphs}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default copyText;