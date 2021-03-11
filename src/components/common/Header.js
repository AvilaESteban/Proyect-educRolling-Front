import React, {useState,useRef} from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";


const Header = () => {
   const [show, setShow] = useState(false);
   const target = useRef(null);
  return (
    <>
      <Navbar bg="success" variant="" expand="lg" className="">
        <h7 className="text-light">Logo</h7>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">

           {/* Boton: Inicio */}
          <div className="d-flex  ">
            <NavLink
              exact={true}
              to="/inicio"
              className="nav-link text-light "
              activeClassName="active"
            >
              {" "}
              Inicio
            </NavLink>

            {/* Boton: Registrarme para enseñar */}
            <NavLink
              exact={true}
              to="/profesor/nuevo"
              className="nav-link text-light"
              activeClassName="active"
            >
              {" "}
              Registrame para enseñar
            </NavLink>
        
        {/* Boton categorias */}
            <Dropdown>
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
            </Dropdown>
        
    
           
            <input></input>
            <button>Buscar</button>

           {/* Boton: Login */}
             <NavLink
             exact={true}
             to="/login"
             className="nav-link text-light"
             activeClassName="active"
           >
             {" "}
             Iniciar Sesion
           </NavLink>

             {/* Boton: Registrarme */}
           <NavLink
             exact={true}
             to="/register"
             className="nav-link text-light"
             activeClassName="active"
           >
             {" "}
             Registrarme
           </NavLink>
            
                {/* Boton Perfil */}
     <Button className='bg-success text-light' ref={target} onClick={() => setShow(!show)}>
        Perfil
      </Button>
      <Overlay target={target.current} show={show} placement="right">
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



          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
