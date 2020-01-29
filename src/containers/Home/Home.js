import React, { Component } from 'react';
import './Home.scss';
import HeroBanner from '../../components/UI/HeroBanner/HeroBanner';
import ServiceCard from '../../components/UI/ServiceCard/ServiceCard';
import PracticeArea from '../../components/UI/PracticeArea/PracticeArea';
import LawyerCard from '../../components/UI/LawyerCard/LawyerCard';
import Form from '../../components/UI/Form/Form';

import GilbertoGalli from '../../assets/images/derecho-civil.jpg'; 
import PabloArancedo from '../../assets/images/derecho-comercial.jpg'; 
import MartinPereda from '../../assets/images/mercado-de-capitales.jpg'; 
import LizaParreta from '../../assets/images/recupero-de-creditos.jpg';

class Home extends Component {

    state = {
        content: {
            titulo: 'Experiencia . Innovación . Excelencia',
            subtitulo: 'Abogados y Consultores',
            cards: [
                {id: 1, title: 'Asesoramiento legal', text: 'Brindamos la información jurídica a quien necesite de ello para la resolución de asuntos que tienen que ver con la aplicación de las leyes, normativas y reglamentos en cualquier materia del Derecho.', icon: 'flaticon-auction'},
                {id: 2, title: 'Abogados expertos', text: 'Integrado por distintos profesionales con sólidos conocimientos y experiencia en Derecho Público y en Derecho Privado.', icon: 'flaticon-lawyer'},
                {id: 3, title: 'Respuesta inmediata', text: 'Estructura competitiva que permite brindar una inmediata respuesta a las necesidades y problemas confiados por nuestros clientes.', icon: 'flaticon-money'},
            ],
            practiceAreas: [
                {id: 4, title: 'Derecho Público y Regulación Económica', icon: 'flaticon-money'},
                {id: 5, title: 'Derecho Civil', icon: 'flaticon-money'},
                {id: 6, title: 'Derecho Comercial y Societario', icon: 'flaticon-money'},
                {id: 7, title: 'Mercado de Capitales', icon: 'flaticon-money'},
                {id: 8, title: 'Recupero de créditos bancarios y de compañía aseguradoras', icon: 'flaticon-money'},
            ],
            practiceSectionTitle: 'Servicios Legales',
            lawyersArea: 'Nuestros Abogados',
            lawyers: [
                {id: 9, name: 'Gilberto Galli', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: GilbertoGalli},
                {id: 10, name: 'Pablo Arancedo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: PabloArancedo},
                {id: 11, name: 'Martin Pereda', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: MartinPereda},
                {id: 12, name: 'Liza Parreta', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: LizaParreta},
            ],
        }
    }

    render() {

        const serviceCards = this.state.content.cards.map(card => (
            <ServiceCard 
                key={card.id}
                title={card.title}
                description={card.text}
                serviceIcon={card.icon}/>
        ));

        const practiceAreas = this.state.content.practiceAreas.map(area => (
            <PracticeArea 
                key={area.id}
                practiceArea={area.title}
                icon={area.icon}/>
        ));

        const lawyerCards = this.state.content.lawyers.map(card => (
            <LawyerCard 
                key={card.id}
                lawyerName={card.name}
                imageLawyer={card.imageUrl}
                lawyerDescription={card.description}/>
        ));

        return (
            <>
                <HeroBanner />
                <section className="ftco-section ftco-no-pb services-section">
                    <div className="container">
                        <div className="row no-gutters d-flex">
                            {serviceCards}
                        </div>
                    </div>
                </section>
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section ftco-animated">
                                <h2 className="mb-4">{this.state.content.practiceSectionTitle}</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            {practiceAreas}
                        </div>
                    </div>
                </section>
                <section className="ftco-section bg-secondary">
                    <div className="container-fluid">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animated">
                                <h2 className="mb-4">{this.state.content.lawyersArea}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {lawyerCards}
                        </div>
                    </div>
                </section>
                <Form />
            </>
        );
    };
}

export default Home;