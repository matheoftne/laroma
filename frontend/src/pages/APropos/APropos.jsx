import React from "react";
import './APropos.css';
import TeamImg from '../../assets/images/team.webp';
import TeamList from '../../components/TeamList/TeamList';
import StoryImgBar from '../../assets/images/bar.webp';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Fade } from 'react-awesome-reveal';

function APropos() {
    return (
        <div id="APropos">
            <ScrollToTop />
            <Fade direction="right">
                <div id="AProposContainer">
                    <div id="AProposContent">
                        <div id="imgContainer">
                            <div id="imgTeamContainer" style={{ backgroundImage: `url(${TeamImg})`}}></div>
                            <div id="bulleYellow"></div>
                        </div>
                        <div id="AProposTextContainer">
                            <h1>Bienvenue dans Notre Univers</h1>
                            <p className="textAPropos">Notre histoire est façonnée par des individus talentueux et enthousiastes, chacun apportant sa touche unique à l'atmosphère chaleureuse de notre bar.</p>
                            <p className="textAPropos"> Rencontrez notre équipe passionnée, des experts de la mixologie aux hôtes accueillants, tous engagés à faire de chaque visite un moment inoubliable.</p>
                            <p className="textAPropos">À L'Aroma, nous croyons que c'est notre équipe qui rend chaque expérience spéciale. </p>
                            <p className="textAPropos">Parcourez les profils ci-dessous pour mieux connaître les personnes derrière les sourires et découvrez ce qui fait de L'Aroma un endroit exceptionnel.</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="697" viewBox="0 0 1920 697" fill="none">
                            <path d="M-196 626.306L886.684 135.11C944.307 108.967 923.751 22.5146 860.527 25.1065V25.1065C799.255 27.6184 783.82 111.409 840.175 135.589L2095 674" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
                        </svg>
                    </div>
                    <TeamList />
                </div>
                <div id="storyContainer">
                    <div id="storyText">
                        <h2>Le Reve Complice de Matheo et Marine</h2>
                        <p>Il y a quatre ans, deux amis inséparables, Mathéo et Marine, ont décidé de réaliser un rêve partagé : créer un lieu unique où chaque soirée serait une escapade dans l'extraordinaire.</p>
                        <p>Partant d'un bâtiment oublié, ils ont insufflé une nouvelle vie à L'Aroma. Les salles à thème, fruit de leur passion commune, sont des témoignages de leur histoire.</p>
                        <p>Mathéo, fasciné par l'histoire, a apporté des touches nostalgiques, tandis que Marine, amoureuse des mondes fantastiques, a insufflé une magie moderne.</p>
                        <p>Au fil des ans, le bar est devenu un laboratoire créatif, où chaque cocktail est une œuvre d'art et chaque détail raconte une anecdote personnelle. Les débuts modestes ont cédé la place à une communauté vibrante de curieux et d'amateurs de convivialité.</p>
                        <p>Mathéo et Marine ne sont pas simplement les propriétaires de L'Aroma, ils sont les gardiens d'une expérience. Chaque soir, ils accueillent les clients avec des sourires complices, partageant l'amour de l'inhabituel autour de verres créatifs.</p>
                        <p>Ainsi, L'Aroma n'est pas seulement un bar. C'est une aventure qui a transformé deux amis rêveurs en créateurs d'une oasis où les nuits ordinaires deviennent extraordinaires. Bienvenue dans l'univers de Mathéo et Marine, bienvenue chez L'Aroma, où chaque détail est une page d'une histoire de quatre ans et plus encore. 🚀🍸</p>
                    </div>
                    <div id="storyImgBar" style={{ backgroundImage: `url(${StoryImgBar})`}}></div>
                </div>
            </Fade>
        </div>
    );
}

export default APropos;