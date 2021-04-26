import React, { useEffect, useState }  from 'react';
import Swal from 'sweetalert2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faHandHoldingUsd, faUserCheck, faVideo} from '@fortawesome/free-solid-svg-icons';
import Footer from '../common/Footer';
import Header from '../common/Header';


const Dashboard = (props) => {

  // -------------------------------------------------------------------------------------------------
  // condicional swweetalert
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
  //   if (result.value === 12345 ) {
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

// ------------------------------------------------------------------------------------------------------
//   condicional ternaria
// const contraseñaValida = 1234;
//   const contraseña = prompt('Ingrese su contraseña');
//   (contraseña === contraseñaValida)? alert('Bienvenido') :  alert('Acceso Denegado');

  // ---------------------------------------------------------------------------------------------------
    //  condicional  if
      //  const contraseña = prompt('Ingrese su contraseña');
      //  if(contraseña === '1234'){
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
            <li className='li-dash'><a className='a-dash'  href="#registro/pago/alumno">Registro pago /alumno <FontAwesomeIcon className='i' icon={faHandHoldingUsd}></FontAwesomeIcon> </a> </li>
            <li className='li-dash'><a className='a-dash'  href="#registro/pago/profesor">Registro pago /profesor <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon></a> </li>
            <li className='li-dash'><a className='a-dash'  href="#registro/clases/grabadas">Registro clases grabadas  <FontAwesomeIcon icon={faVideo} ></FontAwesomeIcon></a> </li>
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
    <tr className='bg-dark text-light'>
      <th scope="col">#</th>
      <th scope="col">Apellido-Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Foto</th>
      <th scope="col">Categoria</th>
      <th scope="col">Sub-Categoria-Materia</th>
      <th scope="col">Sub-Categoria-Cursos</th>
      <th scope="col">Sub-Categoria-Taller</th>
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
    {
       props.profesores.map(item => 
        <tr >
        <th scope="row" key={item.id}> {item.id}</th>
        <th scope="col">{item.apellidoNombre}</th>
        <th scope="col">{item.descripcion}</th>
        <th scope="col">{item.foto}</th>
        <th scope="col">{item.categoria}</th>
        <th scope="col">{item.subCategoriaMaterias}</th>
        <th scope="col">{item.subCategoriaCursos}</th>
        <th scope="col">{item.subCategoriaTalleres}</th>
        <th scope='col'>{item.otro}</th>
        <th scope='col'> {item.arancel}</th>
        <th scope='col'>{item.diasDisponibles}</th>
        <th scope="col">{item.horariosDisponibles}</th>
        <th scope='col'>{item.aceptarTerminos}</th>
        <td scope='col'><button className='btn-outline-success'>Aceptar</button></td>
        <td scope='col'><button className='btn-outline-success'>Denegar</button></td>
      </tr>
        )
    }
 </tbody>
</table>
</section>

{/* ---------------------------------------------------------------------------------------- */}
         <section id='nueva/categoria' className='bg-light section4 p-5'>
           <h1>Nueva Sub-categoria</h1>
         </section>
{/* ------------------------------------------------------------------------------------------------ */}
         <section id='registro/pago/alumno' className='section3 p-5  table-responsive'>
            <h1>Registro de pago del alumno</h1>
            <h4 className='text-center'>Detalles del comprador y de la tarjeta</h4>
            <table className='table bg-light'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Tipo de documento</th>
      <th scope="col">Nro de documento</th>
      <th scope="col">Titular tarjeta</th>
      <th scope="col">Fecha vencimiento</th>
      <th scope="col">Nro tarjeta</th>
      <th scope="col">Código seguridad</th>
      <th scope="col">Banco emisor</th>
      <th scope='col'>Monto</th>
      <th scope="col">Cuotas</th>
      <th scope="col">Eliminar Datos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope="col">maria21@gmail.com</th>
      <th scope="col">DNI</th>
      <th scope="col">29875367</th>
      <th scope="col">Maria Torres</th>
      <th scope="col">20-01-2029</th>
      <th scope="col">333-454376633-273</th>
      <th scope="col">kd!d123/hj$%12hl!</th>
      <th scope="col">Banco Santander</th>
      <th scope='col'>$10000</th>
      <th scope="col">3 cuotas</th>
      <th scope="col"><button className='btn btn-outline-success'>Eliminar Datos</button></th>
    </tr>
    <tr>
    <th scope="row">2</th>
      <th scope="col">maria21@gmail.com</th>
      <th scope="col">DNI</th>
      <th scope="col">29875367</th>
      <th scope="col">Maria Torres</th>
      <th scope="col">20-01-2029</th>
      <th scope="col">333-454376633-273</th>
      <th scope="col">kd!d123/hj$%12hl!</th>
      <th scope="col">Banco Santander</th>
      <th scope='col'>$10000</th>
      <th scope="col">3 cuotas</th>
      <th scope="col"><button className='btn btn-outline-success'>Eliminar Datos</button></th>
    </tr>
    <tr>
    <th scope="row">3</th>
      <th scope="col">maria21@gmail.com</th>
      <th scope="col">DNI</th>
      <th scope="col">29875367</th>
      <th scope="col">Maria Torres</th>
      <th scope="col">20-01-2029</th>
      <th scope="col">333-454376633-273</th>
      <th scope="col">kd!d123/hj$%12hl!</th>
      <th scope="col">Banco Santander</th>
      <th scope='col'>$10000</th>
      <th scope="col">3 cuotas</th>
      <th scope="col"><button className='btn btn-outline-success'>Eliminar Datos</button></th>
    </tr>
  </tbody>
</table>
         </section>
 {/* ----------------------------------------------------------------------------------------------------- */}
         <section id='registro/pago/profesor' className='bg-light section6 p-5'>
           <h1>registro de pago al profesor</h1>
         </section>
       
{/* -------------------------------------------------------------------------------------------- */}
         <section id='registro/clases/grabadas' className=' section3 p-5  table-responsive'>
           <br></br>
           <h1 className="text-center">Registro de clases grabadas</h1>
           <br></br>
      
  <table className='table bg-light'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Link</th>
      <th scope="col">Duración</th>
      <th scope="col">Profesor</th>
      <th scope="col">Alumno</th>
      <th scope="col">Eliminar datos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope='col'>04-04-21</th>
      <th scope='col'>http://jakdsfjklasjfklsajflksdjsdjlk</th>
      <th scope='col'>30 minutos</th>
      <th scope='col'>Julio Diaz</th>
      <th scope='col'>Maria Martinez</th>
      <th scope='col'><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th scope='col'>04-04-21</th>
      <th scope='col'>http://jakdsfjklasjfklsajflksdjsdjlk</th>
      <th scope='col'>90 minutos</th>
      <th scope='col'>Florencia Hills</th>
      <th scope='col'>Sofia Quinteros</th>
      <th scope='col'><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
    <tr>
      <th scope="row">3</th>
      <th scope='col'>04-04-21</th>
      <th scope='col'>http://jakdsfjklasjfklsajflksdjsdjlk</th>
      <th scope='col'>60 minutos</th>
      <th scope='col'>Leo Dip</th>
      <th scope='col'>Mateo Prats</th>
      <th scope='col'><button className='btn btn-outline-success'>Eliminar</button></th>
    </tr>
  </tbody>
</table>
          </section>

      </div>
    </div>
    
</body> 
          
          {/* <Footer/> */}
        </>
    );
}

export default Dashboard;