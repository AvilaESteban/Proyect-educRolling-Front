import React, { useEffect, useRef, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {NavLink } from "react-router-dom";
import './Login.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Img from '../../../asset/img/dacti.jpg'


const  Login = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const myForm = useRef(null);
  const [inicio, setInicio] = useState(true);
    
  useEffect(() => {
      if(inicio){
        let datosLogin = JSON.parse(localStorage.getItem("listaLogin"));
        if(datosLogin){
          setValues(datosLogin)
        }
        setInicio(false)
      }
      localStorage.setItem('listaLogin',JSON.stringify(values))
 },[ value, values ])

  const handleSubmit = (evt) => {
    evt.preventDefault();
     setValues({
       ...values,
       value
     })
  }


  const handleChange = (evt) => {
    const input = evt.target;
     
    setValue( {...value,[input.name]: input.value})
    handleErrors(input);
  }

   const handleErrors = (input) => {
     const isValid = input.checkValidity();
     const inputName = input.name;

     if(!isValid && !errors.includes(inputName)) setErrors([...errors, inputName])
     if(isValid && errors.includes(inputName)) setErrors(errors.filter((error)=> error !== inputName))

     setIsFormValid(myForm.current.checkValidity());
   }
   const hasError = (inputName) => errors.includes(inputName);

   const getBorderStyle = (inputName) => {
     if(Object.keys(values).includes(inputName) && !hasError(inputName))
     return 'valid'
     if(Object.keys(values).includes(inputName) && hasError(inputName))
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
              <FontAwesomeIcon className=' display-2 text-center btn-outline-light' 
                 icon={faAddressBook}>
             </FontAwesomeIcon>
            </div>
          </div>
        </div>

        <div className="box_3d m-1">
          <div className="item_outer">
            <div className="item _transparent shadow front border">
              <h1 className='text-light font-italic '>Iniciar Sesion</h1>
            </div>
            <div className="item _transparent shadow back border d-flex align-items-center justify-content-center">
              {/* --------------------------------- */}
              <section className='container text-center'>
            <Form 
               onSubmit={handleSubmit}
               className='formValid'
               autocomplete='off'
               ref={myForm}
               id='myForm'
               >
            <h1 className='text-light font-italic ' > Iniciar Sesion</h1>
           <section>
            <Form.Group controlId="usuarioId" >
            <Form.Label htmlFor='userName'>Usuario</Form.Label><br></br>
            <input 
                type="email" 
                placeholder= "Ej: usuario@gmail.com"
                onChange={handleChange}
                id='userName'
                name='userName'
                minLength='3'
                maxLength='25'
                className={getBorderStyle('userName')}
                required
               />
          </Form.Group>
              {
                 hasError('userName') && (
                  <span className='error'>
                    Este campo es requerido. Ingrese su email.
                  </span>
                )
               }
          </section>
          <section>
          <Form.Group controlId="contraseñaId">
            <Form.Label htmlFor='userPassw'>Contraseña</Form.Label><br></br>
            <input 
               type="password"
               placeholder="Ej: uuario1234"
               onChange={handleChange}
               id='userPassw'
               name='userPassw'
               maxLenght='8'
               className={getBorderStyle('userPassw')}
               required
               />  
          </Form.Group>
             {
                 hasError('userPassw') && (
                   <span className='error'>
                     Debe tener al menos 8 caracteres.
                   </span>
                 )
               }
          </section>
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit" disabled={!isFormValid}  >
            Ingresar
          </Button>
          <NavLink
                   exact={true}
                   to='/register'
                   className='nav-link text-outline-light text-center'
                   activeClassName='active'
        >No tienes cuenta? Regístrate</NavLink>
        <NavLink
                   exact={true}
                   to='/recuperar/clave'
                   className='nav-link text-outline-light text-center '
                   activeClassName='active'
        > Recuperar Contraseña</NavLink>
            </Form>
      </section>
         
        <br></br>
            </div>
          </div>
        </div>
      </div>
  {/* ---------------------------------- */}

{/* datos para conexion con mongodb
nombre de usuario: educRolling
contraseña: francesca21
  1OzMIAiJWN8iDUSx
  mongodb+srv://educRolling:<password>@educrolling.zg4ir.mongodb.net/test
  mongodb+srv://educRolling:1OzMIAiJWN8iDUSx@educrolling.zg4ir.mongodb.net/test */}













{/* -------------------------------------------- */}
{/* <div className='container d-flex justify-content-center p-3 my-5  '>
  <div className='bg-  align-item-center'> */}
   
    
  {/* </div>
  <div className=''>
<section className='container text-center'>
            <Form 
               onSubmit={handleSubmit}
               className='formValid'
               autocomplete='off'
               ref={myForm}
               id='myForm'
               >
            <h1 className='my-4 text-dark text-success' > Iniciar Sesion</h1>
           <section>
            <Form.Group controlId="usuarioId" >
            <Form.Label htmlFor='userName'>Usuario</Form.Label><br></br>
            <input 
                type="email" 
                placeholder= "Ej: usuario@gmail.com"
                onChange={handleChange}
                id='userName'
                name='userName'
                minLength='8'
                maxLength='25'
                className={getBorderStyle('userName')}
                required
               />
          </Form.Group>
              {
                 hasError('userName') && (
                  <span className='error'>
                    Este campo es requerido. Ingrese su email.
                  </span>
                )
               }
          </section>
          <section>
          <Form.Group controlId="contraseñaId">
            <Form.Label htmlFor='userPassw'>Contraseña</Form.Label><br></br>
            <input 
               type="text"
               placeholder="Ej: uuario1234"
               onChange={handleChange}
               id='userPassw'
               name='userPassw'
               maxLenght='8'
               className={getBorderStyle('userPassw')}
               required
               />  
          </Form.Group>
             {
                 hasError('userPassw') && (
                   <span className='error'>
                     Debe tener al menos 8 caracteres.
                   </span>
                 )
               }
          </section>
          <Button variant="outline-success text-center" className='w-50 my-4' type="submit" disabled={!isFormValid}  >
            Ingresar
          </Button>

            </Form>
      </section>
         
        <br></br>
           <NavLink
                   exact={true}
                   to='/recuperar/clave'
                   className='nav-link text-outline-light text-center '
                   activeClassName='active'
        > Recuperar Contraseña</NavLink>

            <br></br>
           <NavLink
                   exact={true}
                   to='/register'
                   className='nav-link text-outline-light text-center'
                   activeClassName='active'
        >No tienes cuenta? Regístrate</NavLink>

          </div>
         </div> */}
        </>
     );
}

export default Login;