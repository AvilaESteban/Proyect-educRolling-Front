import React, {useRef, useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { NavLink} from "react-router-dom";
import './register.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState('');
  const form = useRef(null)
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState([]);
  const [inicio, setInicio] = useState(true);
    
  useEffect(() => {
      if(inicio){
        let datosRegister = JSON.parse(localStorage.getItem("listaRegister"));
        if(datosRegister){
          setValues(datosRegister)
          // validar(datosRegister)
        }
        setInicio(false)
       
      }
      localStorage.setItem('listaRegister',JSON.stringify(values));
      
      // const validar = (datosRegister) => {
      //     for(let i = 0; i < values.lenght; i++);
      //     if(datosRegister == values){
      //       alert('Ya te encuentras registrado');
      //       return;
      //     }else{
      //       alert('Registrado Exitosamente.');
      //       return;
      //     }
      // }
 },[value, values ])

  const handleSubmitRegister = (e) => {
    e.preventDefault();
     setValues({
       ...values,
       value
     })
  }

  
  const handleChangeRegister = (evt) => {
    const input  = evt.target;

    setValue({...value,[ input.name] : input.value});
    handleErrors(input);
  }

  const handleErrors = (input) => {
   const isValid = input.checkValidity();
   const datos = input.name;

   if(!isValid && !errors.includes(datos)) setErrors([...errors, datos])
   if(isValid && errors.includes(datos)) setErrors(errors.filter((error)=> error !== datos))

   setFormValid(form.current.checkValidity());
  }

  const hasError = (datos) => errors.includes(datos);
  const getBorderStyle = (datos) => {
    if(Object.keys(values).includes(datos) && !hasError(datos))
    return 'valid'
    if(Object.keys(values).includes(datos) && hasError(datos))
    return 'invalid'

    return '';
  }

    return(
        <>
           <div className="card_02 d-flex align-items-center justify-content-center flex-wrap">
        <div className="box_3d m-1">
          <div className="item_outer">
            <div className="item front shadow border">
            <FontAwesomeIcon className=' display-2 text-center btn-outline-light' 
                icon={faAddressCard}>
            </FontAwesomeIcon>
           
            </div>
            <div className="item back shadow border d-flex align-items-center justify-content-center my-1">
              <br></br>
              
              <FontAwesomeIcon className=' text-center btn-outline-light' 
                 icon={faAddressBook}>
             </FontAwesomeIcon>
             <NavLink
                   exact={true}
                   to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
              >Volver a Inicio de Sesion
           </NavLink>
            </div>
          </div>
        </div>

        <div className="box_3d m-1">
          <div className="item_outer">
            <div className="item _transparent shadow front border">
              <h1 className='text-light font-italic '>Registrarse</h1>
            </div>
            <div className="item _transparent shadow back border d-flex align-items-center justify-content-center">


         <section className='container text-center'>
         <Form  onSubmit={handleSubmitRegister} ref={form} id='form' autoComplete='off' >
            <h1 className='text-light font-italic' > Registrarse</h1>
            <section>
          <Form.Group controlId="apelllidoNombreId">
            <Form.Label htmlFor='nombre'>Apellido y nombre </Form.Label><br></br>
            <input 
               type="text" 
               id='nombre'
               name='nombre'
               placeholder="Ej: Diaz Maria" 
               maxLength='50'
               className={getBorderStyle('nombre')}
               onChange= {handleChangeRegister}
               required
               />
          </Form.Group>
          {
            hasError('nombre') && (
              <span className='error'>
                Este campo es requerido. Ingrese su Nombre y apellido.
              </span>
              )
          }
          </section>
          <section>
          <Form.Group controlId="dniId">
            <Form.Label htmlFor='dni'>DNI</Form.Label><br></br>
            <input 
                type="number" 
                id='dni'
                name='dni'
                // pattern="[0-9]{8}"
                maxLength='8'
                placeholder="Ej: 44765676" 
                className={getBorderStyle('dni')}
                onChange= {handleChangeRegister}
                required
                />
          </Form.Group>
          {
            hasError('dni') && (
              <span className='error'>
                Este campo es requerido. Ingrese su nro de DNI.
              </span>
              )
          }
          </section>
          <section> 
          <Form.Group controlId="paisId">
            <Form.Label htmlFor='provincia'>Provincia</Form.Label><br></br>
            <input 
                type="text" 
                id='provincia'
                name='provincia'
                placeholder="Ej: Tucumán"
                minLength='1'
                onChange= {handleChangeRegister}
                className={getBorderStyle('provincia')}
                required
                />
          </Form.Group>
          {
            hasError('provincia') && (
              <span className='error'>
               Por favor, Ingrese su provincia.
              </span>
              )
          }
          </section>
          <section>
          <Form.Group controlId="paisId">
            <Form.Label htmlFor='pais'>Pais</Form.Label><br></br>
            <input
                 type="text"
                 id='pais'
                 name='pais'
                 placeholder="Ej: Argentina" 
                 onChange= {handleChangeRegister}
                 className={getBorderStyle('pais')}
                 required
           />
          </Form.Group>
          {
            hasError('pais') && (
              <span className='error'>
               Por favor, Ingrese su pais.
              </span>
              )
          }
          </section>
          {/* <section>
          <Form.Group controlId="telefonoId">
            <Form.Label htmlFor='telefono'>Teléfono</Form.Label><br></br>
            <input
                //  type="phone" 
                type='number'
                 id='telefono'
                 name='telefono'
                 placeholder="Ej: 0381 3- 197676"
                 maxLenght='18'
                 onChange= {handleChangeRegister}
                 className={getBorderStyle('telefono')}
                 required
                 />
          </Form.Group>
          {
            hasError('telefono') && (
              <span className='error'>
               Por favor, Ingrese su nro de telefono.
              </span>
              )
          }
          </section> */}
          <section>
          <Form.Group controlId="correoId">
            <Form.Label htmlFor='correo'>Correo</Form.Label><br></br>
            <input
                 type="email" 
                 id='correo'
                 name='correo'
                 placeholder="Ej: usuario@gmail.com" 
                 onChange= {handleChangeRegister}
                 className={getBorderStyle('correo')}
                 required
                 />
          </Form.Group>
          {
            hasError('correo') && (
              <span className='error'>
               Por favor, Ingrese su Email.
              </span>
              )
          }
          </section>
          <Button variant="outline-success text-center" disabled={!formValid} type="submit">
             Enviar
          </Button>
          </Form>
        </section>

        <br></br>
            </div>
          </div>
        </div>
      </div>


        </>
    );
}

export default Register;