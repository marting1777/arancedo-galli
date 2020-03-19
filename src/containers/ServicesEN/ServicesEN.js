import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import Service from '../../components/UI/Service/Service';
import Extract from '../../components/UI/CopyText/Extract/Extract';

import BannerBackground from '../../assets/images/bg_1.jpg';

class Services extends Component {

    state = {
        bannerContent: {
            title: 'Services',
            backImage: BannerBackground,
        },
        services: [
            {
                id: 1, 
                title: 'Public Law and Economic Regulation', 
                icon: 'flaticon-money', 
                description: [
                    {id: 6, text: 'We advise National and International Public Institutions, not only in matters related to public policies but in the optimization of public and technological resources. We also advise individuals in their relationship with the public administration and assist clients in preparing offers in both public and private bids.'},
                    {id: 7, text: 'Our firm renders services in telecommunication and postal regulatory matters; in particular applications before the COMISION NACIONAL DE COMUNICACIONES (CNC) for the granting of licenses for telecommunication services and authorizations for the use of the radio electric spectrum and postal permits.'},
                    {id: 8, text: 'We actively participate in the draft of terms and conditions applicable to public and private bids. Negotiation of corporate agreements. Legal advise in antitrust matters and applications and petitions before the Comisión Nacional de Defensa de la Competencia (CNDC) and the Comité Federal de Radiodifusión (COMFER).'},
                ],
            },
            {
                id: 2, 
                title: 'Civil Law', 
                icon: 'flaticon-money', 
                description: [
                    {id: 9, text: 'Legal advise in Estate matters. We litigate in civil cases and in all matters related to family law.'},
                ],
            },
            {
                id: 3, 
                title: 'Commercial and Corporate Law', 
                icon: 'flaticon-money', 
                description: [
                    {id: 10, text: 'Our lawyers have vast experience in corporate matters, in particular tax and corporate planning for local and foreign corporations. Incorporation and dissolution of local corporations and branches and subsidiaries of foreign corporations.'},
                    {id: 11, text: 'Draft and negotiation of contracts and corporate agreements (agency, distribution, franchising, license, trusts). Mergers and Acquisitions. Corporate finance. Lending Agreements, Letters of Credit, Public and Private Offerings. Tax and Labor regulations.'},
                ],
            },
            {
                id: 4, 
                title: 'Capital Markets', 
                icon: 'flaticon-money', 
                description: [
                    {id: 12, text: 'Our services include the creation of mutual funds (Open and Close end funds), real estate and financial trusts. Local companies investments in offshore funds. Application for authorizations before the Comisión Nacional de Valores.'},
                ],
            },
            {
                id: 5, 
                title: 'Collection of bank and insurance companies´ receivables.', 
                icon: 'flaticon-money', 
                description: [
                    {id: 13, text: 'We collect receivables for banks and insurance companies. Among our clients we have HSBC Argentina and Provincia Seguros. Collection of receivables is also done for companies related to the energy industry such as (AES) AES ALICURA S.A., CENTRAL DIQUE S.A., AES PARANA S.A'},
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

export default Services;