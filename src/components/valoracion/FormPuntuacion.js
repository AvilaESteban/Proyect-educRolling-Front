import React from 'react';

const FormPuntuacion = () => {
    return(
        <>
        <h6>Formulario con  estrella de puntuación , nombre de alumno y comentario</h6>
    
           <label>Nombre Profesor</label>
           <br></br>
           <input
           className='form-group w-50'
           type='text'
           placeholder='Ej: Luna Maria'></input>
           <br></br>
            <label>Estrella de puntuación</label>
            <br></br>
           <input
           className='form-group w-50'
           type='text'
           placeholder='tildar cantidad de estrellas'></input>
           <br></br>
           <label>Nombre Alumno</label>
           <br></br>
           <input
           className='form-group w-50'
           type='text'
           placeholder='Ej: Diaz Mario'></input>
           <br></br>
           <label>Mensaje</label>
           <br></br>
           <input
           className='form-group w-50'
           type='text'
           placeholder='Breve comentario'></input>
           <br></br>
           <button>Guardar</button>
        </>
    );
}

export default FormPuntuacion;