import React, { Component } from 'react'
import './footer.css'

// Logos
import facebook_logo from "../assets/facebook.svg";
import instagram_logo from "../assets/instagram.svg";
import linkedin_logo from "../assets/linkedin.svg";
import twitter_logo from "../assets/twitter.svg";

export class footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>Siguenos en nuestras redes sociales</h3>
        <div className="social-links">
                <a rel="noreferrer" href="https://twitter.com/cmv_ac" target="_blank"><img src={twitter_logo} alt="Twitter" width="40px" height="auto"/></a>
                <a rel="noreferrer" href="https://www.linkedin.com/company/cmvac/" target="_blank"><img src={linkedin_logo} alt="Linkedin" width="40px" height="auto"/></a>
                <a rel="noreferrer" href="https://www.instagram.com/cmexicov.ac/" target="_blank"><img src={instagram_logo} alt="Instagram" width="40px" height="auto"/></a>
                <a rel="noreferrer" href="https://www.facebook.com/cmv.ac" target="_blank"><img src={facebook_logo} alt="Facebook" width="40px" height="auto"/></a>
            </div>
            <br/>
            <div class="author-rights">
            ©2023 by Cambiando México con Valores A.C.
            </div>
        </div>
    )
  }
}

export default footer


