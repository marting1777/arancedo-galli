import React, { Component } from 'react';
import './Home.css';

import Banner from '../UI/Banner/Banner';

import StretchHands from '../../assets/images/shake_hands.jpg';
import DerechoPublico from '../../assets/images/derecho-publico.jpg';
import DerechoCivil from '../../assets/images/derecho-civil.jpg';
import DerechoComercial from '../../assets/images/derecho-comercial.jpg';
import MercadoCapitales from '../../assets/images/mercado-de-capitales.jpg';
import RecuperoCreditos from '../../assets/images/recupero-de-creditos.jpg';

import Aux from '../../HOC/Auxiliar/Auxiliar';
import Paragraph from '../UI/Paragraph/Paragraph';
import Title from '../UI/Title/Title';
import Card from '../UI/Card/Card';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerData: {
                title: 'Arancedo - Galli',
                subtitle: 'Abogados y Consultores',
            },
            paragraphData: {
                class: 'ParagraphQuienesSomos',
                text: 'Nuestro Estudio se encuentra integrado por distintos profesionales con sólidos conocimientos y experiencia en Derecho Público y en Derecho Privado. Es el resultado de la asociación aprobada en el año 2006 entre los Estudios de los abogados Pablo F. Arancedo y Gilberto Galli.'
            },
            servicesData: [
                {id: 1, text: 'Derecho Público y Regulación Económica', image: DerechoPublico},
                {id: 2, text: 'Derecho Civil', image: DerechoCivil},
                {id: 3, text: 'Derecho Comercial y Societario', image: DerechoComercial},
                {id: 4, text: 'Mercado de Capitales', image: MercadoCapitales},
                {id: 5, text: 'Recupero de créditos bancarios y de compañía aseguradoras', image: RecuperoCreditos},
            ],
        }
    }

    render() {

        let serviciosCards;
        if (this.state.servicesData) {
            serviciosCards = this.state.servicesData.map(card => (
                <Card 
                    key={card.id} 
                    cardText={card.text} 
                    cardImageStyle={{backgroundImage: `url(${card.image})`}}/>
            ));
        }

        return (
            <Aux>
                <section>
                    <Banner
                        bannerTitle={this.state.bannerData.title} 
                        bannerSubtitle={this.state.bannerData.subtitle}
                        bannerInlineStyle={{backgroundImage: `url(${StretchHands})`}}/>
                </section>
                <section className="QuienesSomosSection">
                    <div className="QuienesSomosHome">
                        <Title titleClass={"QuienesSomosTitle"} titleText="- Quienes Somos -"/>
                        <Paragraph 
                            paragraphClass={this.state.paragraphData.class}
                            paragraphText={this.state.paragraphData.text}/>
                    </div>
                </section>
                <section className="ServiciosHome">
                    <Title titleClass={"QuienesSomosTitle"} titleText="- Nuestros Servicios -"/>
                    {serviciosCards}
                </section>
            </Aux>
        );
    };
}

export default Home;