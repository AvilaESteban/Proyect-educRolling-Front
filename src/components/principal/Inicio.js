import React from 'react';
import '../../App.css'
import Img from '../../asset/img/Prof1.jpg'
import Banner from '../common/Banner';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CardInformativas from './CardInfomativas';
import MasSolicitadas from './MasSolicitadas';
import {NavLink}  from "react-router-dom";

const Inicio = () => {
    return(
        <>
        <Header/>
        <Banner/>
      
                <h1 className="p-4 text-center"> Quieres aprender:   <b> Matemática</b></h1>
                 
                  <h2 className="p-4 text-center">Profesores disponibles ahora</h2>
                  <br></br>
                  <div className='container'>
                        <div className='row'>
                           <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                           <img src={Img} alt='1' />
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                            <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                            <img src={Img} alt='1'/>
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                            <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                            <img src={Img} alt='1'/>
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                        </div>

                    <div className='row'>
                    <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                            <img src={Img} alt='1'/>
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                            <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                            <img src={Img} alt='1'/>
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                            <div className=' justify-content-center col-md-4 col-sm-12'>
                           <ul>
                            <img src={Img} alt='1'/>
                            <li>  nombre del profesor</li>
                            <li>   estrellas de puntuación</li>
                            <br></br>
                            <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
                            </ul>
                            </div>
                    </div>
               </div>
               <div className='text-center'>
               <button className='btn btn-outline-success ' >Ver lista completa</button>
               </div>
                
                  <br></br>
                  <br></br>
                  <CardInformativas/>
                  <MasSolicitadas/>

        
         <Footer/>
        </>
    );
}

export default Inicio;