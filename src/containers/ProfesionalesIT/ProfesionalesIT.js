import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import LawyerCard from '../../components/UI/LawyerCard/LawyerCard';
import BannerBackground from '../../assets/images/bg_1.jpg';

import GilbertoGalli from '../../assets/images/derecho-civil.jpg'; 
import PabloArancedo from '../../assets/images/derecho-comercial.jpg'; 
import MartinPereda from '../../assets/images/mercado-de-capitales.jpg'; 
import LizaParreta from '../../assets/images/recupero-de-creditos.jpg';

class ProfesionalesIT extends Component {

    state = {
        bannerContent: {
            title: 'La Nostra Gente',
            backImage: BannerBackground,
        },
        lawyersArea: 'I Nostri Avvocati',
        lawyers: [
            {id: 9, name: 'Gilberto Galli', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: GilbertoGalli},
            {id: 10, name: 'Pablo Arancedo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: PabloArancedo},
            {id: 11, name: 'Martin Pereda', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: MartinPereda},
            {id: 12, name: 'Liza Parreta', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: LizaParreta},
        ],
    }

    render() {

        const lawyerCards = this.state.lawyers.map(card => (
            <LawyerCard 
                key={card.id}
                lawyerName={card.name}
                imageLawyer={card.imageUrl}
                lawyerDescription={card.description}/>
        ));

        return (
            <>
                <Banner 
                    backgroundBanner={this.state.bannerContent.backImage}
                    bannerTitle={this.state.bannerContent.title} />
                <section className="ftco-section">
                    <div className="container-fluid">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animated">
                                <h2 className="mb-4">{this.state.lawyersArea}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {lawyerCards}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProfesionalesIT;