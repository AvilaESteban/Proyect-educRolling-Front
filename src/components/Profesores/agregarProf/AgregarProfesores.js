import React, {useState, useRef} from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { NavLink} from "react-router-dom";
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Swal from 'sweetalert2';
import Alert from 'react-bootstrap/Alert';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './AgregarProf.css'

const  AgregarProfesores = (props) => {
     const [values, setValues] = useState({});
     const [formValid, setFormValid] = useState(false);
     const form = useRef(null);
     const [errors, setErrors] = useState([]);
     
    
    
     const handleChange = (evt) => {
        const valorInput = evt.target;

        setValues({...values,[valorInput.name] : valorInput.value})

        handleErrors(valorInput);
     }

     const handleErrors = (valorInput) => {
       const valido = valorInput.checkValidity();
       const valor = valorInput.name;
       if(!valido && !errors.includes(valor)) setErrors([...errors, valor]);
       if(valido && errors.includes(valor)) setErrors(errors.filter((error) => error !== valor));

       setFormValid(form.current.checkValidity());
     }

     const hasError = (valor) => errors.includes(valor);

     const getBorderStyle = (valor) => {
      if(Object.keys(values).includes(valor) && !hasError(valor))
      return 'valid'
      if(Object.keys(values).includes(valor) && hasError(valor))
      return 'invalid'

      return '';
    }

   
     

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // creamos el objeto a enviar
      const  datos = {
        values
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
        <div className="card_02 d-flex align-items-center justify-content-center flex-wrap p-5">
        <div className="box_3d m-1">
          <div className="item_outer">
            <div className="item front shadow border">
            <FontAwesomeIcon className=' display-2 text-center btn-outline-light' 
                icon={faAddressCard}>
            </FontAwesomeIcon>
           
            </div>
            <div className="item back shadow border d-flex align-items-center justify-content-center my-1">
              <br></br>
              <FontAwesomeIcon className=' display-2 text-center btn-outline-light' 
                 icon={faAddressBook}>
             </FontAwesomeIcon>
            </div>
          </div>
       
        </div>
        <div className="box_3d m-1 ">
          <div className="item_outer ">
            <div className="item _transparent shadow front border ">
              <h1 className='text-light text-center font-italic '>Registrarme para enseñar</h1>
            </div>
          
     <div className="item _transparent shadow back border d-flex align-items-center justify-content-center overflow-auto  ">
        <br></br>
          <section className='container text-center p-10 '>
            <br></br>
         <Form onSubmit={handleSubmit} ref={form} className='formValid ' autoComplete='off'>
           <br></br><br></br>
         <h1 className='text-center font-italic p-5'>Crear cuenta</h1>
          <h1 className='text-center font-italic p-5'>Registrarse para enseñar</h1>
          <br></br>
          <br></br>
          <br></br>
         <h5 className='text-center font-italic p-5'>Crear cuenta</h5>
         <br></br>
          <h3 className='text-light font-italic my-2'>Crear cuenta</h3>
          <Form.Group  >
            <Form.Label htmlFor='apellidoNombre'>Apellido y Nombre</Form.Label> <br></br>
            <input 
                 type="text" 
                 id='apellidoNombre'
                 name='apellidoNombre'
                 placeholder="Ej: Diaz Maria"
                 onChange={handleChange}
                 className={getBorderStyle('apellidoNombre')}
                 required
             />
          </Form.Group>
          {
               hasError('apellidoNombre') && (
                 <span className='error'>
                     Campo requerido, ingrese su Apellido y nombre
                 </span>
               )
             }
          <Form.Group controlId="descripcionId" className='my-2'>
            <Form.Label htmlFor='descripcion'>Qué es lo que enseñas?</Form.Label><br></br>
            <input 
                 type="text" 
                 id='descripcion'
                 name='descripcion'
                 maxLength='30'
                 placeholder="Breve descripción" 
                 onChange={handleChange}
                 className={getBorderStyle('descripcion')}
                 required
             />
          </Form.Group>
          {
               hasError('descripcion') && (
                 <span className='error'>
                     Campo requerido, realice una breve descripcion
                 </span>
               )
             }
          <Form.Group controlId="fotoId" >
            <Form.Label htmlFor='image'>Insertar foto</Form.Label><br></br>
            <input
                type='file'
                id='image'
                name='image'
                enctype='multipart/form-data'
                onChange={handleChange}
                className={getBorderStyle('image')}
                required
               />
          </Form.Group>
          {
               hasError('image') && (
                 <span className='error'>
                     Por favor, añada una imagen.
                 </span>
               )
             }
            <br></br>
           <Form.Group controlId="formBasicCheckbox">
               <Form.Label htmlFor='categoria'>Seleccionar Categoria</Form.Label>
               <br></br>
             <select as="select" size="sm" id='categoria' name="categoria" onChange={handleChange} className={getBorderStyle('categoria')} required custom>
                         <option></option>
                        <option>Materias </option>
                        <option>Taller</option>
                        <option>Cursos</option>
                 </select>
             <br></br>
             </Form.Group>
             {
               hasError('categoria') && (
                 <span className='error'>
                     Campo requerido, seleccione una categoria.
                 </span>
               )
             }
             <br></br>
             <Form.Label>Seleccionar sub-categoria de lo que enseñas:</Form.Label><br></br>
             <Form.Label htmlFor='materia'>Materias</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
                 
                 <select as="select" size="sm" id='materia' name="materia" onChange={handleChange} className={getBorderStyle('materia')} required custom>
                       <option></option>
                        <option>Matemática </option>
                        <option>Lengua</option>
                        <option>Fisica</option>
                        <option>Quimica</option>
                        <option>Otro</option>
                        <option> - </option>
                 </select>
               </Form.Group>
               {
               hasError('materia') && (
                 <span className='error'>
                     Campo requerido, seleccione una materia.
                 </span>
               )
             }
               <br></br>
               <Form.Label htmlFor='curso'>Cursos</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
              
                 <select as="select"  id='curso' name="curso" onChange={handleChange}   size="sm" className={getBorderStyle('curso')} required custom>
                       <option></option>
                        <option>Auxiliar de farmacia </option>
                        <option>Recursos Humano</option>
                        <option>Diseño Gráfico</option>
                        <option>Dactilografia</option>
                        <option>Otro</option>
                        <option> - </option>
                 </select>
               </Form.Group>
               {
               hasError('curso') && (
                 <span className='error'>
                     Campo requerido, seleccione un curso.
                 </span>
               )
             }
               <br></br>
               <Form.Label htmlFor='taller'>Talleres</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
             
                  
                 <select as="select" id='taller' name="taller"  onChange={handleChange}   size="sm" className={getBorderStyle('taller')} required  custom>
                         <option></option>
                         <option>Pintura </option>
                         <option>Porcelana</option>
                         <option>Carpinteria</option>
                         <option>Cocina</option>
                         <option>Otro</option>
                         <option> - </option>
                 </select >
               </Form.Group >
               {
               hasError('taller') && (
                 <span className='error'>
                     Campo requerido, seleccione un taller.
                 </span>
               )
             }
               <Form.Group controlId="otroId">
                     <Form.Label htmlFor='otro'>Si no encuentras lo que enseñas</Form.Label><br></br>
                     <input 
                           type="text"
                           id='otro'
                           name='otro'
                            placeholder="escribe aqui tu materia/taller/curso " 
                            onChange={handleChange} 
                            className={getBorderStyle('otro')}
                            required
                      />
               </Form.Group>
               {
               hasError('otro') && (
                 <span className='error'>
                     describir que materia, taller o curso quieres dictar, sino poner un guion (-).
                 </span>
               )
             }
               <Form.Group controlId="arancelId">
                   <Form.Label htmlFor='arancel'>Arancel 30 min</Form.Label><br></br>
                   <input 
                            type="number" 
                            id='arancel'
                            name='arancel' 
                            placeholder="maximo $500 los 30 min" 
                            onChange={handleChange}
                            className={getBorderStyle('arancel')}
                            required
                     />
                 </Form.Group>
                 {
               hasError('arancel') && (
                 <span className='error'>
                     describir precio a cobrar por 30min de clase. Monto no mayor a $500
                 </span>
               )
             }
                 <Form.Group controlId="diasId">
                     <Form.Label htmlFor='dias'>Dias disponibles</Form.Label><br></br>
                     <input  
                          type='text' 
                          id='dias'
                          name='dias'
                           placeholder='Ej: Lun a vie' 
                           onChange={handleChange}
                           className={getBorderStyle('dias')}
                           required
                      />
                 </Form.Group>
                 {
               hasError('dias') && (
                 <span className='error'>
                     Poner sus dias disponibles para dictar clases.
                 </span>
               )
             }
                <Form.Group controlId="horariosId">
                     <Form.Label htmlFor='horarios'>Horarios Disponibles</Form.Label><br></br>
                     <input
                           type='text'
                           id='horarios'
                           name='horarios'
                           placeholder='ingrese su Horario' 
                           onChange={handleChange}
                           className={getBorderStyle('horarios')}
                           required
                      />
                </Form.Group>
                {
               hasError('horarios') && (
                 <span className='error'>
                     Poner sus dias diponibles para dictar clases.
                 </span>
               )
             }
                <Form.Group controlId="formBasicCheckbox">
                      <Form.Label  htmlFor='terminos'>Aceptar Términos y condiciones</ Form.Label>
                      <br></br>
                      <input 
                            id='terminos'
                            name='terminos'
                            placeholder='Ej: Si / No'
                            onChange={handleChange}   
                            inline
                            className={getBorderStyle('terminos')}
                            required
                        />
          </Form.Group>
          {
               hasError('terminos') && (
                 <span className='error'>
                     Poner Si acepta o No acepta terminos.
                 </span>
               )
             }
              <NavLink
                   exact={true}
                   to='/terminosCondiciones'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Leer Términos</NavLink>
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit" disabled={!formValid}>
            Enviar
          </Button>
          </Form>
          </section>
          </div>
          </div>
          </div>
          </div>
          <Footer/>








{/* 
         -----------------------------------------------------

          <section className='container  text-center '>
          <Form onSubmit={handleSubmit} ref={form} className='formValid' autoComplete='off'>
           <br></br><br></br>
         <h1 className='text-center font-italic'>Crear cuenta</h1>
          <h1 className='text-center font-italic'>Registrarse para enseñar</h1>
          <br></br>
          <Form.Group >
            <Form.Label htmlFor='apellidoNombre'>Apellido y Nombre</Form.Label> <br></br>
            <input 
                 type="text" 
                 id='apellidoNombre'
                 name='apellidoNombre'
                 placeholder="Ej: Diaz Maria"
                 onChange={handleChange}
                 className={getBorderStyle('apellidoNombre')}
                 required
             />
          </Form.Group>
          {
               hasError('apellidoNombre') && (
                 <span className='error'>
                     Campo requerido, ingrese su Apellido y nombre
                 </span>
               )
             }
          <Form.Group controlId="descripcionId">
            <Form.Label htmlFor='descripcion'>Qué es lo que enseñas?</Form.Label><br></br>
            <input 
                 type="text" 
                 id='descripcion'
                 name='descripcion'
                 maxLength='30'
                 placeholder="Breve descripción" 
                 onChange={handleChange}
                 className={getBorderStyle('descripcion')}
                 required
             />
          </Form.Group>
          {
               hasError('descripcion') && (
                 <span className='error'>
                     Campo requerido, realice una breve descripcion
                 </span>
               )
             }
          <Form.Group controlId="fotoId">
            <Form.Label htmlFor='image'>Insertar Foto 4 x 4</Form.Label><br></br>
            <input
                type='file'
                id='image'
                name='image'
                enctype='multipart/form-data'
                onChange={handleChange}
                className={getBorderStyle('image')}
                required
               />
          </Form.Group>
          {
               hasError('image') && (
                 <span className='error'>
                     Por favor, añada una imagen.
                 </span>
               )
             }
            <br></br>
           <Form.Group controlId="formBasicCheckbox">
               <Form.Label htmlFor='categoria'>Seleccionar Categoria</Form.Label>
               <br></br>
             <select as="select" size="sm" id='categoria' name="categoria" onChange={handleChange} className={getBorderStyle('categoria')} required custom>
                         <option></option>
                        <option>Materias </option>
                        <option>Taller</option>
                        <option>Cursos</option>
                 </select>
             <br></br>
             </Form.Group>
             {
               hasError('categoria') && (
                 <span className='error'>
                     Campo requerido, seleccione una categoria.
                 </span>
               )
             }
             <br></br>
             <Form.Label>Seleccionar sub-categoria de lo que enseñas:</Form.Label><br></br>
             <Form.Label htmlFor='materia'>Materias</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
                 
                 <select as="select" size="sm" id='materia' name="materia" onChange={handleChange} className={getBorderStyle('materia')} required custom>
                       <option></option>
                        <option>Matemática </option>
                        <option>Lengua</option>
                        <option>Fisica</option>
                        <option>Quimica</option>
                        <option>Otro</option>
                        <option> - </option>
                 </select>
               </Form.Group>
               {
               hasError('materia') && (
                 <span className='error'>
                     Campo requerido, seleccione una materia.
                 </span>
               )
             }
               <br></br>
               <Form.Label htmlFor='curso'>Cursos</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
              
                 <select as="select"  id='curso' name="curso" onChange={handleChange}   size="sm" className={getBorderStyle('curso')} required custom>
                       <option></option>
                        <option>Auxiliar de farmacia </option>
                        <option>Recursos Humano</option>
                        <option>Diseño Gráfico</option>
                        <option>Dactilografia</option>
                        <option>Otro</option>
                        <option> - </option>
                 </select>
               </Form.Group>
               {
               hasError('curso') && (
                 <span className='error'>
                     Campo requerido, seleccione un curso.
                 </span>
               )
             }
               <br></br>
               <Form.Label htmlFor='taller'>Talleres</Form.Label>
               <Form.Group controlId="formBasicCheckbox">
             
                  
                 <select as="select" id='taller' name="taller"  onChange={handleChange}   size="sm" className={getBorderStyle('taller')} required  custom>
                         <option></option>
                         <option>Pintura </option>
                         <option>Porcelana</option>
                         <option>Carpinteria</option>
                         <option>Cocina</option>
                         <option>Otro</option>
                         <option> - </option>
                 </select >
               </Form.Group >
               {
               hasError('taller') && (
                 <span className='error'>
                     Campo requerido, seleccione un taller.
                 </span>
               )
             }
               <Form.Group controlId="otroId">
                     <Form.Label htmlFor='otro'>Si no encuentras lo que enseñas</Form.Label><br></br>
                     <input 
                           type="text"
                           id='otro'
                           name='otro'
                            placeholder="escribe aqui tu materia/taller/curso " 
                            onChange={handleChange} 
                            className={getBorderStyle('otro')}
                            required
                      />
               </Form.Group>
               {
               hasError('otro') && (
                 <span className='error'>
                     describir que materia, taller o curso quieres dictar, sino poner un guion (-).
                 </span>
               )
             }
               <Form.Group controlId="arancelId">
                   <Form.Label htmlFor='arancel'>Arancel 30 min</Form.Label><br></br>
                   <input 
                            type="number" 
                            id='arancel'
                            name='arancel'
                            placeholder="maximo $500 los 30 min" 
                            onChange={handleChange}
                            className={getBorderStyle('arancel')}
                            required
                     />
                 </Form.Group>
                 {
               hasError('arancel') && (
                 <span className='error'>
                     describir precio a cobrar por 30min de clase. Monto no mayor a $500
                 </span>
               )
             }
                 <Form.Group controlId="diasId">
                     <Form.Label htmlFor='dias'>Dias disponibles</Form.Label><br></br>
                     <input 
                          type='text' 
                          id='dias'
                          name='dias' 
                           placeholder='Ej: Lun a vie' 
                           onChange={handleChange}
                           className={getBorderStyle('dias')}
                           required
                      />
                 </Form.Group>
                 {
               hasError('dias') && (
                 <span className='error'>
                     Poner sus dias disponibles para dictar clases.
                 </span>
               )
             }
                <Form.Group controlId="horariosId">
                     <Form.Label htmlFor='horarios'>Horarios Disponibles</Form.Label><br></br>
                     <input
                           type='text'
                           id='horarios'
                           name='horarios'
                           placeholder='ingrese su Horario' 
                           onChange={handleChange}
                           className={getBorderStyle('horarios')}
                           required
                      />
                </Form.Group>
                {
               hasError('horarios') && (
                 <span className='error'>
                     Poner sus dias diponibles para dictar clases.
                 </span>
               )
             }
                <Form.Group controlId="formBasicCheckbox">
                      <Form.Label >Aceptar Términos y condiciones</ Form.Label>
                      <br></br>
                      <Form.Check 
                            type="radio" 
                            name='terminos'
                            label="Terminos" 
                            value="acepta terminos" 
                            onChange={handleChange}   
                            inline

                        />
            <NavLink
                   exact={true}
                   to='/terminosCondiciones'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Leer Términos</NavLink>
          </Form.Group>
            
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit" disabled={!formValid}>
            Enviar
          </Button>
          </Form>
          </section>

         -------------------------------------------------------- */}

        </>
    );
}

export default withRouter(AgregarProfesores);
















// ------------------------------------------------


















// import React, {useState} from 'react';
// import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
// import { NavLink} from "react-router-dom";
// import Header from '../../common/Header';
// import Footer from '../../common/Footer';
// import Swal from 'sweetalert2';
// import Alert from 'react-bootstrap/Alert';
// import {withRouter} from 'react-router-dom'

// const  AgregarProfesores = (props) => {
//      const [apellidoNombre, setApellidoNombre] = useState('');
//      const [descripcion, setDescripcion] = useState('');
//      const [imagen, setImagen] = useState('');
//      const [categoria, setCategoria] = useState('');
//      const [subCategoriaMaterias, setSubCategoriaMaterias] = useState('');
//      const [subCategoriaCursos, setSubCategoriaCursos] = useState('');
//      const [subCategoriaTalleres, setSubCategoriaTalleres] = useState('');
//      const [otro, setOtro] = useState('');
//      const [arancel, setArancel] = useState('');
//      const [diasDisponibles, setDiasDisponibles] = useState('');
//      const [horariosDisponibles, setHorariosDisponibles] = useState('');
//      const [aceptarTerminos, setAceptarTerminos] = useState('');
//      const [error, setError] = useState(false);


//      const seleccionarCategoria = (e) => {
//        setCategoria(e.target.value);
//      }

//      const seleccionarSubCategoriaMaterias = (e) => {
//        setSubCategoriaMaterias(e.target.value);
//      }

//      const seleccionarSubCategoriaCursos = (e) => {
//        setSubCategoriaCursos(e.target.value);
//      }

//      const seleccionarSubCategoriaTalleres = (e) => {
//        setSubCategoriaTalleres(e.target.value);
//      }

//     const handleSubmit = async (e) => {
//       e.preventDefault();
   
//      if(apellidoNombre.trim() === "" ||
//      descripcion.trim() === "" ||
//      imagen.trim() === "" ||
//      categoria === "" ||
//      subCategoriaMaterias === "" ||
//      subCategoriaCursos === "" ||
//      subCategoriaTalleres ==="" ||
//      otro.trim() === "" ||
//      arancel.trim() === "" ||
//      diasDisponibles.trim() === "" ||
//      horariosDisponibles.trim() === "" ||
//      aceptarTerminos === "" 
//      ){
//        setError(true);
//        return;
//      }
//      setError(false);
     
//       const  datos = {
//         apellidoNombre,
//         descripcion,
//         imagen,
//         categoria,
//         subCategoriaMaterias,
//         subCategoriaCursos,
//         subCategoriaTalleres,
//         otro,
//         arancel,
//         diasDisponibles,
//         horariosDisponibles,
//         aceptarTerminos
//       }

