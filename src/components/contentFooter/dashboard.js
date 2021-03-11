import React from 'react';
import Swal from 'sweetalert2'


const Dashboard = () => {
  
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2']
  }).queue([
    {
      title: 'ingrese su contraseña',
      text: 'Por favor'
    },
    'Repita su contraseña',
  ]).then((result) => {
    if (result.value === 1234 ) {
      Swal.fire({
        title: '  Bienvenido!',
        html: `
         Su contraseña es correcta.
        `,
        confirmButtonText: 'Ingresar'
      })
    }else{
      Swal.fire({
        title: ' Acceso Denegado',
        html: `
         Su contraseña es Incorrecta.
        `,
        confirmButtonText: 'Salir'
      })
    }
  })

      //  const contraseña = prompt('Ingrese su contraseña');
       
      //  if(contraseña === '123456'){
      //    alert('Bienvenido');
      //  }else{
      //    alert('Acceso Denegado');
      //  }

    return(
        <>
        

          <h1>Dashboard - Admin</h1>
          
        </>
    );
}

export default Dashboard;