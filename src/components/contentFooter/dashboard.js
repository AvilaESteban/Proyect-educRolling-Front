import React from 'react';
import Swal from 'sweetalert2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faSplotch, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Dashboard = () => {
  
  // Swal.mixin({
  //   input: 'text',
  //   confirmButtonText: 'Next &rarr;',
  //   showCancelButton: true,
  //   progressSteps: ['1', '2']
  // }).queue([
  //   {
  //     title: 'ingrese su contraseña',
  //     text: 'Por favor'
  //   },
  //   'Repita su contraseña',
  // ]).then((result) => {
  //   if (result.value === 1234 ) {
  //     Swal.fire({
  //       title: '  Bienvenido!',
  //       html: `
  //        Su contraseña es correcta.
  //       `,
  //       confirmButtonText: 'Ingresar'
  //     })
  //   }else{
  //     Swal.fire({
  //       title: ' Acceso Denegado',
  //       html: `
  //        Su contraseña es Incorrecta.
  //       `,
  //       confirmButtonText: 'Salir'
  //     })
  //   }
  // })



      //  const contraseña = prompt('Ingrese su contraseña');
      //  if(contraseña === '123456'){
      //    alert('Bienvenido');
      //  }else{
      //    alert('Acceso Denegado');
      //  }

    return(
        <>
          <Header/>
    <body className='container-dash  '>   
 <div className='row'>
 <div className='col-xl-3 col-md-12 col-sm-12'>
      <nav className="social-dash">
        <ul className='ul-dash'>
            <li className='li-dash'><a className='a-dash' href="#inicio/de/sesion">  Inicio de sesion<FontAwesomeIcon className='i' icon={faUserCheck}></FontAwesomeIcon></a></li>
            <li className='li-dash'><a className='a-dash'  href="#registro/usuario">Registro Usuario   <FontAwesomeIcon className='i' icon={faAddressBook}></FontAwesomeIcon></a></li>
            <li className='li-dash'><a className='a-dash'  href="#registro/profesor">Registro Profesor <FontAwesomeIcon className='i' icon={faAddressBook}></FontAwesomeIcon></a></li>
            <li className='li-dash'><a className='a-dash'  href="#nueva/categoria">Crear Categoria <FontAwesomeIcon className='i' icon={faAddressBook}></FontAwesomeIcon> </a> </li>
            <li className='li-dash'><a className='a-dash'  href="#registro/pago/alumno">Datos de pago de alumno <FontAwesomeIcon className='i' icon={faAddressBook}></FontAwesomeIcon> </a> </li>
            <li className='li-dash'><a className='a-dash'  href="#registro/pago/profesor">Datos de pago al profesor <FontAwesomeIcon className='i' icon={faAddressBook}></FontAwesomeIcon> </a> </li>
        </ul>
    </nav>
      </div>
      <div className='col-xl-9 col-md-12 col-sm-12  '>
        <br></br>
         <section id='inicio/de/sesion' className=' section1 p-5  table-responsive'>
           <br></br>
           <h1>Datos de inicio de sesion</h1>
          <br></br>
  <table className="table bg-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Usuario</th>
      <th scope="col">Contraseña</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th>Mark@gmail.com</th>
      <th>JacobMark23</th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th>Otto21@gmail.com</th>
      <th>Thornton123</th>
    </tr>
    <tr>
    <th scope="row">3</th>
    <th>@mdo@gmail.com</th>
    <th>fat3455mdo</th>
    </tr>
  </tbody>
</table>
</section>
{/* -------------------------------------------------------------------------------------------- */}
         <section id='registro/usuario' className='bg-light section2 p-5  table-responsive'>
           <br></br>
           <h1 className="text-center">Solicitudes Registro Usuario (alumno y profesor)</h1>
           <br></br>
      
  <table className='table '>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Apellido-Nombre</th>
      <th scope="col">DNI</th>
      <th scope="col">Provincia</th>
      <th scope="col">País</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Correo</th>
      <th scope="col">Aceptar</th>
      <th scope="col">Denegar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope='col'>Mark lucas</th>
      <th scope='col'>40234543</th>
      <th scope='col'>Tucumán</th>
      <th scope='col'>Argentina</th>
      <th scope='col'>3814234312</th>
      <th scope='col'>Mark@gmail.com</th>
      <th scope='col'><button className='btn-outline-success'>Aceptar</button></th>
      <th scope='col'><button className='btn-outline-success'>Denegar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th scope='col'>Mark lucas</th>
      <th scope='col'>40234543</th>
      <th scope='col'>Tucumán</th>
      <th scope='col'>Argentina</th>
      <th scope='col'>3814234312</th>
      <th scope='col'>Mark@gmail.com</th>
      <th scope='col'><button className='btn-outline-success'>Aceptar</button></th>
      <th scope='col'><button className='btn-outline-success'>Denegar</button></th>
    </tr>
    <tr>
      <th scope="row">3</th>
      <th scope='col'>Mark lucas</th>
      <th scope='col'>40234543</th>
      <th scope='col'>Tucumán</th>
      <th scope='col'>Argentina</th>
      <th scope='col'>3814234312</th>
      <th scope='col'>Mark@gmail.com</th>
      <th scope='col'><button className='btn-outline-success'>Aceptar</button></th>
      <th scope='col'><button className='btn-outline-success'>Denegar</button></th>
    </tr>
  </tbody>
</table>
</section>

     {/* ---------------------------------------------------------------------------------------     */}
         <section id='registro/profesor' className=' section3 p-5  table-responsive'>
           <br></br>
           <h1>Solucitud Registro Profesores (solo profesor)</h1>
           <br></br>
<table className="table bg-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Apellido-Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Foto</th>
      <th scope="col">Categoria</th>
      <th scope="col">Sub-Categoria</th>
      <th scope='col'>Otro</th>
      <th scope='col'> Arancel</th>
      <th scope='col'>Dias</th>
      <th scope='col'>Horarios</th>
      <th scope="col">Terminos</th>
      <th scope="col">Aceptar</th>
      <th scope="col">Denegar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope="col">Gomez Pedro</th>
      <th scope="col">Soy profesor de matemática con 10 años de trayectoria</th>
      <th scope="col">Foto</th>
      <th scope="col">Materia</th>
      <th scope="col">Matemática</th>
      <th scope='col'>--</th>
      <th scope='col'> $200</th>
      <th scope='col'>Lunes/Miercoles</th>
      <th scope="col">10am a 12am</th>
      <th scope='col'>tildado</th>
      <td scope='col'><button className='btn-outline-success'>Aceptar</button></td>
      <td scope='col'><button className='btn-outline-success'>Denegar</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th scope="col">Gomez Pedro</th>
      <th scope="col">Soy profesor de matemática con 10 años de trayectoria</th>
      <th scope="col">Foto</th>
      <th scope="col">Materia</th>
      <th scope="col">Matemática</th>
      <th scope='col'>--</th>
      <th scope='col'> $200</th>
      <th scope='col'>Lunes/Miercoles</th>
      <th scope="col">10am a 12am</th>
      <th scope='col'>tildado</th>
      <td scope='col'><button className='btn-outline-success'>Aceptar</button></td>
      <td scope='col'><button className='btn-outline-success'>Denegar</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <th scope="col">Gomez Pedro</th>
      <th scope="col">Soy profesor de matemática con 10 años de trayectoria</th>
      <th scope="col">Foto</th>
      <th scope="col">Materia</th>
      <th scope="col">Matemática</th>
      <th scope='col'>--</th>
      <th scope='col'> $200</th>
      <th scope='col'>Lunes/Miercoles</th>
      <th scope="col">10am a 12am</th>
      <th scope='col'>tildado</th>
      <td scope='col'><button className='btn-outline-success'>Aceptar</button></td>
      <td scope='col'><button className='btn-outline-success'>Denegar</button></td>
    </tr>
  </tbody>
</table>
</section>

{/* ---------------------------------------------------------------------------------------- */}
         <section id='nueva/categoria' className='bg-light section4 p-5'>
           <h1>Nueva Sub-categoria</h1>
         </section>
{/* ------------------------------------------------------------------------------------------------ */}
         <section id='registro/pago/alumno' className='bg-light section5 p-5'>
            <h1>Registro de pago del alumno</h1>
         </section>
 {/* ----------------------------------------------------------------------------------------------------- */}
         <section id='registro/pago/profesor' className='bg-light section6 p-5'>
           <h1>registro de pago al profesor</h1>
         </section>

      </div>
    </div>
    
</body> 
          
          {/* <Footer/> */}
        </>
    );
}

export default Dashboard;