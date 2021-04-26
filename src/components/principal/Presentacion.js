import React from  'react' ;

import { NavLink} from "react-router-dom";


const Presentacion = () => {

 
    return(

        <>

        <h1 >Presentación</h1>

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
        > Soy Profesor</NavLink>
       

        </>
    )
};

export default Presentacion;