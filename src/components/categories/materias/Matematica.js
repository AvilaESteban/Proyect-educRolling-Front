import React from 'react';
import {NavLink}  from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faSplotch } from '@fortawesome/free-solid-svg-icons';
import Img from '../../../asset/img/Prof1.jpg'

const Matematica = () => {
    return(
        <>
           <h1 className="p-4 text-center"> Lista de Profesores</h1>
           <h1>Matematica</h1>
     <h2 className="p-4 text-center">Profesores disponibles ahora</h2>
     <div className="contenedor">

         {/* Aqui hacer un .map para recorrer las cards, no va todo esos  códigos */}
	  	<div className="contenedor-cards text-center justify-content-around">            
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
     </div>
     
 
               <div className='text-center'> 
               <button className='btn btn-outline-success ' >Siguiente</button>
               </div> 
        </>
    );
}

export default Matematica;
   