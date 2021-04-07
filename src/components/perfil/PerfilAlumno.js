import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faBookReader } from '@fortawesome/free-solid-svg-icons';
import Img from '../../asset/img/alumno.jpg';
import MercadoPago from '../otros/MercadoPago';

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
                  <h1 className='p-2' >Mis Clases Grabadas</h1>
                  <table className="table bg-light text-center ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Link de clase</th>
      <th scope="col">Eliminar clase</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th>10-03-21</th>
      <th>http://lsjdjdfjkjjkdjfjkdfdfklajka</th>
      <th><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th> 12-03-21</th>
      <th>http://lsjdjdfjkjjkdjfjkdfdfklajka</th>
      <th><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
    <tr>
    <th scope="row">3</th>
    <th>15-03-21</th>
    <th>http://lsjdjdfjkjjkdjfjkdfdfklajka</th>
    <th><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
  </tbody>
</table>
            
                  <br></br>
                     <div className='text-center p-5'>
                       <MercadoPago/>

                     </div>


             </div>



          <Footer/>
        </>
    );
}

export default PerfilAlumno;