import React from 'react';
import {NavLink}  from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faSplotch } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
import Img from '../../asset/img/Prof1.jpg'

const  DisponibleAhora = () => {
    return(
        <>
         <h1 className="p-4 text-center"  data-aos="fade-up-right" data-aos-duration="1000"> Quieres aprender:  Matemática</h1>
                 
                 <h2 className="p-4 text-center"  data-aos="fade-up-right" data-aos-duration="1000">Profesores disponibles ahora</h2>
                 <br></br>
                 {/* Hacer el .map para que recorra profesores */}
                  <div className='container'>
                      <div className='d-flex justify-content-around text-align-center flex-wrap '>
                     
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p> 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                   <NavLink
                                        exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p  > 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                   <NavLink
                                        exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p  > 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                   <NavLink
                                         exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p  > 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                  <NavLink
                                         exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p  > 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                   <NavLink
                                         exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link "
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      <div class="profile-cart ">
                      <div className="images">
                       <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de Matemática</h6>
                           <p  > 
                                 <ul>
                                 <h1>Datos </h1>
                                  <li ><b>Profesor:</b> Alfonzo Kling</li>
                                  <li><b>Materia:</b> Matemática</li>
                                  <li><b>arancel 30min:</b> $200</li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                 <NavLink
                                         exact={true}
                                         to="/perfil/profesor"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                          {" "}
                                          <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                      </div>
                      </div>
                  </div>
        
        </>
    )

}
 export default DisponibleAhora;