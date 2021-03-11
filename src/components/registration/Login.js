import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {NavLink } from "react-router-dom";

const  Login = () => {
    return(
        <>
        <section className='container text-center'>
            <Form onSubmit>
            <h2 className='my-4 text-dark text-success' > Iniciar Sesion</h2>
          <Form.Group controlId="usuarioId">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ej: usuario@gmail.com" onChange/>
          </Form.Group>
          <Form.Group controlId="contraseñaId">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="text" placeholder="Ej: uuario1234" onChange/>
          </Form.Group>
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit">
            Ingresar
          </Button>
            </Form>
        </section>
         
        <br></br>
           <NavLink
                   exact={true}
                   to='/recuperar/clave'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Recuperar Clave</NavLink>

            <br></br>
           <NavLink
                   exact={true}
                   to='/register'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Registrarme</NavLink>

        </>
     );
}

export default Login;