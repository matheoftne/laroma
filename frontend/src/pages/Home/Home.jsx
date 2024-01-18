import React from "react";
import './Home.css';
import TopTitle from "../../components/TopTitle/TopTitle";
import Desc from "../../components/Desc/Desc";
import Carrousel from "../../components/Carrousel/Carrousel";
import Blog from "../../components/Blog/Blog";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Home() {
    return (
        <div id="Home">
            <main>
                <ScrollToTop />
                <TopTitle />
                <Desc />
                <Carrousel /> 
                <Blog />
            </main>
        </div>
    );
}

export default Home;