import React from "react";
import './TopTitle.css';
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';

function TopTitle() {
    return (
        <div id="homeContent">
            <Fade direction="right">
                <div id="fondVerreVioletContainer">
                    <div id="fondVerreVioletTextContainer">
                        <h1>Trouvez exactement ce que vous cherchez a L'Aroma.</h1>
                        <p>Des saveurs inoubliables, des ambiances uniques, une expérience inégalée.</p>
                        <Link to="/carte-des-consos"><button  className="btnMain2">Decouvir la carte</button></Link>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="512" viewBox="0 0 1920 512" fill="none">
                        <path d="M-28 80.0588L513.849 399.698C555.324 424.164 536.633 487.812 488.515 485.968V485.968C434.606 483.902 427.081 407.001 479.567 394.524L2034 25" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
                    </svg>  
                </div>
            </Fade>
        </div>
    );
}

export default TopTitle;