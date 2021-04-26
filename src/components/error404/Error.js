import React from 'react';
import { NavLink} from "react-router-dom";


const Error404 = () => {
    return(

        <>
    <body className='body-404'>
	<div className="anaDiv">
		<div className="icerik">
            <p id="baslik" className='text-center '><h1>No encontramos tu búsqueda.!</h1></p>
          <h2 className='p-2'>Error 404</h2>
        <a target="blank" href="mailto:devrim192demir@gmail.com"><img draggable="false" class="ikon" id="em" src=""/>  <NavLink
                 exact={true}
                 to='/inicio'
                 className='nav-link text-outline-light '
                 activeClassName='active'
       >
       volver a Pagina Principal?
       </NavLink> </a>
		</div>
		<div class="kapak"></div>
	</div>
    </body>
           
        </>
    );
}

export default Error404;