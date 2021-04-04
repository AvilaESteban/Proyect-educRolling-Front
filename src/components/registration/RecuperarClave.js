import React from 'react';
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { NavLink} from "react-router-dom";

const RecuperarClave = () => {
    return(
        <>
             <div className="fondosesion justify-content-center">
        <div className="container">
        <h1 className="text-center m-4" id="titulolog">
                        Recuperar Clave
                </h1>
            <article className="justify-content-center my-1 shadow p-3 mb-5 rounded bg-light">
                <div>
                    <Form >
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email-"
                                placeholder="Ingrese email"
                                id="email"
                                name="email"
                                // value={email}
                                // onChange={onChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                id="contraseña"
                                name="contraseña"
                                // value={contraseña}
                                // onChange={onChange}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Repita su contraseña"
                                id="confirmar"
                                name="confirmar"
                                // value={confirmar}
                                // onChange={onChange}
                            ></Form.Control>
                        </Form.Group>

                        <Button variant="primary" className="my-3" type="submit">
                            Guardar
                        </Button>
                    </Form>
             
            <br></br>

            <NavLink
                   exact={true}
                   to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
              >Volver a Inicio de Sesion
           </NavLink>
         
        
        </div>
            </article>
        </div>
    </div>
    </>
    )
}

export default RecuperarClave;


