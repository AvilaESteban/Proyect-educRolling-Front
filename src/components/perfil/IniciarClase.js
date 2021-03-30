import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faMicrophone, faUserClock, faVideo } from '@fortawesome/free-solid-svg-icons';

const IniciarClase = () => {
    return(
        <>
            <h1 className='text-center'>Clase Virtual</h1>
            <div className='d-flex justify-content-end'>
                     <br></br>
                     <h4><FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon> 00: 00 hs</h4>
                   </div>
            <div>
            <br></br>
            <div className='d-flex justify-content-center'>
              <div className=' w-50 bg-dark text-light text-center'>
                Videollamada 
              </div>
            </div>
           
            <div className='d-flex justify-content-center'>
                     <h3 className='p-5 text-center' > <FontAwesomeIcon icon={faMicrophone} className=''></FontAwesomeIcon></h3>
                      <h3 className='p-5 text-center' > <FontAwesomeIcon icon={faComment} className=''></FontAwesomeIcon></h3>
                      <h3 className='p-5 text-center' > <FontAwesomeIcon icon={faVideo} className=''></FontAwesomeIcon></h3>
                  </div>
           
                  <div className='d-flex justify-content-center'>
                     <h2 className='p-5 text-center' >Valoraciones</h2>
                      <h3 className='p-5 text-center' >Puntúa esta clase</h3>
                      <div className='border border-success'>
                          aqui van las estrellas de puntuación
                      </div> 
                  </div>
            </div>
        </>
    );
}
 
export default IniciarClase;