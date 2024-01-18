import React from 'react';
import './Contact.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Fade } from 'react-awesome-reveal';

function Contact() {
    return (
        <div id="Contact">
            <ScrollToTop />
            <Fade direction='down'>
                <h1>Besoin de <strong>nous parler ?</strong> Nous sommes plus <strong>accessibles</strong> qu'un cafe a volonte un lundi matin ! ☕💬</h1>
                <div className="login-box">
                    <form>
                        <div class="user-box">
                            <input type="text" name="nom" required="" />
                            <label>Ton nom</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="email" required="" />
                            <label>Adresse e-mail</label>
                        </div>
                        <div class="user-box">
                            <input type="tel" name="tel" required="" />
                            <label>Ton 06</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="objet" required="" />
                            <label>Raison de votre contact</label>
                        </div>
                        
                        <div id='messageContainer'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>

                        <button className='btnMain2' type="submit" style={{ cursor: `pointer` }}>ENVOYER</button>

                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contact;