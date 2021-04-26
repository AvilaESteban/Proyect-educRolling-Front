import React from 'react';
import ItemProfesores from './itemProfesores';

const ListarProfesores = (props) => {
    return(
        <>
         <div className='container'>
                        <h1 className='p-5 my-2'>Listado de profesores</h1>
                      <div className='d-flex justify-content-around text-align-center flex-wrap  '>
                        {
                          props.profesores.map((profesor) => (
                             <ItemProfesores
                                  key={profesor.id}
                                  profesor= {profesor}
                             />
                          ))
                        } 
                      </div>
          </div>
        </>
    );
}

export default ListarProfesores;