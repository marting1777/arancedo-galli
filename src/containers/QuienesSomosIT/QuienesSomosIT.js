import React, { Component } from 'react';

import Banner from '../../components/UI/Banner/Banner';
import CopyText from '../../components/UI/CopyText/CopyText';
import BannerBackground from '../../assets/images/bg_1.jpg';

class QuienesSomosIT extends Component {

    state = {
        bannerContent: {
            title: 'La Nostra Firma',
            backImage: BannerBackground,
        },
        copyContent: {
            title: 'Arancedo - Galli associazione approvata nel 2006',
            subtitle: 'Arancedo - Galli > Avvocati e Consulenti',
        },
        paragraphs: [
            {id: 1, copy: 'Il Nostro Studio è composto da diversi professionisti con ampie conoscenze ed esperienza nel Diritto Pubblico e nel Diritto Privato. È il risultato dell’associazione aprovata nell’anno 2006 tra gli Studi degli avvocati Pablo F. Arancedo e Gilberto Galli.'},
            {id: 2, copy: 'Ha una struttura competitiva che consente di offrire un’immediata risposta alle necessità e ai problemi posti dai nostri clienti. Arancedo-Galli Abogados è una firma rivolta agli affari internazionali e domestici.'},
            {id: 3, copy: 'Tra altre attività, offriamo servizi di consulenza al Consolato Generale d’Italia nella Repubblica Argentina, in tutte le questioni civili e commerciali poste dai cittadini e dalle ditte italiane nell’ambito della Repubblica Argentina. Inoltre offriamo i nostri servizi legali presso i Tribunali della Repubblica Italiana; all’uopo abbiamo stipulato un’accordo ampio di associazione con lo studio legale De Naro Papa e Associati con sede in Milano, Repubblica d’Italia, in maniera tale che i nostri clienti comuni abbiano la adeguata assistenza legale sia in Italia sia in Argentina.'},
            {id: 4, copy: 'Abbiamo anche un’accordo di collaborazione con lo studio legale Campedelli, Marques e Zarif della città di San Paolo, Brasile.'},
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

export default QuienesSomosIT;