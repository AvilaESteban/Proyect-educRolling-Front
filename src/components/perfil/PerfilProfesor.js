import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Img from '../../asset/img/Prof1.jpg'
import { NavLink } from "react-router-dom";
import Img1 from '../../asset/img/alumno.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';
import Calendar from '../otros/Calendar';

const PerfilProfesor = () => {
    return(
        <>
           <Header/>
  
  <div className='container-profesor  '>
         
         <div className='row p-5'> 
         <h1 className='p-3'> Perfil</h1>
             <div className='col-xl-4 col-md-6 col-sm-12 '>
             <div class="profile-cart ">
              <div className="images">
               <h1>Alfonzo Kling</h1>  <img src={Img} alt='1' className='imgProf'/>
                <h6 className='text-center'>Profesor de Matemática</h6>
                   <p  > 
                         <ul>
                         <h1>Datos </h1>
                          <li ><b>Profesor:</b> Alfonzo Kling</li>
                          <li><b>categoria:</b> Materias</li>
                          <li><b>Materia:</b> Matemática</li>
                          <li><b>arancel 30min:</b> $200</li>
                          </ul>
                   </p>
                  </div>
              </div>
             </div>
             <div className='col-xl-8 col-md-6 col-sm-12 shadow p-5 '>
                 <h1 className='p-3 shadow'>Descripción</h1>
                 <h6 className='p-3'>Me dedico a esta profesión desde hace 20 años, mi paso por diferentes instituciones abalan mi trayectorio. Mi principal objetivo es que el alumno incorpore los conocimientos necesarios de manera didáctica para que su aprendizaje sea mas dinámico y les sirva no sólo para aprobar su materia sino para su vida cotidiana.</h6>
             </div>
         </div>
  
                  <h1 className='p-5' >Dias de clases</h1>
                  <div className='d-flex justify-content-center'>
                      <div className='border border-success'>
                          aqui va el calendario con los dias marcados que dicta clases
                          <Calendar/>
                      </div> 
                  </div>
                  <h1 className='p-5' >Horarios</h1>
                  <div className='d-flex justify-content-center'>
                      <div className='border border-success'>
                          aqui van los horarios que dicta clases
                      </div> 
                  </div>
                  <div className='d-flex justify-content-end p-5'>
                        <NavLink
                           exact={true}
                           to="/iniciar/clase"
                           className="nav-link badge-success"
                           activeClassName="active"
                         >
                           {" "}
                           Iniciar clase
                         </NavLink>
                  </div>
                  <h1 className='p-2' > Clases Grabadas</h1>
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


                  <h1 className='p-5' >Alumnos</h1>
                  <div className='text-center d-flex justify-content-around flex-wrap'>
                      <div >
                       <aside class="profile-card">
                        <header>
                          <img src={Img1} alt='1' className=' w-75'/> 
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
                 <div >
                 <aside class="profile-card">
                        <header>
                          <img src={Img1} alt='1' className=' w-75'/>
                        </header>
                        <div class="profile-bio">
                          <h6 className='text-center'>Maria de los Angeles Pérez Diaz</h6>
                          <h6>MariaDLAngeles@gmail.com</h6>
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
               <div>
                    <aside class="profile-card">
                        <header>
                          <img src={Img1} alt='1' className=' w-75'/>
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
                  </div>

                  <h1 className='p-4' >Ajuste</h1>
                  <div  className='text-center'>
                         <button className='btn btn-outline-success'>Editar Perfil</button>
                         <button className='btn btn-outline-success'> Eliminar Perfil</button>
                  </div>
            </div>
            <Footer/>
        </>
    );
}

export default PerfilProfesor;