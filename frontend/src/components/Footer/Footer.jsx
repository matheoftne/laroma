import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LogoLAromaGreen from '../../assets/images/logo-laroma-green.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <section id='footer__section__social'>
                    <img src={LogoLAromaGreen} alt="" />
                    <div id='socialMediaContainer'>
                        <Link to="/" className='btnSocialMedia'><FontAwesomeIcon icon={faTiktok} /></Link>
                        <Link to="/" className='btnSocialMedia'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="/" className='btnSocialMedia'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </div>
                </section>
                <section className="footer__section">
                    <h3 className="footer__title">liens rapides</h3>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link to="/" className="footer__link">accueil</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/salle-a-theme" className="footer__link">salle à thème</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/carte-des-consos" className="footer__link">carte des consos</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/nos-produits" className="footer__link">nos produits</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/blog" className="footer__link">blog</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/reservation" className="footer__link">réservation</Link>
                        </li>
                    </ul>
                </section>
                <section className="footer__section">
                    <h3 className="footer__title">liens utiles</h3>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link to="/about" className="footer__link">politique de confidentialité</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/contact" className="footer__link">conditions d'utilisation</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/privacy" className="footer__link">mentions légales</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/privacy" className="footer__link">FAQ</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/privacy" className="footer__link">CGU/CGV</Link>
                        </li>
                    </ul>
                </section>
                <section className="footer__section">
                    <h3 className="footer__title">coordonnees</h3>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link to="/about" className="footer__link">45 rue de Gallou, Angers</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/contact" className="footer__link">02 51 47 64 35</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/privacy" className="footer__link">marindesign@aroma.com</Link>
                        </li>
                    </ul>
                </section>
            </div>        
            <div id='bandeYellow'>
                <p id='bandeYellowText'>Copyright © 2024 L'Aroma. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;