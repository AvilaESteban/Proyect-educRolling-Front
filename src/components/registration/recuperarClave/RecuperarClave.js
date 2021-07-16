import React, {useEffect, useRef, useState} from 'react';
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import Alert from "react-bootstrap/Alert";
import { NavLink} from "react-router-dom";
import './recuperarClave.css'

const RecuperarClave = () => {
     
    const [values, setValues] = useState([]);
    const [value, setValue] = useState('');
    const [errors, setErrors] = useState([]);
    const myFormRec = useRef(null);
    const [formValid, setFormValid] = useState(false);
    const [inicio, setInicio] = useState(true);
     
    useEffect(() => {
        if(inicio){
            let datosRecClave = JSON.parse(localStorage.getItem('recuperarClave'));
            if(datosRecClave){
                setValues(datosRecClave)
            }
            setInicio(false);
        }
        localStorage.setItem('recuperarClave', JSON.stringify(values));
    },[value,values])

    const handleSubmitRec = (evt) => {
        evt.preventDefault();
        setValues({
            ...values,
            value
        })
    }


     const handleChangeRec = (evt) => {
         const input = evt.target;
 
         setValue({...value,[input.name] : input.value})
         handleErrors(input);
     }

    const handleErrors = (input) => {
        const valid = input.checkValidity();
        const datos = input.name;

        if(!valid && !errors.includes(datos)) setErrors([...errors,datos]);
        if(valid && errors.includes(datos)) setErrors(errors.filter((error) => error !== datos));

        setFormValid(myFormRec.current.checkValidity());
    }
        const hasError = (datos) => errors.includes(datos)

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
                icon={faUnlockAlt}>
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
              <h1 className='text-light font-italic text-center'>Recuperar Clave</h1>
            </div>
            <div className="item _transparent shadow back border d-flex align-items-center justify-content-center">
                <section className='container text-center'>
              <Form  onSubmit={handleSubmitRec} id='myFormRec' ref={myFormRec}  className='formValidRec' autoComplete='off'>
                    <h1 className='text-light font-italic ' > Recuperar Clave </h1>
                      <section> 
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label htmlFor='userEmail'>Email</Form.Label><br></br>
                            <input
                                type="email"
                                placeholder="Ingrese email"
                                id="userEmail"
                                name="userEmail"
                                minLength='8'
                                maxLenght='25'
                                onChange={handleChangeRec}
                                className={getBorderStyle('userEmail')}
                                required
                             />
                        </Form.Group>
                        {
                            hasError('userEmail') && (
                            <span className='error'> Este campo es requerido. Ingrese su email.</span>
                            )
                        }
                     </section>
                     <section>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label htmlFor='userPassword'>Contraseña</Form.Label><br></br>
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                id="userPassword"
                                name="userPassword"
                                minLength='8'
                                onChange={handleChangeRec}
                                className={getBorderStyle('userPassword')}
                                required
                            />
                        </Form.Group>
                        {
                            hasError('userPassword') && (
                            <span className='error'> Este campo es requerido, max 8 caracteres.</span>
                            )
                        }
                        </section>
                        <section>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label htmlFor='confirmPassword'>Confirmar Contraseña</Form.Label><br></br>
                            <input
                                type="password"
                                placeholder="Repita su contraseña"
                                id="confirmPassword"
                                name="confirmPassword"
                                minLength='8'
                                onChange={handleChangeRec}
                                className={getBorderStyle('confirmPassword')}
                              />
                        </Form.Group>
                        {
                            hasError('confirmPassword') && (
                            <span className='error'> Escriba nuevamente su contraseña.</span>
                            )
                        }
                        </section>
                        <Button type='submit' variant="outline-success" className="my-3" disabled={!formValid}>
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
         
           </section>
           <br></br>
            </div>
          </div>
        </div>
        </div>
    </>
    )
}

export default RecuperarClave;