//        try{
//          const cabecera = {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json"
//            },
//            body: JSON.stringify(datos)
//          }
//          const resultado = await fetch("http://localhost:4000/profesores", cabecera);
//          console.log(resultado);
//          if(resultado.status === 201){
//           Swal.fire(
//             'Profesor Agregado Exitosamente',
//             'La cuenta se creo correctamente',
//             'success'
//         )
//         props.history.push("/profesores")
//          }
         
//        }catch(error){
//         console.log(error);
//       }

      
//       }

//     return(
//         <>
//         <Header/>
//         <br></br>
//         <h1 className='text-center p-5'>Crear cuenta</h1>
//           <h1 className='text-center'>Registrarse para enseñar</h1>
//            {
//              (error)? (<Alert variant={'danger'}>Todos los campos son obligatorios</Alert>) : null
//            }
//           <br></br>
//           <section className='container text-center'>
//          <Form onSubmit={handleSubmit}
//           >
//           <Form.Group controlId="apellidoNombreId">
//             <Form.Label>Apellido y Nombre</Form.Label>
//             <Form.Control 
//                  type="text" 
//                  placeholder="Ej: Diaz Maria"
//                  onChange={(e) => setApellidoNombre(e.target.value)}
//              />
//           </Form.Group>
//           <Form.Group controlId="descripcionId">
//             <Form.Label>Breve descripcion de lo que enseñas</Form.Label>
//             <Form.Control 
//                  type="text" 
//                  placeholder="Breve descripción" 
//                  onChange={(e) => setDescripcion(e.target.value)}
//              />
//           </Form.Group>
//           <Form.Group controlId="fotoId">
//             <Form.Label>Insertar Foto 4 x 4</Form.Label>
//             <Form.Control 
//                 type='file'
//                 name='image'
//                 enctype='multipart/form-data'
//                  onChange={(e) => setImagen(e.target.value)}
//                />
//           </Form.Group>
//             <br></br>
//            <Form.Group controlId="formBasicCheckbox">
//                <Form.Label>Seleccionar Categoria</Form.Label>
//                <br></br>
//             <Form.Check 
//                    type="radio" 
//                    label="Materia" 
//                    value="materia" 
//                    name="categoria" 
//                    onChange={seleccionarCategoria}  
//                    inline
//              />
//             <Form.Check 
//                     type="radio" 
//                     label="Taller" 
//                     value="taller" 
//                     name="categoria"
//                     onChange={seleccionarCategoria}  
//                     inline
//               />
//             <Form.Check 
//                     type="radio" 
//                     label="Curso" 
//                     value="curso" 
//                     name="categoria"
//                     onChange={seleccionarCategoria} 
//                     inline
//               />
//           </Form.Group>
//              <br></br>
//              <Form.Label>Seleccionar sub-categoria de lo que enseñas</Form.Label>
//              <br></br>
//              <br></br>
//              <Form.Label>Materias</Form.Label>
//                <Form.Group controlId="formBasicCheckbox">
//                  <Form.Check 
//                        type="radio" 
//                        label="Matematica" 
//                        value="matematica" 
//                        name="subCategoriaMaterias" 
//                       onChange={seleccionarSubCategoriaMaterias}   
//                        inline
//                   />
//                  <Form.Check 
//                        type="radio" 
//                        label="Lengua" 
//                        value="lengua" 
//                        name="subCategoriaMaterias" 
//                        onChange={seleccionarSubCategoriaMaterias} 
//                        inline
//                   />
//                  <Form.Check 
//                       type="radio" 
//                       label="Fisica" 
//                       value="fisica" 
//                       name="subCategoriaMaterias"
//                      onChange={seleccionarSubCategoriaMaterias}  
//                      inline
//                    />
//                  <Form.Check 
//                        type="radio" 
//                        label="Quimica" 
//                        value="quimica" 
//                        name="subCategoriaMaterias"
//                        onChange={seleccionarSubCategoriaMaterias}  
//                        inline
//                   />
//                  <Form.Check 
//                        type="radio" 
//                        label="Otro" 
//                        value="otro" 
//                        name="subCategoriaMaterias" 
//                        onChange={seleccionarSubCategoriaMaterias}  
//                       inline
//                   />
//                   <Form.Check 
//                        type="radio" 
//                        label="Ninguno" 
//                        value="ninguno" 
//                        name="subCategoriaMaterias" 
//                        onChange={seleccionarSubCategoriaMaterias}  
//                       inline
//                   />
                 
