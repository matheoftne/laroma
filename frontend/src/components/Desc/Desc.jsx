import React from "react";
import './Desc.css';
import { Link } from "react-router-dom";

function Desc() {
    return (
        <div id="Desc">
            <div id="descContainer">
                
                <div id="descImgAndTextContainer">
                    <div id="descImgContainer">
                        <div id="imgDescContainer1" className="imgDescContainer"></div>
                        <div id="imgDescContainer2" className="imgDescContainer"></div>
                        <div id="imgDescContainer3" className="imgDescContainer"></div>
                    </div>
                    <div id="descTextContainer">
                        <h2>Bienvenue dans Notre Univers</h2>
                        <p>Plongez au cœur de L'Aroma, où chaque moment devient une histoire à raconter. Rencontrez notre équipe, composée de passionnés dédiés à créer une atmosphère chaleureuse et accueillante.<br/><br/>

                            Explorez les origines de notre bar, imprégnées d'expériences uniques et de traditions familiales.<br/><br/>

                            Chez L'Aroma, nous croyons que les meilleurs moments sont ceux partagés. Rejoignez-nous pour créer ensemble des souvenirs mémorables et insufflez une touche de convivialité à chaque instant.
                        </p>
                        <Link to="/a-propos"><button  className="btnMain2">En savoir plus sur nous</button></Link>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="647" viewBox="0 0 1920 647" fill="none">
                    <path d="M-28 623L1166.2 151.901C1231.72 126.054 1215.58 29.1071 1145.22 25.8872V25.8872C1091.8 23.4423 1058.23 82.7255 1087.82 127.276L1285.15 424.399C1307.54 458.104 1307 502.078 1283.81 535.23L1267.47 558.573C1243.22 593.234 1194.51 599.722 1162.03 572.616V572.616C1112.98 531.685 1137.33 451.915 1200.87 445.338L1928 370.061" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
                </svg>
            </div>
        </div>
    );
}

export default Desc;