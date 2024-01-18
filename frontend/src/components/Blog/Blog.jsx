import React from "react";
import './Blog.css';
import Blog1 from '../../assets/images/blog1.webp';
import Blog2 from '../../assets/images/blog2.webp';
import Blog3 from '../../assets/images/blog3.webp';
import { Fade } from 'react-awesome-reveal';

function Blog() {
    return (
        <div id="Blog">
            <Fade direction={"left"}>
                <h2>Notre blog</h2>
                <div id="blogContainer">
                    <div className="blogs">
                        <div className="imgContainer" style={{ backgroundImage: `url(${Blog1})`}}></div>
                        <div className="blogsContent">
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
                    <div className="blogs">
                        <div className="imgContainer" style={{ backgroundImage: `url(${Blog2})`}}></div>
                        <div className="blogsContent">
                            <h3>Nouveaux serveurs</h3>
                            <p>Nous sommes ravis de vous présenter nos tout nouveaux serveurs, conçus pour offrir une expérience de service encore plus exceptionnelle à notre clientèle passionnée.</p>
                            <p>La Technologie au Service de l'Expérience Client : Nos nouveaux serveurs sont équipés des dernières avancées.</p>
                        </div>
                    </div>
                    <div className="blogs">
                        <div className="imgContainer" style={{ backgroundImage: `url(${Blog3})`}}></div>
                        <div className="blogsContent">
                            <h3>Webinaire 2023</h3>
                            <p>Nous sommes ravis de vous annoncer nos tout nouveaux webinaires, une aventure virtuelle conçue pour éduquer, inspirer et partager notre passion avec vous.</p>
                            <p>Une Connexion Virtuelle : Nos webinaires offrent une opportunité unique de vous connecter avec notre équipe et d'explorer divers aspects du monde fascinant de L'Aroma.</p>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
}

export default Blog;