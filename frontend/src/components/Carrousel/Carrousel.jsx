import React, { useState } from 'react';
import './Carrousel.css';
import ImgCarrousel1 from '../../assets/images/carrousel1.webp';
import ImgCarrousel2 from '../../assets/images/carrousel2.webp';
import ImgCarrousel3 from '../../assets/images/carrousel3.webp';
import ImgCarrousel4 from '../../assets/images/carrousel4.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Carrousel() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const slides = [
        {
            title: "salle classique",
            image: ImgCarrousel1,
            description: "Bienvenue dans notre Salle de Travail chez L'Aroma, l'espace où la productivité rencontre le confort. Dotée d'une ambiance inspirante, notre salle offre un cadre moderne et fonctionnel pour tous ceux qui recherchent un lieu propice à la concentration. "
        },
        {
            title: "Salle Dansante",
            image: ImgCarrousel2,
            description: "Notre Salle Dansante à L'Aroma est l'essence même de la fête. Baignée de lumières envoûtantes, elle vous invite à vous perdre dans le rythme de la musique. Que vous soyez passionné de danse ou simplement en quête de moments de bonheur, cette salle est le lieu où la nuit prend vie."
        },
        {
            title: "Salle Jazz",
            image: ImgCarrousel3,
            description: "Bienvenue dans notre Salle Chill chez L'Aroma, l'oasis de détente où le temps ralentit et les soucis s'évaporent. Conçue pour offrir une atmosphère décontractée et conviviale, notre salle chill est l'endroit idéal pour se détendre, que ce soit en solo ou avec des amis."
        },
        {
            title: "Salle Pop",
            image: ImgCarrousel4,
            description: "Bienvenue dans notre Salle Polyvalente chez L'Aroma, l'espace multifonctionnel où chaque événement devient mémorable. Que ce soit pour des réunions d'affaires, des célébrations spéciales ou des événements communautaires, notre salle polyvalente offre une toile adaptable pour réaliser vos idées."
        }
    ];
  
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    
    return (
        <div id="Carrousel">
            <h2>Nos differentes salles</h2>
            <div className="carousel">
                <div className="slides">
                    {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === activeIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.image})`}}>
                        <div className="slide-content">
                            <h4>{slide.title}</h4>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className="next" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <Link to="/salle-a-theme"><button className='btnMain2'>Découvrir nos salles</button></Link>
        </div>
    );
}

export default Carrousel;
