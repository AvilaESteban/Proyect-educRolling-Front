import React from  'react';
import { Card, Jumbotron } from 'react-bootstrap';

const CardInformativas = () => {
    return(
        <>
            
              <Jumbotron>
         <div className=" text-center">
        <h2 className="p-4"> Info </h2>
      </div>
      <div className=" p-2 my-2 text center">
        <div className="row justify-content-center  ">
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2  card ">
            <h4>Podés prepararte en las <b>Materias</b> que necesites</h4>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2 card">
            <h4>Podés realizar el <b>Curso</b> que deseas</h4>
          </Card>
          <Card className="col-xl-3 col-md-6 col-sm-12 p-2 card">
            <h4>Podés tomar los <b>Talleres</b> de capacitación mas buscados </h4>
          </Card>
        </div>
      </div>
         </Jumbotron>
        </>
    );
}

export default CardInformativas;