import React from  'react';
import Aos from 'aos';
import { Card, Jumbotron } from 'react-bootstrap';
import '../../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookReader, faChalkboardTeacher, faChevronCircleDown, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
 

const CardInformativas = () => {
    return(
        <>

<div className="dd_heading p-5">
<h1  data-aos="fade-up-right" data-aos-duration="1000" className='text-center'>Aqui Podrás</h1>
<h3  data-aos="fade-up-right" data-aos-duration="1000" class="text-center"> <strong>Prepararte, Aprender y Estudiar</strong></h3>
<h3  data-aos="fade-up-right" data-aos-duration="1000" class="text-center">Virtualmente, las 24 hr del dia</h3>
</div>
<main className="page-content">
  <div className="d_card">
    <div className="content">
      <h2 className="heading">Materias</h2>
            <span class="data-content">
                    <span className="data-content">Matemática</span> <br></br>
                    <span className="data-content">Lengua</span><br></br>
                    <span className="data-content">Fisica</span><br></br>
                    <span className="data-content">Quimica</span><br></br>
                    <span className="data-content">Inglés</span>
              </span>
    </div>
  </div>
  <div className="d_card">
    <div className="content">
      <h2 className="heading">Cursos</h2>
            <span class="data-content">
                    <span className="data-content">Recursos Humanos</span> <br></br>
                    <span className="data-content">Adm. de empresas</span><br></br>
                    <span className="data-content">Dactilografia</span><br></br>
                    <span className="data-content">Auxiliar farmacia</span><br></br>
                    <span className="data-content">Auxiliar Contable</span>
              </span>
    </div>
  </div>
  <div className="d_card">
    <div className="content">
    <h2 className="heading">Talleres</h2>
            <span className="data-content">
                    <span className="data-content">Tejidos y Costuras</span> <br></br>
                    <span className="data-content">Pintura</span><br></br>
                    <span className="data-content">Artesanias</span><br></br>
                    <span className="data-content">Pasteleria</span><br></br>
                    <span className="data-content">Cocina</span>
              </span>
    </div>
  </div>
  <div className="d_card">
    <div className="content">
      <h2 className="heading">Explore</h2>
      <span className="data-content">Encontrarás profesores disponibles para ayudarte en cualquier momento, cuando los necesites. </span>
    </div>
  </div>
</main>

       {/* <Jumbotron className='jumbotrom'>
        <div className='container'>
          <br></br>
           <h1  data-aos="fade-up-right" data-aos-duration="1000" className='text-center'>Aqui Podrás</h1>
            <div className='row'> 
           <div className='flip-container'  data-aos="fade-up-right" data-aos-duration="1000">
                 <div className='flipper' >
                 <div className="front " >
                    <div className='card-header'>
                      <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
                    </div> 
                    <div className='card-body'>  
                    <h4  className='letrasCard'>Prepararte en las <b>Materias</b> que necesites</h4>
                    </div>
                    <div className='card-footer'>
                    <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
                    </div>
               </div>
              <div className='back text-center'>
                <br></br>
                  <h4>Materias Disponibles</h4>
                  <br></br>
                  <ul>
                    <li>Matemática</li>
                    <li>Lengua</li>
                    <li>Fisica</li>
                    <li>Quimica</li>
                    <li>Inglés</li>
                    <li>Historia</li>
                  </ul>
             </div>
            </div>
           </div>

           <div className='flip-container'  data-aos="zoom-in-down" data-aos-duration="1000">
                 <div className='flipper' >
                 <div className="front " >
                    <div className='card-header'>
                    <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>
                    </div>
                    <div className='card-body'>  
                    <h4 className='letrasCard'>Realizar el <b>Curso</b> que deseas</h4>
                    </div>
                    <div className='card-footer'>
                      <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
                    </div>
               </div>
              <div className='back text-center'>
                <br></br>
                  <h4>Cursos Disponibles</h4>
                  <br></br>
                  <ul>
                    <li>Recursos Humanos</li>
                    <li>Administración de empresas</li>
                    <li>Dactilografia</li>
                    <li>Auxiliar farmacia</li>
                    <li>Auxiliar Contable</li>
                  </ul>
             </div>
            </div>
           </div>
           <div className='flip-container'  data-aos="slide-up" data-aos-duration="1000">
                 <div className='flipper' >
                 <div className="front " >
                    <div className='card-header'>
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                    </div>
                    <div className='card-body'>  
                       <h4 className='letrasCard'>Tomar <b>Talleres</b> de capacitación</h4>
                    </div>
                    <div className='card-footer'>
                    <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
                    </div>
               </div>
              <div className='back text-center'>
                <br></br>
                  <h4>Talleres Disponibles</h4>
                  <br></br>
                  <ul>
                    <li>Artesanias</li>
                    <li>Tejidos</li>
                    <li>Pintura</li>
                    <li>Cocina</li>
                    <li>Pasteleria</li>
                  </ul>
             </div>
            </div>
           </div>
            </div> 
        </div>
        <br></br>
        <h3 className='' data-aos="fade-up-right" data-aos-duration="1000">Todo Modalidad virtual</h3>
        <h2 className='' data-aos="zoom-in-down" data-aos-duration="1000">También podrás elegir Profesor</h2>
        <h2 className='' data-aos="zoom-in-down" data-aos-duration="1000">de acuerdo a tus horarios disponibles</h2>
        </Jumbotron>
    */}


        </>
    );
}


Aos.init({
  useClassNames: true,
  initClassName:false
});

export default CardInformativas;