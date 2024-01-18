import React from "react";
import './SalleATheme.css';
import Carrousel1 from '../../assets/images/carrousel1.webp';
import Carrousel2 from '../../assets/images/carrousel2.webp';
import Carrousel3 from '../../assets/images/carrousel3.webp';
import Carrousel4 from '../../assets/images/carrousel4.webp';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Fade } from 'react-awesome-reveal';

function SalleATheme() {
    return (
        <main>
                <ScrollToTop />
                <svg id="svgSalleATheme" xmlns="http://www.w3.org/2000/svg" width="1861" height="3515" viewBox="0 0 1861 3515" fill="none">
                    <path d="M1301.5 -34L406.573 237.445C246.88 285.883 137.687 433.108 137.687 599.986V599.986C137.687 806.134 302.518 974.445 508.62 978.754L1467.39 998.795C1672.2 1003.08 1836 1170.33 1836 1375.19V1375.19C1836 1576.99 1676.89 1742.9 1475.27 1751.34L503.009 1792.05C298.821 1800.6 137.687 1968.62 137.687 2172.99V2172.99C137.687 2369.47 287.002 2533.78 482.588 2552.52L1511.83 2651.16C1695.66 2668.78 1836 2823.21 1836 3007.89V3007.89C1836 3194.32 1693.05 3349.61 1507.25 3365.02L0 3490" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
                </svg>
                <Fade direction={"left"}>
                    <div id="SalleATheme">
                        <div id="salleInfo1" className="salleInfoContainer" >
                            <div className="imgSalleContainer" style={{ backgroundImage: `url(${Carrousel1})`}}></div>
                            <div className="salleTextContent">
                                <h2>La salle mystere</h2>
                                <p>Découvrez notre salle polyvalente à L'Aroma, une toile en constante évolution prête à accueillir vos rêves les plus fous. Dotée d'un design raffiné mêlant modernité et charme intemporel, cette salle offre une adaptabilité sans limites, transformant chaque événement en une expérience exceptionnelle.</p>
                                <p>Que ce soit pour une réunion d'affaires distinguée, une célébration familiale chaleureuse ou un événement privé exclusif, notre salle polyvalente s'adapte à vos besoins. Des agencements de sièges flexibles, une technologie audiovisuelle de pointe et une équipe dédiée garantissent que chaque détail est soigneusement orchestré.</p>
                                <p>Réservez dès aujourd'hui et faites de votre prochain événement une expérience extraordinaire. L'Aroma Polyvalente, où chaque détail compte, pour créer des souvenirs qui dureront toute une vie. 🌟🎉</p>
                            </div>
                        </div>

                        <div id="salleInfo2" className="salleInfoContainer reverse">
                            <div className="imgSalleContainer" style={{ backgroundImage: `url(${Carrousel2})`}}></div>
                            <div className="salleTextContent">
                                <h2>La salle jazz</h2>
                                <p>Bienvenue dans notre sanctuaire de tranquillité au cœur de la ville : L'Aroma Chill. Avec son design bohème, ses sièges confortables et ses cocktails artisanaux rafraîchissants, cette salle est bien plus qu'un simple espace – c'est une invitation à la détente, à l'évasion et à la création de souvenirs inoubliables.</p>
                                <p>Pour accompagner votre expérience, L'Aroma Chill propose une sélection spéciale de cocktails artisanaux. Des créations rafraîchissantes, des saveurs uniques – chaque gorgée est une expérience en soi. Et si vous avez des événements spéciaux à célébrer, notre espace se transforme pour répondre à vos besoins, créant ainsi un cadre unique pour des moments inoubliables. </p>
                                <p>Que ce soit pour une escapade en solo, une soirée décontractée entre amis ou une célébration intime, L'Aroma Chill vous attend. Réservez dès aujourd'hui et plongez dans une expérience relaxante qui transcende l'ordinaire au cœur de la ville. 🌿🍹</p>

                            </div>
                        </div>

                        <div id="salleInfo3" className="salleInfoContainer">
                            <div className="imgSalleContainer" style={{ backgroundImage: `url(${Carrousel3})`}}></div>
                            <div className="salleTextContent">
                                <h2>La salle Pop</h2>
                                <p>Bienvenue dans notre espace vibrant dédié à la danse et à la célébration : L'Aroma Dansante. Ici, les murs pulsent au rythme de la musique, et chaque coin de la salle invite à bouger, à rire et à créer des souvenirs inoubliables. Plongez dans un univers où l'énergie de la danse est capturée dans chaque détail du design. Des lumières dynamiques, des espaces ouverts et une piste de danse centrale créent une ambiance électrique dès que vous mettez le pied dans L'Aroma Dansante.</p>
                                <p>vous entraînent dans un voyage musical. Des rythmes entraînants aux classiques intemporels, chaque morceau est choisi pour créer une atmosphère enivrante qui vous fera vibrer. L'Aroma Dansante est également disponible pour des événements spéciaux. </p>
                                <p>Des soirées à thème aux célébrations endiablées, cet espace polyvalent peut être adapté pour créer une ambiance sur mesure pour vos moments festifs. Que ce soit pour une soirée entre amis, une célébration spéciale ou simplement pour danser au rythme de la vie.  🎶💃</p>

                            </div>
                        </div>

                        <div id="salleInfo4" className="salleInfoContainer reverse">
                            <div className="imgSalleContainer" style={{ backgroundImage: `url(${Carrousel4})`}}></div>
                            <div className="salleTextContent">
                                <h2>La salle classique</h2>
                                <p>Bienvenue dans notre salle de travail dynamique et stimulante : L'Aroma Cowork. C'est bien plus qu'un simple espace de travail – c'est un environnement où l'innovation rencontre la concentration, et où chaque détail est conçu pour favoriser la productivité.</p>
                                <p>Plongez dans un cadre moderne et fonctionnel qui combine confort et esthétique. L'Aroma Cowork offre un design ergonomique avec des espaces de travail flexibles, des prises électriques accessibles et une luminosité naturelle pour stimuler votre créativité.</p>
                                <p>Qu'il s'agisse de réunions d'équipe dynamiques ou de moments de concentration personnelle, notre salle de travail offre des espaces variés. Des coins informels pour des échanges spontanés aux bureaux réservés, L'Aroma Cowork s'adapte à vos besoins professionnels.</p>
                                <p>Profitez d'une connexion Internet haut débit fiable pour rester connecté et travailler efficacement. L'Aroma Cowork offre un environnement technologiquement équipé pour répondre à vos exigences professionnelles.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            
        </main>
    );
}

export default SalleATheme;