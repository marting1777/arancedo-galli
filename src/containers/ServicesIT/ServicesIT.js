import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import Service from '../../components/UI/Service/Service';
import Extract from '../../components/UI/CopyText/Extract/Extract';

import BannerBackground from '../../assets/images/bg_1.jpg';

class ServicesIT extends Component {

    state = {
        bannerContent: {
            title: 'Servizi Legali',
            backImage: BannerBackground,
        },
        services: [
            {
                id: 1, 
                title: 'Diritto Pubblico e Regolazione Economica', 
                icon: 'flaticon-money', 
                description: [
                    {id: 6, text: 'Siamo consulenti di diversi Organismi Pubblici Nazionali ed Internazionali, in materia di politiche pubbliche, ottimizzazione di risorse amministrative e tecnologiche. Offriamo anche servizi di consulenza a privati nei loro rapporti con gli organismi pubblici. Offriamo assistenza nella confezione di offerte per gare di appalto pubbliche o private.'},
                    {id: 7, text: 'Offriamo servizi in questioni di regolazione delle telecomunicazioni e nell’attività postale; in speciale, comparse presso la COMISION NACIONAL DE COMUNICACIONES (CNC) per il rilascio delle licenze di prestazione di servizi di telecomunicazioni, autorizzazioni per l’uso dello spazio radioelettrico e permessi postali.'},
                    {id: 8, text: 'Negoziazione di contratti commerciali. Consulenza legale sulla difesa della concorrenza e presentazioni davanti alla Commissione nazionale per la difesa della concorrenza (CNDC) e al Federal Broadcasting Committee (COMFER).'},
                ],
            },
            {
                id: 2, 
                title: 'Diritto Civile', 
                icon: 'flaticon-money', 
                description: [
                    {id: 9, text: 'Offriamo assistenza in pratiche successorie. Portiamo avanti lite in materia civile e tutto quanto relativo al diritto di famiglia.'},
                ],
            },
            {
                id: 3, 
                title: 'Diritto Commerciale e Societario', 
                icon: 'flaticon-money', 
                description: [
                    {id: 10, text: 'Abbiamo ampia sperienza in temi societari, specialmente offriamo consulenza nella pianificazione d’imposte e societaria delle società straniere o nazionali. Il perfezionamento, registro e lo scioglimento di società locali, sussidiarie oppure succursali di società; l’elaborazione e negozziazione di contratti e accordi commerciali e corporativi (agenzia, distribuzione, franchising, licenze, fideiussioni, fedecommessi e compra).'},
                    {id: 11, text: 'Offriamo consulenza nella negozziazione e confezione di documenti per il finanziamento di transazioni, come contratti di prestito, finanziamento di capitale, lettere di credito, offerte pubbliche e private di debito o di capitale. La Nostra firma offre consulenza anche in questioni relative a imposte, previdenziali e lavorali.'},
                ],
            },
            {
                id: 4, 
                title: 'Mercato di Capitali', 
                icon: 'flaticon-money', 
                description: [
                    {id: 12, text: 'Offriamo servizi vincolati alla creazione di fondi comuni d’investimento aperti e chiusi e di fedecommessi finanziari ed immobiliari. Investimenti da parte di entità private locali in fondi comuni d’investimento dell’estero. Richiesta di autorizzazioni presso la Comisión Nacional de Valores.'},
                ],
            },
            {
                id: 5, 
                title: 'Recupero di crediti bancari e di compagnie di assicurazione', 
                icon: 'flaticon-money', 
                description: [
                    {id: 13, text: 'Provvediamo al recupero di crediti per banche per le diverse compagnie di assicurazioni. Contiamo tra i nostri clienti il Banco HSBC Argentina e Provincia Seguros S.A. Inoltre offriamo il servizio di recupero di crediti vantati dalle società vincolate alla produzione di energia elettrica (AES) AES ALICURA S.A., CENTRAL DIQUE S.A., AES PARANA S.A.'},
                ],
            },
        ]
    }

    render() {

        const listOfServices = this.state.services.map(service => (
            <Service 
                key={service.id}
                serviceIcon={service.icon}
                serviceTitle={service.title}
                textService={service.description.map(des => ( <Extract key={des.id} text={des.text}/>))}
                />
        ));

        return (
            <>
                <Banner 
                    backgroundBanner={this.state.bannerContent.backImage}
                    bannerTitle={this.state.bannerContent.title} />
                <section className="ftco-section bg-light">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            {listOfServices}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ServicesIT;