import React, { Component } from 'react';
import './HomeEN.scss';
import HeroBanner from '../../components/UI/HeroBanner/HeroBanner';
import ServiceCard from '../../components/UI/ServiceCard/ServiceCard';
import PracticeArea from '../../components/UI/PracticeArea/PracticeArea';
import LawyerCard from '../../components/UI/LawyerCard/LawyerCard';
import Form from '../../components/UI/Form/Form';
import GridImages from '../../components/UI/GridImages/GridImages';
import Newsletter from '../../components/Newsletter/Newsletter';

import GilbertoGalli from '../../assets/images/derecho-civil.jpg'; 
import PabloArancedo from '../../assets/images/derecho-comercial.jpg'; 
import MartinPereda from '../../assets/images/mercado-de-capitales.jpg'; 
import LizaParreta from '../../assets/images/recupero-de-creditos.jpg';

class HomeEN extends Component {

    state = {
        content: {
            cards: [
                {id: 1, title: 'Legal Advice', text: 'We provide legal information to those who need it for the resolution of matters that have to do with the application of laws, rules and regulations in any matter of Law.', icon: 'flaticon-auction'},
                {id: 2, title: 'Expert Lawyers', text: 'Composed of different professionals with solid knowledge and experience in Public Law and Private Law.', icon: 'flaticon-lawyer'},
                {id: 3, title: 'Immediate Response', text: 'Competitive structure that allows us to provide an immediate response to the needs and problems entrusted by our clients.', icon: 'flaticon-money'},
            ],
            practiceAreas: [
                {id: 4, title: 'Public Law and Economic Regulation', icon: 'flaticon-money'},
                {id: 5, title: 'Civil Law', icon: 'flaticon-money'},
                {id: 6, title: 'Commercial and Corporate Law', icon: 'flaticon-money'},
                {id: 7, title: 'Capital Markets', icon: 'flaticon-money'},
                {id: 8, title: 'Collection of bank and insurance companies´ receivables.', icon: 'flaticon-money'},
            ],
            practiceSectionTitle: 'Legal Services',
            lawyersArea: 'Our People',
            lawyers: [
                {id: 9, name: 'Gilberto Galli', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: GilbertoGalli},
                {id: 10, name: 'Pablo Arancedo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: PabloArancedo},
                {id: 11, name: 'Martin Pereda', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: MartinPereda},
                {id: 12, name: 'Liza Parreta', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: LizaParreta},
            ],
            gridOfImages: [
                {id: 13, imageUrl: GilbertoGalli},
                {id: 14, imageUrl: PabloArancedo},
                {id: 15, imageUrl: MartinPereda},
                {id: 16, imageUrl: LizaParreta},
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

        const gridImagesBottom = this.state.content.gridOfImages.map(img => (
            <GridImages
                key={img.id} 
                backgroundUrl={img.imageUrl}/>
        ))

        return (
            <>
                <HeroBanner 
                    hereForYou={'We are here to help you!'}
                    firstWord={'Experience'}
                    secondWord={'Innovation'}
                    thirdWord={'Excellence'}
                    contactButton={'Contact Us'}/>
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
                <Form
                    formContactenos={'Contact Us'} 
                    formNombreYApellido={'Name and Surname'}
                    formMail={'Email'}
                    formAsunto={'Affair'}
                    formMensaje={'Message'}
                    formEnviar={'Send Message'}
                    />
                <section className="ftco-gallery">
                    <div className="container-wrap">
                        <div className="row no-gutters">
                            {gridImagesBottom}
                        </div>
                    </div>
                </section>
                <Newsletter 
                    titleNewsletter={'Subscribe to our Newsletter'}
                    subtitleNewsletter={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in'}
                    placeholderNewsletter={'Enter your email'}
                    valueNewsletter={'Subscribe'}/>
            </>
        );
    };
}

export default HomeEN;