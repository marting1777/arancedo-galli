import React, { Component } from 'react';
import './QuienesSomos.scss';

import Banner from '../../components/UI/Banner/Banner';
import CopyText from '../../components/UI/CopyText/CopyText';
import BannerBackground from '../../assets/images/bg_1.jpg';

class QuienesSomos extends Component {

    state = {
        bannerContent: {
            title: 'Quienes Somos',
            backImage: BannerBackground,
        },
        copyContent: {
            title: 'Arancedo - Galli asociación aprobada en el año 2006',
            subtitle: 'Arancedo - Galli > Abogados y Consultores',
        },
        paragraphs: [
            {id: 1, copy: 'Nuestro Estudio se encuentra integrado por distintos profesionales con sólidos conocimientos y experiencia en Derecho Público y en Derecho Privado. Es el resultado de la asociación aprobada en el año 2006 entre los Estudios de los abogados Pablo F. Arancedo y Gilberto Galli.'},
            {id: 2, copy: 'Arancedo-Galli Abogados es una firma enfocada en asuntos internacionales y domésticos. Entre otras actividades, asesoramos al Consulado General de la República de Italia en la República Argentina, en todas las cuestiones civiles o comerciales confiadas por los ciudadanos y empresas italianos en el ámbito de la República Argentina.'},
            {id: 3, copy: 'Asimismo prestamos nuestros servicios legales ante los Tribunales de la República Italiana; para ello hemos celebrado un acuerdo amplio de asociación con el estudio jurídico De Naro Papa y Asociados con sede en Milán, República de Italia, de modo tal que nuestros clientes en común cuenten con adecuada asistencia legal tanto en Italia como en Argentina.'},
            {id: 4, copy: 'También tenemos un acuerdo de colaboración con el estudio jurídico Campedelli, Marques e Zarif de la ciudad de San Pablo, Brasil.'},
        ]
    }

    render() {
        return (
            <>
                <Banner 
                    backgroundBanner={this.state.bannerContent.backImage}
                    bannerTitle={this.state.bannerContent.title} />
                <CopyText 
                    paragraphs={this.state.paragraphs}
                    title={this.state.copyContent.title}
                    subtitle={this.state.copyContent.subtitle}/>
            </>
        );
    }
}

export default QuienesSomos;