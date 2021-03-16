import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Img from '../../asset/img/alumno.jpg'

const PerfilAlumno = () => {
    return(
        <>
          <Header/>
             <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                      <br></br>
                       <img src={Img} alt='1' className='rounded-circle w-75'/>
                    </div>
                    <div className='col-md-8 col-sm-12 text-aling-start'>
                        <h1>Mi Cuenta</h1>
                        <br></br>
                          <h4>Maria de los Angeles Pérez Diaz</h4>
                          <p>MariaDLAngeles@gmail.com</p>
                    </div>
                </div>
             </div>



          <Footer/>
        </>
    );
}

export default PerfilAlumno;