//                </Form.Group>
//                <br></br>
//                <Form.Label>Cursos</Form.Label>
//                <Form.Group controlId="formBasicCheckbox">
//                <Form.Check 
//                        type="radio" 
//                        label="Aux.Farmacia" 
//                        value="auxiliarFarmacia" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
//                   <Form.Check 
//                        type="radio" 
//                        label="Diseño Grafica" 
//                        value="diseñoGrafico" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Dactilografia" 
//                        value="dactilografia" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Rec.Humanos" 
//                        value="recursosHumanos" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Otro"
//                        value="otro" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Ninguno"
//                        value="ninguno" 
//                        name="subCategoriaCursos" 
//                        onChange={seleccionarSubCategoriaCursos}  
//                       inline
//                   />
                
//                </Form.Group>
//                <br></br>
//                <Form.Label>Talleres</Form.Label>
//                <Form.Group controlId="formBasicCheckbox">
//                <Form.Check 
//                        type="radio" 
//                        label="Pintura"
//                        value="pintura" 
//                        name="subCategoriaTalleres" 
//                       onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Cocina"
//                        value="cocina" 
//                        name="subCategoriaTalleres" 
//                        onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Porcelana"
//                        value="porcelana" 
//                        name="subCategoriaTalleres" 
//                        onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Carpinteria"
//                        value="carpinteria" 
//                        name="subCategoriaTalleres" 
//                       onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
//                <Form.Check 
//                        type="radio" 
//                        label="Otro"
//                        value="otro" 
//                        name="subCategoriaTalleres" 
//                        onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
//                    <Form.Check 
//                        type="radio" 
//                        label="Ninguno"
//                        value="ninguno" 
//                        name="subCategoriaTalleres" 
//                        onChange={seleccionarSubCategoriaTalleres}  
//                       inline
//                   />
                 
