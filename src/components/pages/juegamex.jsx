import React from 'react'
import './styles/juegamex.css'
import logo from '../assets/juegamex/juegamex_logo.png'

//Carrousel game photos
import colon from '../assets/juegamex/colon.png'
import conquista from '../assets/juegamex/conquista.png'
import mapa from '../assets/juegamex/mapa.png'
import memorama from '../assets/juegamex/memorama.png'
import preguntas from '../assets/juegamex/preguntas.png'
import recoleccion from '../assets/juegamex/recoleccion.png'

function Juegamex() {
  return (
    <div className='content'>
      <p className="coming-soon">
        Proximamente
      </p>
      <div className="text-banner">
        <h1>
          Juegamex
        </h1>
        <p>
        Juegamex es una plataforma comunitaria que tiene como objetivo enseñar la cultura mexicana de manera didáctica y divertida a estudiantes de primaria y secundaria. A través de juegos, los estudiantes aprenderán sobre la historia de México, valores y derechos humanos, complementando su educación en cultura general.
        </p>
      </div>
        <div className="objective-mision">
          <div className='juegamex-logo'>
            <img src={logo} alt="Logo Juegamex" />
          </div>
          <div className="objective-mision-text">
            <div className="objective">
              <h3>Objetivo</h3>
              <p>
              El objetivo de Juegamex es complementar la educación en cultura mexicana de nivel primaria y secundaria, proporcionando a los estudiantes una forma entretenida de aprender sobre la historia de México, valores y derechos humanos.
              </p>
            </div>
            <div className="mision">
              <h3>Misión</h3>
              <p>
              Nuestra misión en Juegamex es enriquecer la educación en cultura general de México, ofreciendo material didáctico de valor a profesores y estudiantes. Nos enfocamos en desarrollar juegos que enseñan sobre la historia de México, valores y derechos humanos, con el fin de brindar una forma efectiva y divertida de aprender.
              </p>
            </div>
          </div>
        </div>
        <div className='carousel-games-container'>
          <h3>Nuestros Juegos</h3>
        <div id="carousel-games" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
  <img src={colon} alt="colon"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Colón</h5>
    <p>Ayuda a Cristóbal Colón y a sus tres barcos a través del océano Atlántico en su viaje hacia América.</p>
  </div>
</div>
  <div className="carousel-item">
  <img src={conquista} alt="conquista"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Conquista</h5>
    <p>Sigue a Hernán Cortés en su conquista del imperio Azteca de una forma interactiva y divertida.</p>
  </div>
</div>
  <div className="carousel-item">
  <img src={mapa} alt="mapa"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Mapa</h5>
    <p>Una forma divertida de aprender el nombre y la posición de cada uno de los 32 estados de México en forma de rompecabezas.</p>
  </div>
</div>
  <div className="carousel-item">
  <img src={memorama} alt="memorama"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Memorama</h5>
    <p>Reconoce a los presidentes y otros personajes históricos de México encontrando pares en este juego de cartas.</p>
  </div>
</div>
  <div className="carousel-item">
  <img src={preguntas} alt="preguntas"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Preguntas</h5>
    <p>Responde preguntas de opción múltiple sobre cultura general de México en un divertido juego de lógica.</p>
  </div>
</div>
  <div className="carousel-item">
  <img src={recoleccion} alt="recoleccion"/>
  <div className="carousel-caption d-none d-md-block">
    <h5>Recoleccion</h5>
    <p>Conoce y aprende sobre tres de las culturas más importantes de México, recolectando fotos de lugares y costumbres de cada una.</p>
  </div>
</div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel-games" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-games" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
</div>
        </div>
        <br />
        <br />
        <br />
    </div>
  )
}

export default Juegamex
