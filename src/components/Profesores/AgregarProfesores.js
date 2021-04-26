import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { NavLink} from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Swal from 'sweetalert2';
import Alert from 'react-bootstrap/Alert';
import {withRouter} from 'react-router-dom'

const  AgregarProfesores = (props) => {
     const [apellidoNombre, setApellidoNombre] = useState('');
     const [descripcion, setDescripcion] = useState('');
     const [imagen, setImagen] = useState('');
     const [categoria, setCategoria] = useState('');
     const [subCategoriaMaterias, setSubCategoriaMaterias] = useState('');
     const [subCategoriaCursos, setSubCategoriaCursos] = useState('');
     const [subCategoriaTalleres, setSubCategoriaTalleres] = useState('');
     const [otro, setOtro] = useState('');
     const [arancel, setArancel] = useState('');
     const [diasDisponibles, setDiasDisponibles] = useState('');
     const [horariosDisponibles, setHorariosDisponibles] = useState('');
     const [aceptarTerminos, setAceptarTerminos] = useState('');
     const [error, setError] = useState(false);


     const seleccionarCategoria = (e) => {
       setCategoria(e.target.value);
     }

     const seleccionarSubCategoriaMaterias = (e) => {
       setSubCategoriaMaterias(e.target.value);
     }

     const seleccionarSubCategoriaCursos = (e) => {
       setSubCategoriaCursos(e.target.value);
     }

     const seleccionarSubCategoriaTalleres = (e) => {
       setSubCategoriaTalleres(e.target.value);
     }

    const handleSubmit = async (e) => {
      e.preventDefault();
    //  validar
     if(apellidoNombre.trim() === "" ||
     descripcion.trim() === "" ||
     imagen.trim() === "" ||
     categoria === "" ||
     subCategoriaMaterias === "" ||
     subCategoriaCursos === "" ||
     subCategoriaTalleres ==="" ||
     otro.trim() === "" ||
     arancel.trim() === "" ||
     diasDisponibles.trim() === "" ||
     horariosDisponibles.trim() === "" ||
     aceptarTerminos === "" 
     ){
       setError(true);
       return;
     }
     setError(false);
      // creamos el objeto a enviar
      const  datos = {
        apellidoNombre,
        descripcion,
        imagen,
        categoria,
        subCategoriaMaterias,
        subCategoriaCursos,
        subCategoriaTalleres,
        otro,
        arancel,
        diasDisponibles,
        horariosDisponibles,
        aceptarTerminos
      }

       try{
         const cabecera = {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify(datos)
         }
         const resultado = await fetch("http://localhost:4000/profesores", cabecera);
         console.log(resultado);
         if(resultado.status === 201){
          Swal.fire(
            'Profesor Agregado Exitosamente',
            'La cuenta se creo correctamente',
            'success'
        )
        props.history.push("/profesores")
         }
         
       }catch(error){
        console.log(error);
      }

      
      }

    return(
        <>
        <Header/>
        <br></br>
        <h1 className='text-center p-5'>Crear cuenta</h1>
          <h1 className='text-center'>Registrarse para enseñar</h1>
           {
             (error)? (<Alert variant={'danger'}>Todos los campos son obligatorios</Alert>) : null
           }
          <br></br>
          <section className='container text-center'>
         <Form onSubmit={handleSubmit}
          >
          <Form.Group controlId="apellidoNombreId">
            <Form.Label>Apellido y Nombre</Form.Label>
            <Form.Control 
                 type="text" 
                 placeholder="Ej: Diaz Maria"
                 onChange={(e) => setApellidoNombre(e.target.value)}
             />
          </Form.Group>
          <Form.Group controlId="descripcionId">
            <Form.Label>Qué es lo que enseñas?</Form.Label>
            <Form.Control 
                 type="text" 
                 placeholder="Breve descripción" 
                 onChange={(e) => setDescripcion(e.target.value)}
             />
          </Form.Group>
          <Form.Group controlId="fotoId">
            <Form.Label>Insertar Foto 4 x 4</Form.Label>
            <Form.Control 
                type='file'
                name='image'
                enctype='multipart/form-data'
                 onChange={(e) => setImagen(e.target.value)}
               />
          </Form.Group>
            <br></br>
           <Form.Group controlId="formBasicCheckbox">
               <Form.Label>Seleccionar Categoria</Form.Label>
               <br></br>
            <Form.Check 
                   type="radio" 
                   label="Materia" 
                   value="materia" 
                   name="categoria" 
                   onChange={seleccionarCategoria}  
                   inline
             />
            <Form.Check 
                    type="radio" 
                    label="Taller" 
                    value="taller" 
                    name="categoria"
                    onChange={seleccionarCategoria}  
                    inline
              />
            <Form.Check 
                    type="radio" 
                    label="Curso" 
                    value="curso" 
                    name="categoria"
                    onChange={seleccionarCategoria} 
                    inline
              />
          </Form.Group>
             <br></br>
             <Form.Label>Seleccionar sub-categoria de lo que enseñas</Form.Label>
             <br></br>
             <br></br>
             <Form.Label>Materias</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
                 <Form.Check 
                       type="radio" 
                       label="Matematica" 
                       value="matematica" 
                       name="subCategoriaMaterias" 
                      onChange={seleccionarSubCategoriaMaterias}   
                       inline
                  />
                 <Form.Check 
                       type="radio" 
                       label="Lengua" 
                       value="lengua" 
                       name="subCategoriaMaterias" 
                       onChange={seleccionarSubCategoriaMaterias} 
                       inline
                  />
                 <Form.Check 
                      type="radio" 
                      label="Fisica" 
                      value="fisica" 
                      name="subCategoriaMaterias"
                     onChange={seleccionarSubCategoriaMaterias}  
                     inline
                   />
                 <Form.Check 
                       type="radio" 
                       label="Quimica" 
                       value="quimica" 
                       name="subCategoriaMaterias"
                       onChange={seleccionarSubCategoriaMaterias}  
                       inline
                  />
                 <Form.Check 
                       type="radio" 
                       label="Otro" 
                       value="otro" 
                       name="subCategoriaMaterias" 
                       onChange={seleccionarSubCategoriaMaterias}  
                      inline
                  />
                  <Form.Check 
                       type="radio" 
                       label="Ninguno" 
                       value="ninguno" 
                       name="subCategoriaMaterias" 
                       onChange={seleccionarSubCategoriaMaterias}  
                      inline
                  />
                 {/* <Form.Control as="select" size="sm" className='w-50' custom>
                        <option>Matemática </option>
                        <option>Lengua</option>
                        <option>Fisica</option>
                        <option>Quimica</option>
                        <option>Otro</option>
                 </Form.Control> */}
               </Form.Group>
               <br></br>
               <Form.Label>Cursos</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
               <Form.Check 
                       type="radio" 
                       label="Aux.Farmacia" 
                       value="auxiliarFarmacia" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                  <Form.Check 
                       type="radio" 
                       label="Diseño Grafica" 
                       value="diseñoGrafico" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Dactilografia" 
                       value="dactilografia" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Rec.Humanos" 
                       value="recursosHumanos" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Otro"
                       value="otro" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Ninguno"
                       value="ninguno" 
                       name="subCategoriaCursos" 
                       onChange={seleccionarSubCategoriaCursos}  
                      inline
                  />
                 {/* <Form.Control as="select" size="sm" className='w-50' custom>
                        <option>Auxiliar de farmacia </option>
                        <option>Recursos Humano</option>
                        <option>Diseño Gráfico</option>
                        <option>Dactilografia</option>
                        <option>Otro</option>
                 </Form.Control> */}
               </Form.Group>
               <br></br>
               <Form.Label>Talleres</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
               <Form.Check 
                       type="radio" 
                       label="Pintura"
                       value="pintura" 
                       name="subCategoriaTalleres" 
                      onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Cocina"
                       value="cocina" 
                       name="subCategoriaTalleres" 
                       onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Porcelana"
                       value="porcelana" 
                       name="subCategoriaTalleres" 
                       onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Carpinteria"
                       value="carpinteria" 
                       name="subCategoriaTalleres" 
                      onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
               <Form.Check 
                       type="radio" 
                       label="Otro"
                       value="otro" 
                       name="subCategoriaTalleres" 
                       onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
                   <Form.Check 
                       type="radio" 
                       label="Ninguno"
                       value="ninguno" 
                       name="subCategoriaTalleres" 
                       onChange={seleccionarSubCategoriaTalleres}  
                      inline
                  />
                 {/* <Form.Control as="select" size="sm" className='w-50'  custom>
                         <option>Pintura </option>
                         <option>Porcelana</option>
                         <option>Carpinteria</option>
                         <option>Cocina</option>
                         <option>Otro</option>
                 </Form.Control > */}
               </Form.Group >
               <Form.Group controlId="otroId">
                     <Form.Label>Si no encuentras lo que enseñas</Form.Label>
                     <Form.Control 
                           type="text"
                            placeholder="escribe aqui tu materia/taller/curso " 
                            onChange={(e) => setOtro(e.target.value)} 
                      />
               </Form.Group>
               <Form.Group controlId="arancelId">
                   <Form.Label>Arancel 30 min</Form.Label>
                   <Form.Control 
                            type="number" 
                            min="200" 
                            max="600" 
                            placeholder="Min $200 - Max $600" 
                            onChange={(e) => setArancel(e.target.value)} 
                     />
                 </Form.Group>
                 <Form.Group controlId="diasId">
                     <Form.Label>Dias disponibles</Form.Label>
                     <Form.Control 
                          //  type="date" 
                          type='text' 
                          //  min='2020-08-01'  
                          //  max='2030-12-31' 
                          //  step='1' 
                           placeholder='ingrese dias disponibles' 
                           onChange={(e) => setDiasDisponibles(e.target.value)}
                      />
                 </Form.Group>
                <Form.Group controlId="horariosId">
                     <Form.Label>Horarios Disponibles</Form.Label>
                     <Form.Control
                           type='text'
                           placeholder='ingrese Horario' 
                           onChange={(e) => setHorariosDisponibles(e.target.value)}
                      />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                      <Form.Label>Aceptar Términos y condiciones</ Form.Label>
                      <br></br>
                      <Form.Check 
                            type="radio" 
                            label="Terminos" 
                            value="acepta terminos" 
                            name="aceptarTerminos"
                            onChange={(e) => setAceptarTerminos(e.target.value)}   
                            inline
                        />
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

export default withRouter(AgregarProfesores);