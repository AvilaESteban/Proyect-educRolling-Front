import React, {useState,useRef} from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const Header = () => {

  return (
    <>

 <Navbar bg="success" variant="" expand="lg" className="fixed-top ">
        <h7 className="text-light">Logo</h7>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
           <div className="containerHea green borderXwidth ">
             <a>
             <form className="inputbox ">
              <input className='my-2' placeholder='Buscar' required="required" />
              <button type="reset" className="del"></button>
             </form>
             </a>
          
             <a>
             <NavLink
              exact={true}
              to="/inicio"
            >
              Inicio
            </NavLink>
             </a>
             <a>
             <NavLink
              exact={true}
              to="/profesor/nuevo"
            >
              Registrame para enseñar
            </NavLink>
             </a>
            
             <a>
             <li><a className='ak' href="" className='text-light'>Categorias</a>
		              <ul className=''>
			            	<li><a className='ak'>Materias</a>
                  <ul>
				      	  	<li>
                      <a className='ak'> 
                       <NavLink
                           exact={true}
                           to="/matematica"
                         >
                           Matemática
                         </NavLink>
                     </a>
                    </li>
				      	  	<li>
                       <a className='ak'>
                      <NavLink
                           exact={true}
                           to="/lengua"
                         >
                            Lengua
                         </NavLink>
                       </a>
                     </li>
				        	</ul>
                 </li >
                 <li><a className='ak'>Taller</a>
                  <ul>
				      	  	<li>
                      <a className='ak'>
                      <NavLink
                           exact={true}
                           to="/pintura"
                         >
                             Pintura
                         </NavLink>
                       </a>
                      </li>
				      	  	<li>
                      <a className='ak' >
                       <NavLink
                           exact={true}
                           to="/tejidos"
                         >
                             Tejidos
                         </NavLink>
                      </a>
                    </li>
				        	</ul>
                 </li>
                 <li><a className='ak'>Cursos</a>
                  <ul>
				      	  	<li>
                      <a className='ak'>
                      <NavLink
                           exact={true}
                           to="/dactilografia"
                         >
                            Dactilografia
                         </NavLink>
                       </a>
                      </li>
				      	  	<li>
                      <a className='ak' >
                        <NavLink
                           exact={true}
                           to="/auxFarmacia"
                         >
                            Aux. Farmacia
                         </NavLink>
                      </a>
                    </li>
				        	</ul>
                 </li>
              	</ul>
	         		</li>
             </a>
             <a>
             <li><a className='ak' href="" className='text-light'>Registrarme</a>
		              <ul className=''>
			            	<li>
                      <a className='ak'>
                        <NavLink
                           exact={true}
                           to="/login"
                         >
                           IniciarSesion
                         </NavLink>
                      </a>
                   </li>
                 <li>
                    <a className='ak'>
                     <NavLink
                        exact={true}
                        to="/register"
                      >
                        Registro
                      </NavLink>
                     </a>
                 </li>
              	</ul>
	         		</li>
             </a>
             <a>
             <li><a className='ak' href="" className='text-light'>Perfil</a>
		              <ul className=''>
			            	<li>
                      <a className='ak'>
                        <NavLink
                           exact={true}
                           to="/perfil/alumno"
                         >
                           Alumno
                         </NavLink>
                      </a>
                   </li>
                 <li>
                    <a className='ak'>
                     <NavLink
                        exact={true}
                        to="/perfil/profesor"
                      >
                        Profesor
                      </NavLink>
                     </a>
                 </li>
              	</ul>
	         		</li>
             </a>
            
           </div>
        </Navbar.Collapse>
   </Navbar> 

  



      {/* <Navbar bg="success" variant="" expand="lg" className="p-2">
        <h7 className="text-light">Logo</h7>
       
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id=""> */}

           {/* Boton: Inicio */}
          {/* <div className="d-flex  ">
            <NavLink
              exact={true}
              to="/inicio"
              className="nav-link text-light "
              activeClassName="active"
            >
              {" "}
              Inicio
            </NavLink> */}

            {/* Boton: Registrarme para enseñar */}
            {/* <NavLink
              exact={true}
              to="/profesor/nuevo"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Registrame para enseñar
            </NavLink>
         */}
        {/* Boton categorias */}
            {/* <Dropdown>
              <Dropdown.Toggle variant="success">
                Que te gustaria aprender?
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Button variant="light">
                  <Form.Group>
                    <Form.Label>Materias - </Form.Label>
                    <Form.Control as="select" size="sm" className="w-50" custom>
                      <option>Matemática </option>
                      <option>Lengua</option>
                      <option>Fisica</option>
                      <option>Quimica</option>
                      <option>Biologia</option>
                    </Form.Control>
                  </Form.Group>
                </Button>
                <Button variant="light">
                  <Form.Group>
                    <Form.Label> Cursos </Form.Label>
                    <Form.Control as="select" size="sm" className="w-50" custom>
                      <option>Aux. farmacia </option>
                      <option>Recursos Humano</option>
                      <option>Diseño Gráfico</option>
                      <option>Dactilografia</option>
                      <option>Aux. contable</option>
                    </Form.Control>
                  </Form.Group>
                </Button>
                <Button variant="light">
                  <Form.Group>
                    <Form.Label> Talleres </Form.Label>
                    <Form.Control as="select" size="sm" className="w-50" custom>
                      <option>Pintura </option>
                      <option>Porcelana</option>
                      <option>Carpinteria</option>
                      <option>Cocina</option>
                      <option>Pasteleria</option>
                    </Form.Control>
                  </Form.Group>
                </Button>
              </Dropdown.Menu>
            </Dropdown> */}

           {/* Boton: Login */}
             {/* <NavLink
             exact={true}
             to="/login"
             className="nav-link text-light"
             activeClassName="active"
           >
             {" "}
             Iniciar Sesion
           </NavLink> */}

             {/* Boton: Registrarme */}
           {/* <NavLink
             exact={true}
             to="/register"
             className="nav-link text-light"
             activeClassName="active"
           >
             {" "}
             Registrarme
           </NavLink> */}
            
                {/* Boton Perfil */}
     {/* <Button className='bg-success text-light' ref={target} onClick={() => setShow(!show)}>
        Perfil
      </Button> */}
      {/* <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
               <NavLink
              exact={true}
              to="/perfil/alumno"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Alumno
            </NavLink>
            <NavLink
              exact={true}
              to="/perfil/profesor"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Profesor
            </NavLink>
          </Tooltip>
        )}
      </Overlay>
 */}
         {/* <form className="inputbox ">
          <input className='my-2' required="required" />
          <button type="reset" className="del"></button>
        </form>

          </div>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
};

export default Header;
