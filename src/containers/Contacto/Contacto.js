import React, { Component } from 'react';
import Banner from '../../components/UI/Banner/Banner';
import BannerBackground from '../../assets/images/bg_1.jpg';

class Contacto extends Component {

    state = {
        bannerContent: {
            title: 'Contacto',
            backImage: BannerBackground,
        },
    }

    render() {

        (function () {
            let setting = {"height":514,"width":803,"zoom":17,"queryString":"Marcelo Torcuato de Alvear 636, Buenos Aires, Argentina","place_id":"ChIJeY-iEsrKvJUR0bzaCwG87hI","satellite":false,"centerCoord":[-34.59643006095361,-58.37604789999998],"cid":"0x12eebc010bdabcd1","lang":"en","cityUrl":"/argentina/buenos-aires","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"152295"};
            let d = document;
            let s = d.createElement('script');
            s.src = 'https://1map.com/js/script-for-user.js?embed_id=152295';
            s.async = true;
            s.onload = function (e) {
            window.OneMap.initMap(setting)
            };
            let to = d.getElementsByTagName('script')[0];
            to.parentNode.insertBefore(s, to);
        })();

        return (    
            <>
                <Banner 
                    backgroundBanner={this.state.bannerContent.backImage}
                    bannerTitle={this.state.bannerContent.title} />
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info">
                            <div className="col-md-12 mb-4">
                                <h2 className="h3">Información de Contacto</h2>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-4">
                                <p><span>Dirección:</span> Marcelo T. de Alvear 636 piso 9°</p>
                            </div>
                            <div className="col-md-4">
                                <p><span>Teléfono:</span> <a href="tel://1234567920">+54 11 4311 7999</a></p>
                            </div>
                            <div className="col-md-4">
                                <p><span>Email:</span> <a href="mailto:info@arancedogalli.com.ar">info@arancedogalli.com.ar</a></p>
                            </div>
                        </div>
                        <div className="row block-9">
                            <div className="col-lg-6 order-md-last d-flex">
                                <form action="#" className="bg-light p-5 contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombre y Apellido"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Asunto"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Enviar Mensaje" className="btn btn-primary py-3 px-5"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                                    <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                                    <a href="https://1map.com/en/map-embed?embed_id=152295">1 Map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
}

export default Contacto;