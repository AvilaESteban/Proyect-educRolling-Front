import React from 'react';
import {NavLink}  from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';

const ItemProfesores = (props) => {
    return(
        <>
           
                      <div className="profile-cart text-center  my-4 shadow">
                      <div className="images">
                       <h1 className='bg-dark text-light'>{props.profesor.apellidoNombre}</h1>  
                       {/* Aqui  tengo que hacer que se pueda ver en pantalla la imagen */}
                       <img src={props.profesor.foto} alt='1' className='imgProf'/>
                        <h6 className='text-center'>Profesor de:
                        {/* aqui tengo que hacer una condicional ternaria dependiendo de la subcategoria puede ser materia, curso ,taller u otro*/}
                    
                          {/*(props.profesor.categoria === materia) ? props.profesor.subCategoriaMaterias :
                          (props.profesor.categoria === cursos) ? props.profesor.subCategoriaCursos :
                          (props.profesor.categoria === talleres) ? props.profesor.subCategoriaTalleres :
                          (props.profesor.subCategoriaMateria || props.profesor.subCategoriaCursos || props.profesor.subCategoriaTalleres === otro) ?  props.profesor.otro */}
                    
                        {props.profesor.subCategoriaMaterias}</h6>
                        {props.profesor.subCategoriaCursos}
                       { props.profesor.subCategoriaTalleres}
                       { props.profesor.otro}
                           <p > 
                                 <ul >
                                  <li ><b>categoria:</b>{props.profesor.categoria} </li>
                                  <li><b>arancel 30min:</b>$ {props.profesor.arancel}</li>
                                  <li><b>Dias:</b> {props.profesor.diasDisponibles} </li>
                                  <li><b>Horarios:</b> {props.profesor.horariosDisponibles} </li>
                                  <li>Estrellas puntuación </li>
                                  </ul>
                           </p>
                           <br></br>
                             <div className="social-area">
                                   <NavLink
                                        exact={true}
                                         to="/perfil/profesor/:id"
                                         className="nav-link"
                                         activeClassName="active"
                                        >
                                       <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    </NavLink>
                             </div>
                          </div>
                          <br></br>
                      </div>
                     
        </>
    );
}

export default ItemProfesores;