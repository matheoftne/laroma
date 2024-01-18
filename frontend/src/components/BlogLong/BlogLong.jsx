import React from "react";
import './BlogLong.css';
import Blog1 from '../../assets/images/blog1.webp';
import Blog2 from '../../assets/images/blog2.webp';
import Blog3 from '../../assets/images/blog3.webp';
import Blog4 from '../../assets/images/blog4.webp';
import Blog5 from '../../assets/images/blog5.webp';
import Blog6 from '../../assets/images/blog6.webp';
import { Fade } from 'react-awesome-reveal';

function BlogLong() {
    return (
        <div id="BlogLong">
                <svg id="svgBlogLong" xmlns="http://www.w3.org/2000/svg" width="1814" height="1129" viewBox="0 0 1814 1129" fill="none">
                    <path d="M-40 24L1608.39 647.055C1695.68 680.046 1789 615.552 1789 522.243V522.243C1789 426.385 1690.93 361.8 1602.87 399.663L-40 1106" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
                </svg>
            <Fade direction={"left"}>

                <h2>Notre blog</h2>
                <div id="blogLongContainer">
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog1})`}}></div>
                        <div className="blogsLongContent">
                            <h3>le martini vesper</h3>
                            <p>La boisson emblématique de James Bond est le "Martini Vesper". 
                                Voici la recette classique de cette boisson qui a été popularisée dans le roman "Casino Royale" de Ian Fleming : Martini Vesper de James Bond
                            </p>
                            <p>Ingrédients :</p>
                            <ul>
                                <li>6 cl de gin (de préférence un gin sec)</li>
                                <li>1.5 cl de vodka</li>
                                <li>0.75 cl de liqueur de Lillet Blanc</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog2})`}}></div>
                        <div className="blogsLongContent">
                            <h3>Nouveaux serveurs</h3>
                            <p>Nous sommes ravis de vous présenter nos tout nouveaux serveurs, conçus pour offrir une expérience de service encore plus exceptionnelle à notre clientèle passionnée.</p>
                            <p>La Technologie au Service de l'Expérience Client : Nos nouveaux serveurs sont équipés des dernières avancées.</p>
                        </div>
                    </div>
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog3})`}}></div>
                        <div className="blogsLongContent">
                            <h3>Webinaire 2023</h3>
                            <p>Nous sommes ravis de vous annoncer nos tout nouveaux webinaires, une aventure virtuelle conçue pour éduquer, inspirer et partager notre passion avec vous.</p>
                            <p>Une Connexion Virtuelle : Nos webinaires offrent une opportunité unique de vous connecter avec notre équipe et d'explorer divers aspects du monde fascinant de L'Aroma.</p>
                        </div>
                    </div>
                </div>
               
                <div id="blogLongContainer">
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog4})`}}></div>
                        <div className="blogsLongContent">
                            <h3>Nouveau site web</h3>
                            <p>Nous sommes ravis de vous présenter notre tout nouveau site web, une plateforme repensée pour vous offrir un accès transparent à tout ce que L'Aroma a à offrir.</p>
                            <p>Une Navigation Intuitive : Notre nouveau site a été conçu avec vous à l'esprit. La navigation est intuitive, permettant à chacun de trouver facilement les informations sur nos événements.</p>
                        </div>
                    </div>
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog5})`}}></div>
                        <div className="blogsLongContent">
                            <h3>mojito pakistanais</h3>
                            <p> "Mojito Pakistanais" est une variante rafraîchissante du classique Mojito, intégrant des saveurs spécifiques de la cuisine pakistanaise. Voici une recette simple pour vous permettre de le préparer chez vous :</p>
                            <p>Ingrédients :</p>
                            <ul>
                                <li>10 à 12 feuilles de menthe fraîche...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blogsLong">
                        <div className="imgLongContainer" style={{ backgroundImage: `url(${Blog6})`}}></div>
                        <div className="blogsLongContent">
                            <h3>soirée avec paul</h3>
                            <p>Préparez-vous pour une soirée épique de jeux et de rires avec Paul dans l'univers captivant de Fortnite. C'est l'occasion parfaite de plonger dans des batailles passionnantes, de construire des forteresses, et surtout, de créer des souvenirs inoubliables. Que la bataille commence !</p>
                            <p>Programme de la Soirée...</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default BlogLong;