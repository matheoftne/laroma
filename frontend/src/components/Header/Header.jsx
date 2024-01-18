import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LogoLAroma from "../../assets/images/logo-laroma.webp";

function Header() {
    return (
        <header id="headerContainer">
            <div id="header">
                <img src={LogoLAroma} alt="" />
                <div>
                    <Link className="btnHeaderMenu" to="/">accueil</Link>
                    <Link className="btnHeaderMenu" to="/a-propos">a propos</Link>
                    <Link className="btnHeaderMenu" to="/salle-a-theme">salle a theme</Link>
                    <Link className="btnHeaderMenu" to="/carte-des-consos">carte des consos</Link>
                    <Link className="btnHeaderMenu" to="/nos-produits">nos produits</Link>
                    <Link className="btnHeaderMenu" to="/blog">blog</Link>
                    <Link className="btnHeaderMenu" to="/contact">contact</Link>
                    <Link className="btnMain" to="/contact">reservation</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;