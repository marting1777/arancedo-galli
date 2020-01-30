import React from 'react';
import Image from '../../../assets/images/bg_1.jpg';
import { NavLink } from 'react-router-dom';

const form = props => (
    <section className="ftco-consultation">
    	<div className="container-fluid">
    		<div className="row d-md-flex">
    			<div className="half d-flex justify-content-center align-items-center img" style={{backgroundImage: `url(${Image})`}}>
    				<div className="overlay"></div>
    				<div className="desc text-center">
    					<div className="icon"><span style={{color: '#f85b0a'}} className="flaticon-auction"></span></div>
    					<h1><NavLink to="/">Arancedo - Galli</NavLink></h1>
    				</div>
    			</div>
    			<div className="half p-3 p-md-5 ftco-animated">
    				<h3 className="mb-4">Contáctenos</h3>
    				<form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Asunto" />
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Enviar Mensaje" className="btn btn-primary" />
                        </div>
                    </form>
    			</div>
    		</div>
    	</div>
    </section>
);

export default form;