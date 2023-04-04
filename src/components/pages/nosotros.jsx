import React from 'react'
import './styles/nosotros.css'

//carrousel images
import slide1 from '../assets/nosotros/slides_carrousel/slide01.webp';
import slide2 from '../assets/nosotros/slides_carrousel/slide02.webp';
import slide3 from '../assets/nosotros/slides_carrousel/slide03.webp';
import slide4 from '../assets/nosotros/slides_carrousel/slide04.webp';
import slide5 from '../assets/nosotros/slides_carrousel/slide05.webp';
import slide6 from '../assets/nosotros/slides_carrousel/slide06.webp';
import slide7 from '../assets/nosotros/slides_carrousel/slide07.webp';
import slide8 from '../assets/nosotros/slides_carrousel/slide08.webp';
import slide9 from '../assets/nosotros/slides_carrousel/slide09.webp';
import slide10 from '../assets/nosotros/slides_carrousel/slide10.webp';

function nosotros() {
  return (
    <div className='content'>
      <div className="text-banner">
        <h1>
          ¿Qué nos distingue?
        </h1>
        <p>
          Somos una organización de beneficencia y nos dedicamos a involucrar los valores, la cultura de la legalidad y cultura de México a niños y jóvenes, mediante actividades en donde interactúen, se diviertan y aprendan a ser mejores ciudadanos.
        </p>
      </div>
      <div className="carrousel-section">
      <div className="carrousel-container">
                <div id="nosotros-slide" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                </div>
                  <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                </div>
                  <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={slide5} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide6} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide7} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide8} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide9} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide10} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#nosotros-slide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#nosotros-slide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      </div>
        <div className="videos-section">
          <div className="title">
          <h3>Más sobre nosotros</h3>
          <p>Aquí te compartimos más información sobre nosotros, para que conozcas a  nuestro equipo, nuestras metas y nuestras actividades</p>
          </div>
          <div className="videos">
            <iframe src="https://www.youtube.com/embed/x0wrvjExVMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/87BY6kr82KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <br />
        <br />
        <br />
    </div>
  )
}

export default nosotros