//                </Form.Group >
//                <Form.Group controlId="otroId">
//                      <Form.Label>Si no encuentras lo que enseñas</Form.Label>
//                      <Form.Control 
//                            type="text"
//                             placeholder="escribe aqui tu materia/taller/curso " 
//                             onChange={(e) => setOtro(e.target.value)} 
//                       />
//                </Form.Group>
//                <Form.Group controlId="arancelId">
//                    <Form.Label>Arancel 30 min</Form.Label>
//                    <Form.Control 
//                             type="number" 
//                             min="200" 
//                             max="600" 
//                             placeholder="Min $200 - Max $600" 
//                             onChange={(e) => setArancel(e.target.value)} 
//                      />
//                  </Form.Group>
//                  <Form.Group controlId="diasId">
//                      <Form.Label>Dias disponibles</Form.Label>
//                      <Form.Control 
//                            type="date" 
//                           type='text' 
//                            min='2020-08-01'  
//                            max='2030-12-31' 
//                           step='1' 
//                            placeholder='ingrese dias disponibles' 
//                            onChange={(e) => setDiasDisponibles(e.target.value)}
//                       />
//                  </Form.Group>
//                 <Form.Group controlId="horariosId">
//                      <Form.Label>Horarios Disponibles</Form.Label>
//                      <Form.Control
//                            type='text'
//                            placeholder='ingrese Horario' 
//                            onChange={(e) => setHorariosDisponibles(e.target.value)}
//                       />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicCheckbox">
//                       <Form.Label>Aceptar Términos y condiciones</ Form.Label>
//                       <br></br>
//                       <Form.Check 
//                             type="radio" 
//                             label="Terminos" 
//                             value="acepta terminos" 
//                             name="aceptarTerminos"
//                             onChange={(e) => setAceptarTerminos(e.target.value)}   
//                             inline
//                         />
//             <NavLink
//                    exact={true}
//                    to='/terminosCondiciones'
//                    className='nav-link text-outline-light '
//                    activeClassName='active'
//         > Leer Términos</NavLink>
//           </Form.Group>
            
//           <Button variant="outline-success text-center" className='w-50 my-4' type="submit">
//             Enviar
//           </Button>
//           </Form>
//           </section>
//           <Footer/>
//         </>
//     );
// }

// export default withRouter(AgregarProfesores);