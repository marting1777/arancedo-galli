import React from 'react';

const logo = props => (
    <a className={props.logoClass} href={props.logoHref}>{props.logoText}</a>
);

export default logo;