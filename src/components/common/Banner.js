import React from 'react';
import '../../App.css'
import  Carousel  from 'react-bootstrap/Carousel';
import Img1 from '../../asset/img/dacti.jpg';
import Img2 from '../../asset/img/lengua.jpg';
import Img3 from '../../asset/img/matematica.jpg';

const Banner = () => {
    return(
        <>
             <Carousel>
                 <Carousel.Item>
                     <img src={Img1} alt='1' className='imgBanner'/>
                     <Carousel.Caption>
                       <h1>Second slide label</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img src={Img2} alt='2' className='imgBanner'/>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img src={Img3} alt='3' className='imgBanner'/>
                 </Carousel.Item>
             </Carousel>
        </>
    );
}

export default Banner;