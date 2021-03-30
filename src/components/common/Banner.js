import React from 'react';
import '../../App.css'
import  Carousel  from 'react-bootstrap/Carousel';
import Img1 from '../../asset/img/dacti.jpg';
import Img2 from '../../asset/img/lengua.jpg';
import Img3 from '../../asset/img/matematica.jpg';

const Banner = () => {
    return(
        <>
        <div class="containerBanner" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 className="p-4 text-center"  data-aos="fade-up-right" data-aos-duration="1000"> Encontrarás</h1>
  <div class="cardBanner">
    <div class="Box" >
      <img src={Img1} alt='1' className='imgBanner'/>
    </div>
    <div class="details p-5 justify">
      <h2>Una variedad de Cursos</h2>
      <span> Si sos profesional o estás capacitado, podés registrarte en nuestra página y comenzar a enseñar virtualmente, los dias y horarios en que tu puedas..</span>
    </div>
  </div>
  <div class="cardBanner">
    <div class="Box">
    <img src={Img2} alt='2' className='imgBanner'/>
    </div>
    <div class="details p-5 justify">
      <h2>Una variedad de Talleres</h2>
      <span>Si tenés alguna habilidad como realizar pinturas,artesanias, carpinteria ,tejidos o costura,  porcelana en frio, entre otros, y querés compartir tus conocimientos, tambien podés registrarte y comenzar a enseñar en tus dias y horarios disponibles . </span>
    </div>
  </div>
  <div class="cardBanner">
    <div class="Box">
      <img src={Img3} alt='3' className='imgBanner'/>
    </div>
    <div class="details p-5 justify">
      <h2>Una variedad de Materias</h2>
      <span>Si sos profesor de cualquier asignatura, podés impartir cursos o dar clases personalizadas a traves de esta plataforma, solo tenés que registrarte y estarás listo para enseñar en tus dias y horarios  disponibles.</span>
    </div>
  </div>
</div>
  
             {/* <Carousel>
                 <Carousel.Item>
                     <img src={Img1} alt='1' className='imgBanner'/>
                     <Carousel.Caption>
                       <h1>Second slide label</h1>
                       <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img src={Img2} alt='2' className='imgBanner'/>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img src={Img3} alt='3' className='imgBanner'/>
                 </Carousel.Item>
             </Carousel> */}
        </>
    );
}

export default Banner;