import React from 'react';
import { NavLink} from "react-router-dom";


const Error404 = () => {
    return(
        <>
           <h1>Error 404</h1>
           <NavLink
                 exact={true}
                 to='/inicio'
                 className='nav-link text-outline-light '
                 activeClassName='active'
       >
       volver a Pagina Principal?
       </NavLink>
        </>
    );
}

export default Error404;