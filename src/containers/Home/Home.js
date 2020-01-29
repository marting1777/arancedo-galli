import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {

    state = {
        content: {
            titulo: 'Experiencia . Innovación . Excelencia',
            subtitulo: 'Abogados y Consultores',
            cards: [
                {id: 1, title: 'Asesoramiento legal', text: 'Brindamos la información jurídica a quien necesite de ello para la resolución de asuntos que tienen que ver con la aplicación de las leyes, normativas y reglamentos en cualquier materia del Derecho.'},
                {id: 2, title: 'Abogados expertos', text: 'Integrado por distintos profesionales con sólidos conocimientos y experiencia en Derecho Público y en Derecho Privado.'},
                {id: 3, title: 'Respuesta inmediata', text: 'Estructura competitiva que permite brindar una inmediata respuesta a las necesidades y problemas confiados por nuestros clientes.'},
            ],
        }
    }

    render() {

        return (
            <></>
        );
    };
}

export default Home;