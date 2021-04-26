import React from 'react';
import { NavLink} from "react-router-dom";

const TerminosCondiciones = () => {
    return(
        <> 
    
           <h1>Terminos y condiciones</h1>




           <NavLink
                   exact={true}
                   to='/profesor/nuevo'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Regresar al Formulario</NavLink>
        </>
    );
}


export default TerminosCondiciones;