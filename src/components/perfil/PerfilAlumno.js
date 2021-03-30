import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faBookReader } from '@fortawesome/free-solid-svg-icons';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Img from '../../asset/img/alumno.jpg';

const PerfilAlumno = () => {
    return(
        <>
          <Header/>
              
         
         <div className='row p-5'> 
         <h1 className='p-3'> Mi cuenta</h1>
             <div className='col-xl-4 col-md-6 col-sm-12 '>
             <aside class="profile-card">
                        <header>
                          <img src={Img} alt='1' className=' w-75'/>
                        </header>
                        <div class="profile-bio">
                          <h6 className='text-center'>Maria de los Angeles Pérez Diaz</h6>
                          <h6 className='text-center'>MariaDLAngeles@gmail.com</h6>
                        </div>
                         <ul className="profile-social-links">
                           <li>
                             <a href="">
                             <img src={Img} alt='1' className=' '/>
                             </a>
                           </li>
                           <li>
                             <a href="">
                             <img src={Img} alt='1' className=' '/>
                             </a>
                           </li>
                           <li>
                             <a href="">
                             <img src={Img} alt='1' className=' '/>
                             </a>
                            </li>
                         </ul>
                     </aside> 
             </div>
             <div className='col-xl-8 col-md-6 col-sm-12 shadow text-center p-5'>
                <br></br>
                 <h4>Maria de los Angeles Pérez Diaz</h4>
                <h6>MariaDLAngeles@gmail.com</h6>
             </div>
         </div>


             
             <div className='container-alumno'>
          
                   <div className='d-flex justify-content-end'>
                     <br></br>
                     <h4><FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon> Saldo disponible: $500</h4>
                   </div>
                   <br></br>
                  <h1 className='p-2' >Calendario</h1>
                  <div className='d-flex justify-content-center'>
                      <div>
                        aqui va el calendario
                      </div>
                  </div>
                  <br></br>
                  <h1 className='p-2' >Tus clases</h1>
                  <div className='d-flex justify-content-around'>
                      <div className='bg-dark text-light '>
                        video 1
                      </div>
                      <div className='bg-dark text-light '>
                       video 2
                      </div>
                      <div className='bg-dark text-light '>
                        video 3
                      </div>
                  </div>
                  <br></br>
                     <div className='d-flex justify-content-center'>
                     <Form onSubmit>
                         <h2 className='my-4 text-dark text-success' >Agregar Dinero</h2>
                       <Form.Group controlId="tarjetaId">
                         <Form.Label>Tarjeta Crédito</Form.Label>
                         <Form.Control type="text" placeholder="Ej: Naranja" onChange/>
                       </Form.Group>
                       <Form.Group controlId="datosId">
                         <Form.Label>Datos</Form.Label>
                         <Form.Control type="text" placeholder="Ej: Descripción del pago" onChange/>
                       </Form.Group>
                       <Form.Group controlId="montoId">
                         <Form.Label>Monto</Form.Label>
                         <Form.Control type="number" placeholder="Ej: $1000" onChange/>
                       </Form.Group>
                       <Button variant="outline-success text-center" className='w-50 my-4' type="submit">
                         Agregar
                       </Button>
                         </Form>
                     </div>


             </div>



          <Footer/>
        </>
    );
}

export default PerfilAlumno;