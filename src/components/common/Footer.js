import React from 'react';
import{NavLink } from "react-router-dom";


const Footer = () => {
      
    return(
        <>
             <div className='bg-success text-light text-center p-2 my-2 '>
        <h6>Derechos Reservados @educRolling.com </h6>
        <div className=' text-center d-flex '>
        <NavLink
                   exact={true}
                   to='/quienesSomos'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Quiénes Somos?</NavLink>
       
        <NavLink
                   exact={true}
                   to='/terminosCondiciones'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Terminos y condiciones</NavLink>
         <NavLink
                   exact={true}
                   to='/dashboard'
                   className='nav-link text-outline-light '
                   activeClassName='active'
        > Dashboard</NavLink>
        </div>
        </div>
        </>
    );
}

export default Footer;