import React, { Component } from 'react';

import Banner from '../../components/UI/Banner/Banner';
import CopyText from '../../components/UI/CopyText/CopyText';
import BannerBackground from '../../assets/images/bg_1.jpg';

class QuienesSomos extends Component {

    state = {
        bannerContent: {
            title: 'About Us',
            backImage: BannerBackground,
        },
        copyContent: {
            title: 'Arancedo - Galli association approved in 2006',
            subtitle: 'Arancedo - Galli > Lawyers and Consultants',
        },
        paragraphs: [
            {id: 1, copy: 'Our Firm is made up of different professionals with solid knowledge and experience in Public Law and Private Law. It is the result of the association approved in 2006 between the Law Firms Pablo F. Arancedo and Gilberto Galli.'},
            {id: 2, copy: 'Arancedo-Galli Abogados is a firm focused on international and domestic affairs. Among other activities, we advise the Consulate General of the Republic of Italy in the Argentine Republic, in all civil or commercial matters entrusted by Italian citizens and companies in the Argentine Republic.'},
            {id: 3, copy: 'We also provide our legal services before the Courts of the Italian Republic; For this we have entered into a broad association agreement with the law firm De Naro Papa y Asociados based in Milan, Republic of Italy, so that our common clients have adequate legal assistance in both Italy and Argentina.'},
            {id: 4, copy: 'Also, we have a collaboration agreement with the law firm Campedelli, Marques e Zarif from the city of San Pablo, Brazil.'},
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