import React, { useEffect, useState } from "react";
import './TeamList.css';
import Patheo from '../../assets/images/patheo.webp';
import Marceau from '../../assets/images/marceau.webp';
import Marine from '../../assets/images/marine.webp';
import Bouchard from '../../assets/images/bouchard.webp';

function TeamList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/items')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(data);

  const imgTeam = [{
    image: Patheo
  }
  ,{
    image: Marceau
  }
  ,{
    image: Marine
  }
  ,{
    image: Bouchard
  }]

  return(
    <div className="TeamList">
      <div className="teamContainer">
        <div className="teamInfosContainer">
          <div id="lala1">
            {imgTeam.map(imgTeam => (
              <div key={imgTeam.id} className="imgTeam" style={{ backgroundImage: `url(${imgTeam.image})`}}></div>
            ))}
          </div>
          <div id="lala2">
            {Array.isArray(data) && data.map(team => (
              <div key={team.id} className="team-content">
                <div>
                  <p className="teamName">{team.nom}</p>
                  <p>{team.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg id="svgTeam" xmlns="http://www.w3.org/2000/svg" width="1920" height="290" viewBox="0 0 1920 290" fill="none">
          <path d="M-35 19.5L62.2659 107.616C192.877 225.942 386.501 242.276 535.089 147.503L585.495 115.352C699.633 42.553 848.521 52.9147 952.102 140.082V140.082C1066.86 236.652 1235.34 236.969 1349.69 139.924V139.924C1452.6 52.5968 1600.43 42.6102 1714.14 115.304L1953 268" stroke="#FBBA44" stroke-opacity="0.2" stroke-width="50"/>
        </svg>
      </div>
    </div>
  );
}

export default TeamList;
