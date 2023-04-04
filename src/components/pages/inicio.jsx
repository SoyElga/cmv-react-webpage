import React, { useRef } from 'react';
import './styles/inicio.css';
import objective_image from "../assets/inicio/objective.webp";
import join_image from "../assets/inicio/join01.webp";
import emailjs from '@emailjs/browser';

function Inicio() {
  const form = useRef();

  const sendJoinEmail = (e) => {
    e.preventDefault();

      // Check if this IP address has already sent 3 emails today
      const today = new Date().toISOString().slice(0, 10); // Get today's date in ISO format (YYYY-MM-DD)
      const ip = e.target.elements.user_ip.value; // Get the IP address from a hidden input field in the form
      const sentEmails = JSON.parse(localStorage.getItem('sentEmails')) || {}; // Get the previously sent emails from local storage
      const sentToday = sentEmails[today]?.[ip] || 0; // Get the number of emails sent by this IP address today
      if (sentToday >= 3) {
        alert('Lo siento, no puedes enviar más de 3 correos por día.');
        return;
      }

    const message = form.current.message.value;
  
    if (message.trim() === '') {
      emailjs.send('contact_service', 'join_form', {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        user_number: form.current.user_number.value,
        message: 'El usuario no agregó un mensaje'
      }, 'zabsHhOT-AG1Sbuvh')
        .then(() => {
          alert("Correo enviado correctamente con un mensaje predeterminado. ¡Gracias por contactarnos!");
          // Save the sent email in local storage
          if (!sentEmails[today]) {
            sentEmails[today] = {};
          }
          sentEmails[today][ip] = sentToday + 1;
          localStorage.setItem('sentEmails', JSON.stringify(sentEmails));
          form.current.reset(); // Clear the form
        }, (error) => {
          alert("No se ha podidio enviar el correo \n" + error.text, "CMV A.C.");
        });
    } else {
      emailjs.sendForm('contact_service', 'join_form', form.current, 'zabsHhOT-AG1Sbuvh')
        .then(() => {
          alert("Correo enviado correctamente. ¡Gracias por contactarnos!");
          // Save the sent email in local storage
          if (!sentEmails[today]) {
            sentEmails[today] = {};
          }
          sentEmails[today][ip] = sentToday + 1;
          localStorage.setItem('sentEmails', JSON.stringify(sentEmails));
          form.current.reset(); // Clear the form
        }, (error) => {
          alert("No se ha podidio enviar el correo \n" + error.text, "CMV A.C.");
        });
    }
  };

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
          <form ref={form} onSubmit={sendJoinEmail}>
          <div class="mb-3">
            <input type="text" id="name-input" aria-describedby="name" placeholder='Nombre completo *' name='user_name' required/>
        </div>
          <div class="mb-3">
            <input type="email" id="email-input" aria-describedby="email" placeholder='Correo electrónico *' name='user_email' required/>
        </div>
          <div class="mb-3">
            <input type="text" id="number-input" aria-describedby="number" placeholder='Número de teléfono *' name='user_number' required/>
        </div>
          <div class="mb-3">
            <textarea placeholder="Mensaje" name='message'/>
        </div>
        <button type="submit" class="btn btn-send" value={"Send"}>Enviar</button>
        <div style={{"color": "#555"}}>
          * Este campo es obligatorio
        </div>
        </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Inicio
