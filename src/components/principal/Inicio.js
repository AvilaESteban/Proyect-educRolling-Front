import React from 'react';
import FormPuntuacion from '../valoracion/FormPuntuacion';
import '../../App.css'

import Banner from '../common/Banner';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CardInformativas from './CardInfomativas';
import MasSolicitadas from './MasSolicitadas';

const Inicio = () => {
    return(
        <>
        <Header/>
        <Banner/>
      
                <h1 className="p-4"> Quieres aprender:   <b> Matemática</b></h1>
                 
                  <h2>Profesores disponibles ahora</h2>
                  <br></br>
                  <div className='d-flex justify-content-center'>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>  estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>   estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>   estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  </div>
                  <br></br>
                  <div className='d-flex justify-content-center'>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>   estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>   estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  <div>
                  <ul>
                      <li> foto</li>
                      <li>  nombre del profesor</li>
                      <li>   estrellas de puntuación</li>
                      <br></br>
                      <button className='btn btn-outline-success'>Perfil</button>
                  </ul>
                  </div>
                  </div>
                  <button className='btn btn-outline-success' >Ver lista completa</button>
                  <CardInformativas/>
                  <MasSolicitadas/>

        
         <Footer/>
        </>
    );
}

export default Inicio;