import React from 'react';
import Aos from 'aos';
import { NavLink} from "react-router-dom";
import { Card } from 'react-bootstrap';
import ImgMat from '../../asset/img/matematica.jpg';
import ImgLen from '../../asset/img/lengua.jpg';
import ImgQui from '../../asset/img/quimica.jpg';
import ImgFar from '../../asset/img/farmacia.jpg';
import ImgDac from '../../asset/img/dacti.jpg';
import ImgRec from '../../asset/img/recHum.jpg';
import ImgPin from '../../asset/img/pintura.jpg';
import ImgTej from '../../asset/img/tejido.jpg';
import ImgPas from '../../asset/img/pasteleria.jpg';

const MasSolicitadas = () => {
    return(
        <>
          <div className=" text-center">
     <h1 className="p-4">Los Más Solicitados </h1>
        <h2 className="p-4">Categoria: Materias </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center my-2 p-2  ">
          <Card className="col-xl-3 col-md-6 col-sm-12  shadow card" data-aos="zoom-in" data-aos-duration="1000">
            <div className='card-header shadow'>
            <img src={ImgMat} alt='1' className='w-100 '/> 
            </div>
              <div className='column  p-5'>
              <h4 >Matemática</h4>
              <NavLink
                   exact={true}
                   to='/profesores/matematica'
                   className='nav-link text-outline-light  shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>

          <Card className="col-xl-3 col-md-6 col-sm-12 shadow  card "  data-aos="zoom-out-right" data-aos-duration="1000">
             <div className='card-header shadow'>
              <img src={ImgLen} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Lengua</h4>
              <NavLink
                   exact={true}
                   to='/profesores/lengua'
                   className='nav-link text-outline-light shadow '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>

          <Card className="col-xl-3 col-md-6 col-sm-12 shadow  card" data-aos="zoom-out-left" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgQui} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Quimica</h4>
              <NavLink
                   exact={true}
                   to='/profesores/quimica'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>

      <div className=" text-center">
        <h2 className="p-4">Categoria: Cursos </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card"  data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgFar} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Auxiliar Farmacia</h4>
              <NavLink
                   exact={true}
                   to='/profesores/auxFarmacia'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card" data-aos="zoom-out-right" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgDac} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Dactilografia</h4>
              <NavLink
                   exact={true}
                   to='/profesores/dactilografia'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card" data-aos="zoom-out-left" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgRec} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Recursos Humanos</h4>
              <NavLink
                   exact={true}
                   to='/profesores/recursoHumano'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>

      <div className=" text-center">
        <h2 className="p-4">Categoria: Talleres </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgPin} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Pintura</h4>
              <NavLink
                   exact={true}
                   to='/profesores/pintura'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2 card" data-aos="zoom-out-right" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgTej} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Tejidos y Bordados</h4>
              <NavLink
                   exact={true}
                   to='/profesores/tejidos'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2 card" data-aos="zoom-out-left" data-aos-duration="1000">
          <div className='card-header shadow'>
              <img src={ImgPas} alt='1' className='w-100 '/> 
             </div>
              <div className='column p-5'>
              <h4>Pasteleria</h4>
              <NavLink
                   exact={true}
                   to='/profesores/pasteleria'
                   className='nav-link text-outline-light shadow'
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>
        </>
    );
}

Aos.init({
  useClassNames: true,
  initClassName:false
});

export default MasSolicitadas;