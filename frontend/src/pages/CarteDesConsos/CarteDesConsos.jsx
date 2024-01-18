import React from "react";  
import './CarteDesConsos.css';
import Carte1 from '../../assets/images/carte1.webp';
import Carte2 from '../../assets/images/carte2.webp';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function CarteDesConsos() {
    return (
        <div id="CarteDesConsos">
            <ScrollToTop />
            <h2>decouvrez notre carte des saveurs: des consommations uniques pour chaque palais</h2>
            <div id="carte1Container" style={{ backgroundImage: `url(${Carte1})`}}></div>
            <div id="carte2Container" style={{ backgroundImage: `url(${Carte2})`}}></div>
        </div>
    );
}

export default CarteDesConsos;