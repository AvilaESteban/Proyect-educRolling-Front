import React from  'react' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { NavLink} from "react-router-dom";
import './Presentacion.css';

const Presentacion = () => {

 
    return(
        <>
        
        <body className='bodyParallax'>
	<div class="wrapper">
		<div className="mainParallax">
			<section className="contentParallax">
      <div className="texto text-center display-1 font-italic  ">
                 <h1>Bienvenidos.!!</h1>
                 <h1>En nuestra pagina podrás aprender o enseñar desde tu casa 100% virtual.!!  </h1>
					</div>
					<div className="parallax img-uno" id="m">
						<div className="texto-interior">
            <body className="body-present ">
        <div className="projects-card-present project-one-present">
		<div className="project-info-container-present text-center">
			<h3 className="project-title-present"> Empieza Ya </h3>
			<span className="project-load-bar-present" ></span>
			<p className="project-short-desc-present "></p> 
		</div>
  </div>
</body>
						</div>
					</div> 
              
					<div className="texto text-center font-italic  ">
          <h1 className='p-2'> Si quieres aprender algun taller, curso o materias </h1>
          <h1>Buscar Aqui</h1>
        <h4 className='text-light text-center'>
           <FontAwesomeIcon className='display-2 text-center btn-outline-success' icon={faArrowAltCircleDown}></FontAwesomeIcon>
      </h4>
      {/* --------------------------------------- */}
      <div className="menu d-flex justify-content-center">
		<input className="arama" placeholder="Ej: Matematica" type="text"></input>
          <NavLink
                   exact={true}
                   to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
            > Enviar</NavLink>
	</div>
    {/* ---------------------------------------- */}

					</div>	
         
					<div className="parallax img-dos" id="p" >
						<div className="texto-interior">
							 
                  
			</div>
					</div >
          <div className="texto text-center font-italic">
           <h1 className='p-2'> Si quieres enseñar, solo registrate, sin requisitos.!! </h1>
           <h1>Asi de simple</h1>
           {/* <h1>Dar clic en el siguiente link</h1> */}
           <div className='text-center'>
           <FontAwesomeIcon className='display-2 text-center btn-outline-success' icon={faArrowAltCircleDown}></FontAwesomeIcon>
           <NavLink
                   exact={true}
                   to='/profesor/nuevo'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Soy Profesor</NavLink>
      </div>
      </div>
    {/* ------------------------------------------- */}

			
				<div class="parallax img-tres" id="c">
					<div class="texto-interior">
         
						{/* <h2>Aqui Se puede escribir algo o no..</h2> */}
					</div>
				</div>  
        <div className="texto text-center font-italic">
            <h1>Si quieres saber más sobre nosotros, mira el siguiente link</h1>
            <div className='text-center'>
           <FontAwesomeIcon className='display-2 text-center btn-outline-success' icon={faArrowAltCircleDown}></FontAwesomeIcon>
           <NavLink
                 exact={true}
                 to='/quienesSomos'
                 className='nav-link text-outline-light '
                 activeClassName='active'
             > Quiénes Somos?   </NavLink>
      </div>
          
        </div>
            {/* <MasSolicitadas/> */}
			</section>

		</div>
	</div> 
</body>

      



        {/* <h1 >Presentación</h1>

        <label >Que es lo que te gustaria aprender ?</label> 
        <br></br>
        <input
           className='form-group w-50'
           type='text'
           placeholder='Escribe aqui'
         ></input>
         
         <NavLink
                   exact={true}
                   to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Buscar</NavLink>
         

         <hr></hr>
        <NavLink
                   exact={true}
                   to='/profesor/nuevo'
                //    to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Soy Profesor</NavLink> */}
       

        </>
    )
};

export default Presentacion;