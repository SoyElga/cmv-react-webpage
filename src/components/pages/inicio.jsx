import React from 'react'
import './inicio.css'
import objective_image from "../assets/inicio/objective.webp"
import join_image from "../assets/inicio/join01.webp"

function inicio() {
  return (
    <div className="content">
      <div className='page-title'>
        <h1>Cambiando México con Valores A.C.</h1>
        <p>Forjamos el camino hacia un mejor futuro... "Formando personas íntegras, honestas y respetuosas"</p>
      </div>
      <div className='objective'>
        <div className="text">
        <h3>¿A quién beneficiamos?</h3>
        <p>Los talleres están dedicados a jóvenes entre 12 y 18 años de edad que actualmente están en casas hogares y escuelas públicas del Estado de Nuevo León.</p>
        </div>
        <div className="img-container">
          <img src={objective_image} alt="objective_image"/>
        </div>
      </div>
      <div className='join'>
        <div className='img-container'>
          <img src={join_image} alt="objective_image"/>
        </div>
        <div className='join-form'>
          <div className="header">
        <h3>Únete a nuestro equipo</h3>
        <p>Diviertete con nuestras oportunidades de voluntariado forjando un país mejor</p>
          </div>
        <form>
          <div class="mb-3">
            <input type="text" id="name-input" aria-describedby="name" placeholder='Nombre completo'/>
        </div>
          <div class="mb-3">
            <input type="email" id="email-input" aria-describedby="email" placeholder='Correo electrónico'/>
        </div>
          <div class="mb-3">
            <input type="text" id="number-input" aria-describedby="number" placeholder='Número de teléfono'/>
        </div>
          <div class="mb-3">
            <textarea placeholder="Mensaje" />
        </div>
        <button type="submit" class="btn btn-send">Enviar</button>
        </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default inicio
