import React, { Component } from 'react';
import './HomeContainer.scss';

import Banner from '../../components/UI/Banner/Banner';
import Title from '../../components/UI/Title/Title';
import HomeBackgroundImage from '../../assets/images/shake_hands.jpg';

class HomeContainer extends Component {
    render() {
        return (
            <section className="HomeContainer">
                <Banner backgroundUrl={HomeBackgroundImage}>
                    <Title title="Arancedo - Galli"/>
                    <p>Abogados y Consultores</p>
                </Banner>
            </section>
        );
    };
}

export default HomeContainer;