import React, { useEffect, useState } from 'react';
import {NavLink}  from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faSplotch } from '@fortawesome/free-solid-svg-icons';
import Img from '../../../asset/img/Prof1.jpg'
import ItemProfesores from '../../Profesores/itemProfesores';

const Matematica = (props) => {
      
      const matematica = props.profesores.filter((profesor) => {
         return profesor.subCategoriaMaterias === 'matematica';
       });
      //  const mostrarProfMatematica = matematica.slice(0, 9)
       console.log('respuesta de profesores de matematica', matematica);
     
    return(
        <>
           <h1 className="p-4 text-center"> Lista de Profesores de Matemática</h1>
           <h2 className="p-4  text-center">Profesores disponibles ahora</h2>
           <div className='d-flex justify-content-around text-align-center flex-wrap my-3'>
              {
                 matematica.map(item =>
                  <div className="profile-cart  my-4 shadow" key={item.id}>
                  <div className="images">
                   <h1 className='bg-dark text-light'>{item.apellidoNombre}</h1>  
                   
                   <img src={item.foto} alt='1' className='imgProf'/>
                    <h6 className='text-center'>Profesor de:
                    {/* aqui tengo que hacer una condicional ternaria dependiendo de la subcategoria puede ser materia, curso ,taller u otro*/}
                    {item.subCategoriaMaterias}</h6>
                       <p> 
                             <ul>
                              <li ><b>categoria:</b>{item.categoria} </li>
                              <li><b>arancel 30min:</b>$ {item.arancel}</li>
                              <li><b>Dias:</b> {item.diasDisponibles} </li>
                              <li><b>Horarios:</b> {item.horariosDisponibles} </li>
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
                  )
              }
           </div>
           
          



     {/* <div className="contenedor"> */}

         {/* Aqui hacer un .map para recorrer las cards, no va todo esos  códigos */}
	  	{/* <div className="contenedor-cards text-center justify-content-around">            
		    <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
            <div className="contenedor-card-item">
		      	  <div className="contenedor-card-item-wrapper">
                       <img src={Img} alt='1' />
		        	    <div className="contenedor-info">
		          		    <div className="info">
		            	    	<span className="titulo">Nombre del profesor</span>
		          		    </div>
		          	    	<div className="fondo"></div>
		        	    </div>
		        	</div>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSplotch}></FontAwesomeIcon>
                    <br></br>
                    <NavLink
                                 exact={true}
                                 to="/perfil/profesor"
                                 className="nav-link btn btn-outline-success badge"
                                 activeClassName="active"
                                >
                                  {" "}
                               Ver  Perfil
                            </NavLink>
		    </div>
      </div>
     </div> */}
     
 
               <div className='text-center'> 
               <button className='btn btn-outline-success ' >Siguiente</button>
               </div> 
        </>
    );
}

export default Matematica;
   