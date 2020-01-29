import React from 'react';
import Image from '../../../assets/images/bg_1.jpg';

const form = props => (
    <section class="ftco-consultation">
    	<div class="container-fluid">
    		<div class="row d-md-flex">
    			<div class="half d-flex justify-content-center align-items-center img" style={{backgroundImage: `url(${Image})`}}>
    				<div class="overlay"></div>
    				<div class="desc text-center">
    					<div class="icon"><span class="flaticon-auction"></span></div>
    					<h1><a href="/">Arancedo - Galli</a></h1>
    				</div>
    			</div>
    			<div class="half p-3 p-md-5 ftco-animated">
    				<h3 class="mb-4">Contáctenos</h3>
    				<form action="#">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nombre y Apellido" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Asunto" />
                        </div>
                        <div class="form-group">
                            <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Mensaje"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Enviar Mensaje" class="btn btn-primary" />
                        </div>
                    </form>
    			</div>
    		</div>
    	</div>
    </section>
);

export default form;