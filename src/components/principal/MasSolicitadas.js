import React from 'react';
import { NavLink} from "react-router-dom";
import { Card } from 'react-bootstrap';

const MasSolicitadas = () => {
    return(
        <>
          <div className=" text-center">
     <h1 className="p-4">Categorias más solicitadas </h1>
        <h2 className="p-4"> Materias </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Matemática</h4>
              <NavLink
                   exact={true}
                   to='/matematica'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Lengua</h4>
              <NavLink
                   exact={true}
                   to='/lengua'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Quimica</h4>
              <NavLink
                   exact={true}
                   to='/quimica'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>

      <div className=" text-center">
        <h2 className="p-4"> Cursos </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Auxiliar Farmacia</h4>
              <NavLink
                   exact={true}
                   to='/auxFarmacia'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Dactilografia</h4>
              <NavLink
                   exact={true}
                   to='/dactilografia'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Recursos Humanos</h4>
              <NavLink
                   exact={true}
                   to='/recursoHumano'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>

      <div className=" text-center">
        <h2 className="p-4"> Talleres </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Pintura</h4>
              <NavLink
                   exact={true}
                   to='/pintura'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Tejidos y Bordados</h4>
              <NavLink
                   exact={true}
                   to='/tejidos'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
              <div className='column'>
              <h4>Pasteleria</h4>
              <NavLink
                   exact={true}
                   to='/pasteleria'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Ver Profesores</NavLink>
              </div>
          </Card>
        </div>
      </div>
        </>
    );
}

export default MasSolicitadas;