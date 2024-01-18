import React from "react";
import './NosProduits.css';
import Rhum1 from '../../assets/images/rhum1.webp';
import Rhum2 from '../../assets/images/rhum2.webp';
import Rhum3 from '../../assets/images/rhum3.webp';
import Vodka from '../../assets/images/vodka.webp';
import Biere from '../../assets/images/biere.webp';
import Cafe from '../../assets/images/cafe.webp';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Fade } from 'react-awesome-reveal';

function NosProduits() {
    return (
        <div id="NosProduits">
            <ScrollToTop />
            <Fade direction={"down"}>
                <h1>explorez notre boutique artisanale : quatre tresors uniques a decouvrir</h1>
                <p>Retrouvez-les également dans notre bar en physique, à consommer sur place oû à emporter .</p>

                <div className="produitContainer">
                    <div className="imgProduitContainer imgProduitExtraContainer1" style={{ backgroundImage: `url(${Rhum1})`}}></div>
                    <div className="imgProduitContainer" style={{ backgroundImage: `url(${Rhum2})`}}></div>
                    <div className="imgProduitContainer imgProduitExtraContainer2" style={{ backgroundImage: `url(${Rhum3})`}}></div>
                    <div className="textProduitContainer">
                        <h2>Rhum Mature Millésime 2016</h2>
                        <p>Plongez dans l'élégance intemporelle avec notre Rhum Maturé Millésime 2016, une expérience sensorielle qui capture la richesse des années passées en fût. Ce rhum exceptionnel offre une palette complexe de saveurs, mêlant des notes sucrées de vanille et de caramel à des nuances subtiles de chêne. Chaque gorgée est une invitation à voyager dans le temps, révélant les arômes profonds et les souvenirs imprégnés au cours de son vieillissement soigneux. Dégustez le caractère unique de cette cuvée exclusive qui incarne l'art de la distillation et du vieillissement, un hommage à l'année 2016 qui continue de s'épanouir en bouteille.</p>
                    </div>
                </div>

                <div className="produitContainer">
                    <div className="imgProduitContainer" style={{ backgroundImage: `url(${Biere})`}}></div>
                    <div className="textProduitContainer">
                        <h2>Bieres Artisanales primé 2019</h2>
                        <p>Découvrez notre collection exclusive de Bières Artisanales Millésime 2016, une célébration brassicole issue d'une année exceptionnelle. Chacune de ces bières incarne le savoir-faire de notre brasserie, capturant les caractéristiques uniques de sa maturation depuis 2016. Le profil gustatif de ces bières offre une fusion harmonieuse de malt riche, de houblons soigneusement sélectionnés et de subtils arômes de levure. Des notes complexes de fruits, d'épices et de céréales se révèlent à chaque gorgée, témoignant du mariage parfait des ingrédients de qualité. Laissez-vous emporter par l'histoire que chaque bouteille raconte, une histoire façonnée par les mains expertes de nos brasseurs. Les Bières Artisanales Millésime 2016 sont bien plus qu'une boisson, elles sont une expérience brassicole qui évoque le passage du temps et le dévouement à l'art de la bière.</p>
                    </div>
                </div>

                <div className="produitContainer">
                    <div className="imgProduitContainer" style={{ backgroundImage: `url(${Cafe})`}}></div>
                    <div className="textProduitContainer">
                        <h2>Cafe signature aux grains français</h2>
                        <p>Découvrez l'essence même de L'Aroma avec notre Café Signature, un mélange exclusif conçu pour les amateurs de café exigeants. Chaque gorgée de ce café exceptionnel vous transporte dans un voyage sensoriel, révélant des notes distinctes et un arôme profondément envoûtant.</p>
                    </div>
                </div>

                <div className="produitContainer">
                    <div className="imgProduitContainer" style={{ backgroundImage: `url(${Vodka})`}}></div>
                    <div className="textProduitContainer">
                        <h2>Vodka Premium "Aromatique Étoilee</h2>
                        <p>Plongez dans l'élégance sophistiquée avec notre Vodka Premium "Aromatique Étoilée". Cette vodka exceptionnelle est le résultat d'un mariage parfait d'ingrédients de qualité supérieure et d'un processus de distillation méticuleux. Découvrez une expérience de dégustation qui transcende les attentes.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default NosProduits;