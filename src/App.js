import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Presentacion from './components/principal/Presentacion';
import Login from './components/registration/Login';
import Register from './components/registration/Register';
import AgregarProfesores from './components/Profesores/AgregarProfesores';
import Inicio from './components/principal/Inicio';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import ListarProfesores from './components/Profesores/ListarProfesores';
import EditarProfesores from './components/Profesores/EditarProfesores';
import Error404 from './components/error404/Error';
import QuienesSomos from './components/contentFooter/QuienesSomos';
import TerminosCondiciones from './components/contentFooter/TerminosCondiciones';
import Dashboard from './components/contentFooter/dashboard';
import Matematica from './components/categories/materias/Matematica';
import Lengua from './components/categories/materias/Lengua';
import Quimica from './components/categories/materias/Quimica';
import AuxFarmacia from './components/categories/Cursos/AuxFarmacia';
import Dactilografia from './components/categories/Cursos/Dactilografia';
import RecursoHumano from './components/categories/Cursos/RecursoHumano';
import Pintura from './components/categories/talleres/Pintura';
import Tejidos from './components/categories/talleres/Tejidos';
import Pasteleria from './components/categories/talleres/Pasteleria';
import PerfilAlumno from './components/perfil/PerfilAlumno';
import PerfilProfesor from './components/perfil/PerfilProfesor';
import RecuperarClave from './components/registration/RecuperarClave';
import IniciarClase from './components/perfil/IniciarClase';



function App() {
      const [profesores, setProfesores] = useState([]);

      useEffect(() => {
            consultarApi();
      },[])

      const consultarApi = async() => {
            try{
            // hacemos un get
            const respuesta = await fetch('http://localhost:4000/profesores')
            console.log(respuesta);
            const resultado = await respuesta.json();
            console.log(resultado);
            setProfesores(resultado);
            }catch(error){
                  console.log(error)
            }
      }

  return (
    <div className="App">
       <Router>
          {/* <Header/> */}
          <Switch>
               <Route exact={true} path='/'>
                   <Presentacion/>
               </Route>
                <Route  exact={true} path='/inicio'>
                    <Inicio/>
                </Route>
                <Route  exact={true} path='/login'>
                    <Login/>
                </Route>
                <Route exact={true} path='/register'>
                     <Register/>
                 </Route>
                 <Route exact={true} path='/recuperar/clave'>
                       <RecuperarClave/>
                 </Route>
                 <Route exact={true} path='/profesor/nuevo'>
                     <AgregarProfesores/>
                 </Route>
                 <Route exact={true} path='/profesores'>
                      <ListarProfesores
                           profesores = {profesores}
                      />
                 </Route>
                 <Route exact={true} path='/profesor/editar/:id'>
                       <EditarProfesores/>
                 </Route>
                 <Route exact={true} path='/quienesSomos'>
                        <QuienesSomos/>
                 </Route>
                 <Route exact={true} path='/terminosCondiciones'>
                     <TerminosCondiciones/>
                 </Route>
                 <Route exact={true} path='/dashboard'>
                       <Dashboard
                          profesores = {profesores}
                       />
                 </Route>
                 <Route exact={true} path='/profesores/matematica'>
                       <Matematica
                          profesores = {profesores}
                       />
                 </Route>
                 <Route exact={true} path='/profesores/lengua'>
                       <Lengua/>
                 </Route>
                 <Route exact={true} path='/profesores/quimica'>
                       <Quimica/>
                 </Route>
                 <Route exact={true} path='/profesores/auxFarmacia'>
                       <AuxFarmacia/>
                 </Route>
                 <Route exact={true} path='/profesores/dactilografia'>
                       <Dactilografia/>
                 </Route>
                 <Route exact={true} path='/profesores/tejidos'>
                       <Tejidos/>
                 </Route>
                 <Route exact={true} path='/profesores/pasteleria'>
                       <Pasteleria/>
                 </Route>
                 <Route exact={true} path='/profesores/pintura'>
                       <Pintura/>
                 </Route>
                 <Route exact={true} path='/profesores/recursoHumano'>
                       <RecursoHumano/>
                 </Route>
                 <Route exact={true} path='/perfil/alumno'>
                       <PerfilAlumno/>
                 </Route>
                 <Route exact={true} path='/perfil/alumno/:id'>
                       <PerfilAlumno/>
                 </Route>
                 {/* <Route exact={true} path='/perfil/profesor'>
                       <PerfilProfesor
                            profesores = {profesores}
                       />
                 </Route> */}
                 <Route exact={true} path='/perfil/profesor/:id' render={(props) =>
                 { 
                    const parametro = props.match.params.id  //   parseInt(props.match.params.id)
                    console.log('parametro',parametro);
                    const perfilBuscado = profesores.find((item)=>
                    item.id === parametro);
                    console.log('perfil Buscado',perfilBuscado)
                    return  <PerfilProfesor
                                 profesor={perfilBuscado}
                             />
                   }
                  }>
                      
                 </Route>
                 <Route exact={true} path='/iniciar/clase'>
                       <IniciarClase/>
                 </Route>
                 <Route exact path='*' > 
                    <Error404/>
                 </Route>
          </Switch>
          {/* <Footer/> */}
       </Router>

    </div>
  );
}

export default App;
