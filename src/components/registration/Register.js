import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Register = () => {
    return(
        <>
           
           <section className='container text-center'>
         <Form  onSubmit>
            <h1 className='my-4 text-dark text-center' > Registrarse</h1>
          <Form.Group controlId="apelllidoNombreId">
            <Form.Label>Apellido y nombre </Form.Label>
            <Form.Control type="text" placeholder="Ej: Diaz Maria" onChange />
          </Form.Group>
          <Form.Group controlId="dniId">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Ej: 44765676" onChange />
          </Form.Group>
          <Form.Group controlId="paisId">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Ej: Tucumán" onChange />
          </Form.Group>
          <Form.Group controlId="paisId">
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" placeholder="Ej: Argentina" onChange />
          </Form.Group>
          <Form.Group controlId="telefonoId">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="Ej: 0381 3- 197676" onChange />
          </Form.Group>
          <Form.Group controlId="correoId">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="gmail" placeholder="Ej: usuario@gmail.com" onChange />
          </Form.Group>
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit">
             Enviar
          </Button>
          </Form>
        </section>




        </>
    );
}

export default Register;