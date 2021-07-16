import React from 'react';
// import '../../App.css'
import Banner from '../common/Banner';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import CardInformativas from '../../principal/cardInfo/CardInfomativas';
import MasSolicitadas from './MasSolicitadas';
import DisponibleAhora from './DisponibleAhora';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import {animateScroll as scroll} from 'react-scroll';
import CardInformativas from './cardInfo/CardInfomativas';

const Inicio = () => {

	const onClickUp = () => {
		scroll.scrollToTop();
	}
   
    return(
        <>
        <Header/>
        <br></br>
 <body className='bodyParallax'>
	<div class="wrapper">
		<div className="mainParallax">
			<section className="contentParallax">
              <CardInformativas/>
			 
					<div className="parallax img-uno" id="m">
						<div className="texto-interior">
							<h2 id="m">Aqui Se puede escribir algo o no.</h2>
						</div>
					</div> 
              
					<div className="texto">
               <DisponibleAhora/>
               
					</div>	
					<div className="parallax img-dos" id="p" >
						<div className="texto-interior">
							<h2> Aqui Se puede escribir algo o no.</h2>	
                    
						</div>
					</div>
               <Banner/>
					<div className="texto">
             
					
					</div>
				<div class="parallax img-tres" id="c">
					<div class="texto-interior">
						<h2>Aqui Se puede escribir algo o no..</h2>
					</div>
				</div>  
            <MasSolicitadas/>
			</section>

		</div>
	</div> 
</body>
<button onClick={onClickUp}>  <FontAwesomeIcon  icon={faAngleDoubleUp}></FontAwesomeIcon></button>
         <Footer/>
        </>
    );
}

export default Inicio;