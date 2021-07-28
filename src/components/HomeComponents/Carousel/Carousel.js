import React from 'react'
import imageHombre from '../../../assets/images/modelo_hombre.jpeg';
import imageMujer from '../../../assets/images/modelo_mujer.jpeg';
import imageNene from '../../../assets/images/modelo_nene.jpeg';

const Carousel = () => {

    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="d-block w-100" src={imageNene} alt="First slide"/>
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src={imageHombre} alt="Second slide"/>
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src={imageMujer} alt="Third slide"/>
								</div>
							</div>
							<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
        </div>
    )
}

export default Carousel
