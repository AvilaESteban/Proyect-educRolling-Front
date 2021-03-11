import React from 'react';
import { NavLink} from "react-router-dom";

const RecuperarClave = () => {
    return(
        <>
            <h1>Recuperar Clave</h1>

            <br></br>

            <NavLink
                   exact={true}
                   to='/login'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        >Volver a Iniciar Sesion</NavLink>
         
        </>
    )
};

export default RecuperarClave;
