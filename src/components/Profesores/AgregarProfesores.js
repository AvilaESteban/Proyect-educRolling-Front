import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { NavLink} from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';

const  AgregarProfesores = () => {
    return(
        <>
        <Header/>
        <br></br>
          <h4>Registrarse para enseñar</h4>
          <section className='container text-center'>
         <Form  onSubmit>
          <Form.Group controlId="apellidoNombreId">
            <Form.Label>Apellido y Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ej: Diaz Maria" onChange />
            {/* onChange={(e) => setApellidoNombre(e.target.value)} */}
          </Form.Group>
          <Form.Group controlId="descripcionId">
            <Form.Label>Qué es lo que enseñas?</Form.Label>
            <Form.Control type="text" placeholder="Breve descripción" onChange />
          </Form.Group>
          <Form.Group controlId="fotoId">
            <Form.Label>Foto 4 x 4</Form.Label>
            <Form.Control type="text" placeholder="Ej: http://" onChange />
          </Form.Group>
    
           <Form.Group controlId="formBasicCheckbox">
               <Form.Label>Seleccionar Categoria</Form.Label>
               <br></br>
            <Form.Check type="radio" label="Materia" value="materia" name="categoria" onChange    inline/>
            <Form.Check type="radio" label="Taller" value="taller" name="categoria" onChange   inline/>
            <Form.Check type="radio" label="Curso" value="curso" name="categoria" onChange  inline/>
          </Form.Group>

             <Form.Label>Seleccionar lo que enseñas</Form.Label>
               <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                 <Form.Label>Materias</Form.Label>
                 <Form.Control as="select" size="sm" className='w-50' custom>
                        <option>Matemática </option>
                        <option>Lengua</option>
                        <option>Fisica</option>
                        <option>Quimica</option>
                        <option>Otro</option>
                 </Form.Control>
               </Form.Group>
               <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                 <Form.Label>Cursos</Form.Label>
                 <Form.Control as="select" size="sm" className='w-50' custom>
                        <option>Auxiliar de farmacia </option>
                        <option>Recursos Humano</option>
                        <option>Diseño Gráfico</option>
                        <option>Dactilografia</option>
                        <option>Otro</option>
                 </Form.Control>
               </Form.Group>
               <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                 <Form.Label>Talleres</Form.Label>
                 <Form.Control as="select" size="sm" className='w-50'  custom>
                         <option>Pintura </option>
                         <option>Porcelana</option>
                         <option>Carpinteria</option>
                         <option>Cocina</option>
                         <option>Otro</option>
                 </Form.Control >
               </Form.Group >
               <Form.Group controlId="otroId">
                     <Form.Label>Si no encuentras lo que enseñas</Form.Label>
                     <Form.Control type="text" placeholder="escribe aqui tu materia/taller/curso "  onChange  />
          </Form.Group>
          <Form.Group controlId="arancelId">
            <Form.Label>Arancel 30 min</Form.Label>
            <Form.Control type="number" min="200" max="600" placeholder="Min $200 - Max $600" onChange />
          </Form.Group>

          <Form.Group controlId="diasId">
            <Form.Label>Dias disponibles</Form.Label>
            <Form.Control 
                  type="date"  
                  min='2020-08-01'  
                  max='2030-12-31' 
                  step='1' 
                  placeholder='ingrese Fecha' 
                  onChange />
          </Form.Group>

          <Form.Group controlId="horariosId">
            <Form.Label>Horarios Disponibles</Form.Label>
            <Form.Control
                   type='text'
                 placeholder='ingrese Horario' 
                 onChange />
          </Form.Group>
          <Form.Group controlId="descripcionId">
          <Form.Label>Aceptar Términos y condiciones</Form.Label>
          <br></br>
            <Form.Check type="radio" label="Terminos" value="terminos" name="" onChange    inline/>
            <NavLink
                   exact={true}
                   to='/terminosCondiciones'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Leer Términos</NavLink>
          </Form.Group>
            
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit">
            Enviar
          </Button>
          </Form>
          </section>
          <Footer/>
        </>
    );
}

export default AgregarProfesores;