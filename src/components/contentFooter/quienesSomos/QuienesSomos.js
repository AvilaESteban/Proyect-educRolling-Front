import React from 'react';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import './QuienesSomos.css'

const QuienesSomos = () => {
    return(
        <>
            <Header/>
             <div className='body-qs '>
                 <h1 className='p-5 my-5 text-light text-center'>Quienes Somos?</h1>
            <section className="card-list p-2">
      <article className="card-qs">
        <header className="card-header">
          <h6>Quienes Somos?</h6>
          <br></br>
          <h3>Somos una plataforma 100% virtual, donde podrás enseñar o prepararte desde  la comodidad de tu casa o desde donde te encuentres.!</h3>
        </header>
        <div className="card-author">
          <a href="@" className="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix">logo</div>
            educRolling
          </div>
        </div>
      </article>
      <article className="card-qs">
        <header className="card-header">
          <h6>Te Gustaria Enseñar?</h6>
          <br></br>
          <h3>Si sos profesor, estás invitado a formar parte de nuestra plataforma y podrás enseñar en tus dias y horarios disponibles.</h3>
        </header>
        <div className="card-author">
          <a href="@" class="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix">logo</div>
            educRolling
          </div>
        </div>
      </article>
      <article className="card-qs">
        <header className="card-header">
          <h6>No sos docentes y te gustaria enseñar un taller o curso?</h6>
          <br></br>
          <h3>Si tenes alguna habilidad y te sentís capacitado para transmitir tus conocimientos virtualmente, también podés registrarte en nuestra plataforma. </h3>
        </header>
        <div className="card-author">
          <a href="@" class="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix">logo</div>
            educRolling
          </div>
        </div>
      </article>
      <article className="card-qs">
        <header className="card-header">
          <h6>Sos alumno?</h6>
          <h3>Podes registrarte y a partir de ese momento tendrás la oportunidad de encontrar profesores disponibles en cualquier horario para vos.</h3>
        </header>
        <div className="card-author">
          <a href="@" class="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix">logo</div>
            educRolling
          </div>
        </div>
      </article>
      <article className="card-qs">
        <header className="card-header">
          <h6>En nuestra plataforma encontrarás...</h6>
          <h3>Profesores a tu medida en tus dias y horarios disponibles, también podrás optar por cursos, talleres o materias</h3>
        </header>
        <div className="card-author">
          <a href="@" className="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix">logo</div>
            educRolling
          </div>
        </div>
      </article>
      <article className="card-qs">
        <header className="card-header">
          <h6>Requisitos?</h6>
          <br></br>
          <h3>En nuestra pagina, podrás encontrar los términos y condiciones enumerados, con la transparencia que mereces.</h3>
        </header>
        <div className="card-author">
          <a href="@" class="author-avatar">
            <img
              src="../../img/Small-Home-Office-feature-Rachel-Simpson.jpg"
              alt=""
            />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="author-name">
            <div className="author-name-prefix"> logo</div>
            educRolling
          </div>
        </div>
      </article>
    </section>  

    <Footer/>  
    </div>
    
        </>
    );
}

export default QuienesSomos;