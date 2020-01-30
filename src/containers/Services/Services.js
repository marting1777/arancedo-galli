import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import Service from '../../components/UI/Service/Service';
import Extract from '../../components/UI/CopyText/Extract/Extract';

import BannerBackground from '../../assets/images/bg_1.jpg';

class Services extends Component {

    state = {
        bannerContent: {
            title: 'Servicios',
            backImage: BannerBackground,
        },
        services: [
            {
                id: 1, 
                title: 'Derecho Público y Regulación Económica', 
                icon: 'flaticon-money', 
                description: [
                    {id: 6, text: 'Asesoramos a distintos Organismos Públicos Nacionales e Internacionales, en materia de políticas públicas, optimización de recursos administrativos y tecnológicos. También asesoramos a particulares en su relación con los organismos públicos. Asistimos en la preparación de ofertas en licitaciones públicas o privadas.'},
                    {id: 7, text: 'Brindamos servicios en cuestiones regulatorias de telecomunicaciones y actividad postal; en particular, presentaciones ante la COMISION NACIONAL DE COMUNICACIONES (CNC) para la obtención de licencias de prestación de servicios de telecomunicaciones, autorizaciones para el uso del espectro radioeléctrico y permisos postales.'},
                    {id: 8, text: 'Negociación de contratos empresarios. Asesoramiento legal en materia de defensa de la competencia y presentaciones ante la Comisión Nacional de Defensa de la Competencia (CNDC) y el Comité Federal de Radiodifusión (COMFER).'},
                ],
            },
            {
                id: 2, 
                title: 'Derecho Civil', 
                icon: 'flaticon-money', 
                description: [
                    {id: 9, text: 'Asesoramos en materia sucesoria. Litigamos en cuestiones civiles y todo lo concerniente a derecho de familia.'},
                ],
            },
            {
                id: 3, 
                title: 'Derecho Comercial y Societario', 
                icon: 'flaticon-money', 
                description: [
                    {id: 10, text: 'Tenemos amplia experiencia en temas societarios, en particular asesoramos en la planificación impositiva y societaria de las sociedades extranjeras o nacionales. La conformación, registro y disolución de sociedades locales, subsidiarias o sucursales de sociedades; la elaboración y negociación entre otros, de contratos y acuerdos comerciales y corporativos (agencia, distribución, franquicias, licencias, fideicomisos, fusiones y adquisiciones).'},
                    {id: 11, text: 'Asesoramos en la negociación y preparación de los documentos para la financiación de transacciones, tales como contratos de préstamo, financiación de capital de trabajo, cartas de crédito, y ofertas públicas y privadas de deuda o capital. Nuestra firma también asesora en cuestiones impositivas, previsionales y laborales.'},
                ],
            },
            {
                id: 4, 
                title: 'Mercado de Capitales', 
                icon: 'flaticon-money', 
                description: [
                    {id: 12, text: 'Brindamos servicios relacionados con la creación de fondos comunes de inversión abiertos y cerrados y de fideicomisos financieros e inmobiliarios. Inversiones por parte de entidades privadas locales en fondos comunes de inversión del extranjero. Solicitud de autorizaciones ante la Comisión Nacional de Valores.'},
                ],
            },
            {
                id: 5, 
                title: 'Recupero de créditos bancarios y de compañía aseguradoras', 
                icon: 'flaticon-money', 
                description: [
                    {id: 13, text: 'Efectuamos recupero de créditos bancarios y de repetición para distintas compañías de seguros. Contamos entre nuestra cartera de clientes al Banco HSBC Argentina y Provincia Seguros S.A. También brindamos el servicio de recupero de créditos a las sociedades vinculadas de generación de energía eléctrica (AES) AES ALICURA S.A., CENTRAL DIQUE S.A., AES PARANA S.A.'},
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