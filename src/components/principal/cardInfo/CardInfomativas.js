import React from  'react';
import Aos from 'aos';
import { Card, Jumbotron } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import {animateScroll as scroll} from 'react-scroll';
import './cardInfo.css';

const CardInformativas = () => {

  const onClickDown = () => {
		scroll.scrollToBottom();
	}

    return(
        <>
 
<div className="dd_heading p-5">

<h1  data-aos="fade-up-right" data-aos-duration="1000" className='text-center'>Aqui Podrás</h1>
<h3  data-aos="fade-up-right" data-aos-duration="1000" class="text-center"> <strong>Prepararte, Aprender y Estudiar</strong></h3>
<h3  data-aos="fade-up-right" data-aos-duration="1000" class="text-center">Virtualmente, las 24 hr del dia</h3>
</div>
<button onClick={onClickDown}>  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon></button>

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

      

        </>
    );
}











Aos.init({
  useClassNames: true,
  initClassName:false
});

export default CardInformativas;